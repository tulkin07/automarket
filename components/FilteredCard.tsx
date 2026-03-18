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
export default function FilteredCard({ data }:{data:MainProductsType}) {
    return (
        <div className="w-full shadow rounded-2xl pb-6 relative">
            <div className="overflow-hidden h-[200px] rounded-t-2xl">
                {/*<Image
          src={card}
          alt="card"
          className="w-full h-full hover:scale-[1.2] transition-all"
        />*/}
                <Link href={`product/${data.id}`}>
                    <Image
                                fill
                                src={`https://procuratorial-phrenetically-yessenia.ngrok-free.dev/${data?.mainImageUrl}` || card}
                                alt="card"
                                className="w-full h-full scale-101 hover:scale-[1.1] transition-all w-full h-full"
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
            </div>
        </div>
    );
}