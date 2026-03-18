"use client";
import React, { useState } from "react";
import hero from "../assets/img/hero2.png";
import Image from "next/image";
import { Button } from "@mui/material";

export default function Hero() {
  const [search, setSearch] = useState("");

  // ✅ onSubmit funksiyasi
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/product?text=${encodeURIComponent(search)}`;
  };

  return (
    <form
      onSubmit={handleSubmit} // ✅ form event
      className="w-full relative h-[80vh] flex items-center justify-center"
    >
      <Image
        src={hero}
        fill
        className="object-cover w-full"
        alt="AUTOMARKET"
      />
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
      <div className="relative max-w-2xl text-center">
        <div className="border border-white rounded flex h-12 items-center overflow-hidden mb-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Qidirish..."
            type="text"
            className="h-12 outline-none bg-white w-full px-4"
          />
          <Button
            variant="contained"
            type="submit" // ✅ submit tugma
            className="h-[100%]"
          >
            Qidirish
          </Button>
        </div>
        <h1 className="text-white text-[50px] leading-18">
          Eng yaxshi mashinalarni toping va sotib oling
        </h1>
        <p className="text-white text-[16px] pt-6 leading-14">
          Orzuingizdagi avtomobilni bir necha oddiy qadamda toping.
        </p>
      </div>
    </form>
  );
}