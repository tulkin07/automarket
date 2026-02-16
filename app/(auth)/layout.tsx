import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-200 w-full h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
