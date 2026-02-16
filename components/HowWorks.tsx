import React from "react";
import search from "../assets/svg/search.svg";
import chat from "../assets/svg/chat.svg";
import book from "../assets/svg/book.svg";
import Image from "next/image";
export default function HowWorks() {
  return (
    <div className=" px-5 w-full py-24 bg-[#D8F1FD] ">
     <div className=" max-w-5xl mx-auto px-5">
         <h4 className="text-[#161A1D] text-center font-semibold text-4xl">
        Qanday ishlaydi?
      </h4>
      <div className="grid grid-cols-3 gap-5 mt-16">
        <div className="shadow py-8 px-12 text-center rounded-2xl bg-white">
          <div className="flex justify-center">
            <Image src={search} width={64} height={54} alt="dwdw" />
          </div>
          <h5 className="text-[#] text-2xl font-bold pt-6 pb-4">
            Qidirish
          </h5>
          <p className=" text-[#31383F] text-md leading-6 font-[300]">
            Keng tanlovdan orzuingizdagi avtomobilni markasi, modeli, yili va
            narxi bo'yicha toping.
          </p>
        </div>
         <div className="shadow py-8 px-12 text-center rounded-2xl bg-white">
          <div className="flex justify-center">
            <Image src={chat} width={64} height={54} alt="dwdd" />
          </div>
          <h5 className="text-[] text-2xl font-bold pt-6 pb-4">
            Qidirish
          </h5>
          <p className=" text-[#31383F] text-md leading-6 font-[300]">
            Keng tanlovdan orzuingizdagi avtomobilni markasi, modeli, yili va
            narxi bo'yicha toping.
          </p>
        </div>
         <div className="shadow py-8 px-12 text-center rounded-2xl bg-white">
          <div className="flex justify-center">
            <Image src={book} width={64} height={54} alt="dwdw" />
          </div>
          <h5 className="text-[] text-2xl font-bold pt-6 pb-4">
            Qidirish
          </h5>
          <p className=" text-[#31383F] text-md leading-6 font-[300]">
            Keng tanlovdan orzuingizdagi avtomobilni markasi, modeli, yili va
            narxi bo'yicha toping.
          </p>
        </div>
      </div>
     </div>
    </div>
  );
}
