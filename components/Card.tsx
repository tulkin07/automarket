"use client";
import Image from "next/image";
import React from "react";
import card from "../assets/img/card.png";
import star from "../assets/svg/star.svg";
import staroutline from "../assets/svg/star-outline.svg";
import fuel from "../assets/svg/fuel.svg";
import gauge from "../assets/svg/gauge.svg";
import calendar from "../assets/svg/calendar.svg";
import Link from "next/link";
import { MainProductsType } from "./MainProducts";
export default function Card({ data }:{data:MainProductsType}) {
  return (
    <div className="w-full shadow rounded-2xl pb-6 ">
      <div className="overflow-hidden h-[200px] rounded-t-2xl">
        <Link href={`product/${data.id}`}>
          <Image
            src={card}
            alt="card"
            className="w-full h-full hover:scale-[1.2] transition-all"
          />
        </Link>
      </div>
      <div className="pt-6 px-6">
        <h1 className="text-[#161A1D] text-xl font-semibold">{data.title}</h1>
        <p className="text-[#31383F] text-[13px] leading-5 pt-1 font-[300]">
          {data.description}
        </p>
        <p className="text-[#31383F] text-[13px] leading-5 pt-3.5 font-[300] flex gap-1">
          <Image src={star} width={16} height={16} alt="avto market" />
          <Image src={star} width={16} height={16} alt="avto market" />
          <Image src={star} width={16} height={16} alt="avto market" />
          <Image src={staroutline} width={16} height={16} alt="avto market" />
          <span>{data.rating}</span>
        </p>

        <div className="pt-3.5 text-[#3DB8F5] font-bold text-3xl">
          {data.price} {data.currency}
        </div>
        <div className="text-[#31383F] text-[13px] leading-5 pt-3.5 font-[300] flex items-center gap-4">
          <div className="flex items-center gap-0.5">
            <Image src={gauge} width={16} height={16} alt="avto market" />
            <span>{data.mileage} km</span>
          </div>
          <div className="flex items-center gap-0.5">
            <Image src={calendar} width={16} height={16} alt="avto market" />
            <span>{data.year}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <Image src={fuel} width={16} height={16} alt="avto market" />
            <span>{data.fuel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
