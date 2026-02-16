import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

export default function WebLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
       <Footer />
    </>
  );
}
