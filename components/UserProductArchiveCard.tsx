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
import { Button } from "@mui/material";
export default function UserProductArchiveCard({ data }: { data: MainProductsType }) {
  return (
    <div className="w-full shadow rounded-2xl p-2 border border-gray-300 flex gap-3 mb-5 h-40">
      <div className="overflow-hidden h-full rounded-2xl">

        <Link href={`product/${data.id}`}>
          <Image
            src={card}
            alt="card"
            className="w-full h-full hover:scale-[1.2] transition-all"
          />
        </Link>
      </div>
      <div className="flex justify-between w-[85%] py-2 px-3">
        <div className="flex flex-col gap-1">
          <div className="flex ">
            <h1 className="text-[#161A1D] text-xl font-semibold">{data.brandName} - {data.modelName}</h1>
            <h1 className="text-[#393a3a] text-lg font-semibold"></h1>
          </div>
          <div className="flex items-center gap-3">
            <span className=" text-[#3DB8F5] font-bold text-2xl">$ {data.price}</span>
            <span className="text-[#575E6B] text-sm font-light">{data.year} yil</span>
          </div>
          <p className="text-[#31383F] text-[13px] leading-4 pt-1 font-[300] ">
            {data.description}
          </p>
          <span>
            Transmissia:
            <span className=" text-[#3DB8F5] font-bold text-md"> {data.transmission}</span>
          </span>
        </div>
        <div className="flex flex-col gap-2">

          <Button variant="contained" sx={{minWidth: "160px"}}>Faollashtirish</Button>
          <Link href={`sell/${data.id}`}>
              <Button variant="contained" sx={{minWidth: "160px"}}>Tahrirlash</Button>
          </Link>          
        </div>
      </div>
    </div>
  );
}
