import Image from "next/image";
import React from "react";
import card from "../assets/img/card.png";
import star from "../assets/svg/star.svg";
import staroutline from "../assets/svg/star-outline.svg";
import fuel from "../assets/svg/fuel.svg";
import gauge from "../assets/svg/gauge.svg";
import calendar from "../assets/svg/calendar.svg";
import { MainProductsType } from "./MainProducts";
import Link from "next/link";
export default function UserProductCard({ data }:{data:MainProductsType}) {
  return (
    <div className="w-full shadow rounded-2xl pb-6 flex gap-3 mb-5">
      <div className="overflow-hidden h-[150px] rounded-t-2xl">
        
        <Link href={`product/${data.id}`}>
          <Image
            src={card}
            alt="card"
            className="w-full h-full hover:scale-[1.2] transition-all"
          />
        </Link>
      </div>
      <div className="pt-6 px-6">
        <h1 className="text-[#161A1D] text-xl font-semibold">{data.brandName}</h1>
        <h1 className="text-[#393a3a] text-lg font-semibold">{data.modelName}</h1>
        <div className="pt-3.5 flex justify-between items-center">
          <span className=" text-[#3DB8F5] font-bold text-md">$ { data.price }</span>
         
          <span className="text-[#575E6B] text-sm font-light">{data.year} yil</span>
        </div>
        <p className="text-[#31383F] text-[13px] leading-4 pt-1 font-[300]">
          {data.description}
        </p>
         <span className=" text-[#3DB8F5] font-bold text-md"> { data.transmission }</span> <br />
          <span className=" text-[#3DB8F5] font-bold text-md"> { data.fuelType }</span>
          <span className=" text-[#3DB8F5] font-bold text-md"> { data.color }</span>
      </div>
    </div>
  );
}
