"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  isAuth: boolean;
  setAuth: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("automarketToken");
    if (token) {
      setAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;