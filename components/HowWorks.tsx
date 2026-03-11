import React from "react";
import search from "../assets/svg/search.svg";
import chat from "../assets/svg/chat.svg";
import book from "../assets/svg/book.svg";
import Image from "next/image";
export default function HowWorks() {
  return (
    <div className="w-full py-24 bg-[#D8F1FD] ">
      <div className=" max-w-[1440px] mx-auto">
        <h4 className="text-[#161A1D] text-center font-semibold text-4xl">
          Qanday ishlaydi?
        </h4>
        <div className="grid grid-cols-3 gap-5 mt-16">
          <div className="shadow w-full h-100 flex px-15 items-center justify-center flex-col text-center rounded-2xl bg-white">
            <div className="flex justify-center">
              <Image src={search} width={64} height={54} alt="dwdw" />
            </div>
            <h5 className="text-[#] text-3xl font-bold pt-6 pb-4">Qidirish</h5>
            <p className=" text-[#31383F] text-[16px] leading-6 font-normal">
              Keng tanlovdan orzuingizdagi avtomobilni markasi, modeli, yili va
              narxi boyicha toping.
            </p>
          </div>

          <div className="shadow w-full h-100 flex px-15 items-center justify-center flex-col text-center rounded-2xl bg-white">
            <div className="flex justify-center">
              <Image src={chat} width={64} height={54} alt="dwdd" />
            </div>
            <h5 className="text-[] text-3xl font-bold pt-6 pb-4">Aloqa</h5>
            <p className=" text-[#31383F] text-[16px] leading-6 font-normal">
              Sotuvchilar bilan bevosita boglaning va barcha savollaringizga
              javob oling.
            </p>
          </div>

          <div className="shadow w-full h-100 flex px-15 items-center justify-center flex-col text-center rounded-2xl bg-white">
            <div className="flex justify-center">
              <Image src={book} width={64} height={54} alt="dwdw" />
            </div>
            <h5 className="text-[] text-3xl font-bold pt-6 pb-4">
              Sotib olish
            </h5>
            <p className=" text-[#31383F] text-[16px] leading-6 font-normal">
              Ozingizga maqul avtomobilni xavfsiz va ishonchli tarzda sotib
              oling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
