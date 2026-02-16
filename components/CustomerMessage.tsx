import React from "react";
import search from "../assets/svg/search.svg";
import chat from "../assets/svg/chat.svg";
import book from "../assets/svg/book.svg";
import user from "../assets/img/user.png";
import Image from "next/image";
import star from "../assets/svg/star.svg";
import staroutline from "../assets/svg/star-outline.svg";
export default function CustomerMessage() {
  return (
    <div className=" px-5 w-full py-24 ">
      <div className=" max-w-5xl mx-auto px-5">
        <h4 className="text-[#161A1D] text-center font-semibold text-4xl">
          Mijozlar fikrlari
        </h4>
        <div className="grid grid-cols-3 gap-2 mt-16">
          <div className="shadow py-8 px-12 text-center rounded-2xl bg-white">
            <div className="flex gap-4 items-center mb-4">
              <div className="flex justify-center">
                <Image
                  src={user}
                  width={64}
                  height={64}
                  alt="dwdw"
                  className="rounded-full"
                />
              </div>
              <div className="text-left">
                <h5 className="text-[18px] font-bold">Davronbek Aliyev</h5>
                <p className="text-[#31383F] text-sm">Yangi avtomobil egasi</p>
              </div>
            </div>
            <p className="text-[#31383F] text-[13px] leading-5 pt-3.5 font-[300] flex gap-1">
              <Image src={star} width={16} height={16} alt="avto market" />
              <Image src={star} width={16} height={16} alt="avto market" />
              <Image src={star} width={16} height={16} alt="avto market" />
              <Image src={star} width={16} height={16} alt="avto market" />
              <Image
                src={staroutline}
                width={16}
                height={16}
                alt="avto market"
              />
            </p>
            <p className=" text-[#31383F] text-left text-md leading-6 font-[300]">
              Avtomobillar assortimenti ajoyib. Menga BMW 3 Series juda ma'qul
              keldi. Saytning tezkorligi va samaradorligi uchun rahmat!
            </p>
          </div>
          <div className="shadow py-8 px-12 text-center rounded-2xl bg-white">
            <div className="flex gap-4 items-center mb-4">
              <div className="flex justify-center">
                <Image
                  src={user}
                  width={64}
                  height={64}
                  alt="dwdw"
                  className="rounded-full"
                />
              </div>
              <div className="text-left">
                <h5 className="text-[18px] font-bold">Davronbek Aliyev</h5>
                <p className="text-[#31383F] text-sm">Yangi avtomobil egasi</p>
              </div>
            </div>
            <p className="text-[#31383F] text-[13px] leading-5 pt-3.5 font-[300] flex gap-1">
              <Image src={star} width={16} height={16} alt="avto market" />
              <Image src={star} width={16} height={16} alt="avto market" />
              <Image src={star} width={16} height={16} alt="avto market" />
              <Image src={star} width={16} height={16} alt="avto market" />
              <Image
                src={staroutline}
                width={16}
                height={16}
                alt="avto market"
              />
            </p>
            <p className=" text-[#31383F] text-left text-md leading-6 font-[300]">
              Avtomobillar assortimenti ajoyib. Menga BMW 3 Series juda ma'qul
              keldi. Saytning tezkorligi va samaradorligi uchun rahmat!
            </p>
          </div>
          <div className="shadow py-8 px-12 text-center rounded-2xl bg-white">
            <div className="flex gap-4 items-center mb-4">
              <div className="flex justify-center">
                <Image
                  src={user}
                  width={64}
                  height={64}
                  alt="dwdw"
                  className="rounded-full"
                />
              </div>
              <div className="text-left">
                <h5 className="text-[18px] font-bold">Davronbek Aliyev</h5>
                <p className="text-[#31383F] text-sm">Yangi avtomobil egasi</p>
              </div>
            </div>
            <p className="text-[#31383F] text-[13px] leading-5 pt-3.5 font-[300] flex gap-1">
              <Image src={star} width={16} height={16} alt="avto market" />
              <Image src={star} width={16} height={16} alt="avto market" />
              <Image src={star} width={16} height={16} alt="avto market" />
              <Image src={star} width={16} height={16} alt="avto market" />
              <Image
                src={staroutline}
                width={16}
                height={16}
                alt="avto market"
              />
            </p>
            <p className=" text-[#31383F] text-left text-md leading-6 font-[300]">
              Avtomobillar assortimenti ajoyib. Menga BMW 3 Series juda ma'qul
              keldi. Saytning tezkorligi va samaradorligi uchun rahmat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
