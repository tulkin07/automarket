import Image from "next/image";
import React from "react";
import card from "../assets/img/card.png";
import star from "../assets/svg/star.svg";
import staroutline from "../assets/svg/star-outline.svg";
import fuel from "../assets/svg/fuel.svg";
import gauge from "../assets/svg/gauge.svg";
import calendar from "../assets/svg/calendar.svg";
export default function FilteredCard() {
  return (
    <div className="w-full shadow rounded-2xl pb-6">
      <div className="overflow-hidden h-[200px] rounded-t-2xl">
        <Image
          src={card}
          alt="card"
          className="w-full h-full hover:scale-[1.2] transition-all"
        />
      </div>
      <div className="pt-6 px-6">
        <h1 className="text-[#161A1D] text-md font-semibold">
         Hyundai Sonata
        </h1>
        <div className="pt-3.5 flex justify-between items-center">
          <span className=" text-[#3DB8F5] font-bold text-md">45,000 $</span>
          <span className="text-[#575E6B] text-sm font-light">2020-yil</span>
        </div>
        <p className="text-[#31383F] text-[13px] leading-4 pt-1 font-[300]">
          Yuqori texnologiyalar va hashamatli ichki makon. Sportcha haydash
          hissiyotini beradi.
        </p>
      </div>
    </div>
  );
}
