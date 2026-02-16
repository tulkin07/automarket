import Card from "@/components/Card";
import CustomerMessage from "@/components/CustomerMessage";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import MainProducts from "@/components/MainProducts";
import Partners from "@/components/Partners";
import Spinner from "@/components/Spinner";
import React, { Suspense } from "react";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <main className="mt-24 max-w-5xl mx-auto ">
        <Suspense fallback={<Spinner/>}>
            <MainProducts />
        </Suspense>
      </main>
      <HowWorks />
      <Partners/>
      <CustomerMessage/>
    </div>
  );
}
