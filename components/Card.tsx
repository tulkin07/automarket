"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import RatingStars from "./RatingStars";
import { MainProductsType } from "./MainProducts";
import useFavoriteCar from "@/app/hooks/useFavoriteProduct";

// Images
import Heart from "../assets/svg/heart.png"
import HeartFilled from "../assets/svg/heart-filled.png"
import card from "../assets/img/card.png";
import calendar from "../assets/svg/calendar.svg";
import gauge from "../assets/svg/gauge.svg";
import fuel from "../assets/svg/fuel.svg";

export default function Card({ data }: { data: MainProductsType }) {
  const {mutate, isPending} = useFavoriteCar()
  const favoriteHandle = (id : string, favorite : boolean) => {
    mutate({id, favorite})
  }

  return (
    <div className="w-full overflow-hidden shadow rounded-2xl pb-6 relative">
      <div className="overflow-hidden h-[250px]">
        <Link href={`product/${data.id}`}>
          <Image
            src={card}
            alt="card"
            className="w-full h-full scale-101 hover:scale-[1.1] transition-all"
          />
        </Link>
      </div>
      <div className="pt-6 px-6">
        <div className="flex justify-between ">
          <span>
            <h1 className="text-[#161A1D] text-2xl font-bold">{data.brandName} {data.modelName}</h1>
            <p className="text-[#31383F] text-[13px] leading-5 pt-1">{data.description}</p>
          </span>
            {isPending 
            ? <div className="absolute top-6 right-6 w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div> 
            : <div className="cursor-pointer absolute top-5 right-5" onClick={() => {favoriteHandle(data?.id, data?.favorite)}}>
              {data.favorite
                ? <Image src={HeartFilled} alt="Heart filled" width={25} height={25} />
                : <Image src={Heart} alt="Heart not filled" width={25} height={25} />
              }
            </div>
            }
        </div>
        <div className="text-[#31383F] text-[13px] leading-5 pt-3.5 font-light flex gap-1">
          <RatingStars rating={data.averageRating} />
          <span>{data.averageRating}</span>
        </div>

        <div className="pt-3.5 text-[#3DB8F5] font-bold text-3xl">
          <span className="text-gray-600 text-[14px] importand">$</span>{data.price}
        </div>
        <div className="text-[#31383F] text-[13px] leading-5 pt-3.5 font-[300] flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Image src={gauge} width={18} height={18} alt="avto market" />
            <span className="text-[14px]">{data.mileage} km</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Image src={calendar} width={18} height={18} alt="avto market" />
            <span className="text-[14px]">{data.year}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Image src={fuel} width={18} height={18} alt="avto market" />
            <span className="text-[14px]">{data.fuelType}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
