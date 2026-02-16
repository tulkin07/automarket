"use client"
import React, { useState } from "react";
import hero from "../assets/img/hero2.png";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  const [search, setSearch] = useState("");
  return (
    <div className="w-full relative h-[calc(100vh)] flex items-center justify-center">
      <Image
        src={hero}
        fill
        className="object-cover w-full "
        alt="AUTOMARKET"
      />
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
      <div className=" relative max-w-2xl text-center ">
        <div className="border border-white rounded flex h-12 items-center overflow-hidden mb-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Qidirish..."
            type="text"
            className="h-12 outline-none bg-white w-full px-4"
          />
          <Link
            href={`/product?text=${search}`}
            className="h-12 px-4 flex items-center text-sm rounded-r font-medium bg-[#3DB8F5]   text-white cursor-pointer hover:opacity-[0.8]"
          >
            Qidirish
          </Link>
        </div>
        <h1 className="text-white text-[60px] leading-14">
          Eng yaxshi mashinalarni toping va sotib oling
        </h1>
        <p className="text-white text-[24px] pt-6 leading-14">
          Orzuingizdagi avtomobilni bir necha oddiy qadamda toping.
        </p>
      </div>
    </div>
  );
}
