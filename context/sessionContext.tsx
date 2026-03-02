"use client";

import { createContext, ReactNode, useEffect, useState, useContext } from "react";
import { useAuth } from "./authContext";
import api from "@/app/service/api";

interface UserDataType {
  id: string;
  phone: string;
  fullName: string;
  region: string;
  city: string;
  role: string;
  active: boolean;
}

type SessionContextType = {
  userData: UserDataType | null;
  setUser: React.Dispatch<React.SetStateAction<UserDataType | null>>;
};

const SessionContext = createContext<SessionContextType | null>(null);

export const useSession = () => {
  const ctx = useContext(SessionContext);
  if (!ctx) {
    throw new Error("useSession must be used inside SessionContextProvider");
  }
  return ctx;
};

const SessionContextProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUser] = useState<UserDataType | null>(null);
  const { isAuth, setAuth } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      setUser(null);
      return;
    }

    api
      .get("/users/me")
      .then((res) => setUser(res.data))
      .catch(() => {
        setAuth(false);
        localStorage.removeItem("automarketToken");
        setUser(null);
      });
  }, [isAuth, setAuth]);

  return (
    <SessionContext.Provider value={{ userData, setUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;