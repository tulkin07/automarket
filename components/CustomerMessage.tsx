import React from "react";
import user1 from "../assets/img/user1.png";
import user2 from "../assets/img/user2.png";
import user3 from "../assets/img/user3.png";
import Image from "next/image";
import RatingStars from "./RatingStars";

export default function CustomerMessage() {
  return (
    <div className="w-full py-24 ">
      <div className=" max-w-[1440px] mx-auto">
        <h4 className="text-[#161A1D] text-center font-semibold text-4xl">
          Mijozlar fikrlari
        </h4>
        <div className="grid grid-cols-3 gap-2 mt-16">
          <div className="shadow px-12 py-10 rounded-2xl bg-white">
            <div className="flex gap-4 items-center mb-4">
              <div className="flex justify-center">
                <Image
                  src={user1}
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
              <RatingStars rating={4} />
            </p>
            <p className=" text-[#31383F] text-[16px] leading-7 mt-4 font-normal">
              Avtomobillar assortimenti ajoyib. Menga BMW 3 Series juda maqul
              keldi. Saytning tezkorligi va samaradorligi uchun rahmat!
            </p>
          </div>
          
          <div className="shadow px-12 py-10 rounded-2xl bg-white">
            <div className="flex gap-4 items-center mb-4">
              <div className="flex justify-center">
                <Image
                  src={user2}
                  width={64}
                  height={64}
                  alt="dwdw"
                  className="rounded-full"
                />
              </div>
              <div className="text-left">
                <h5 className="text-[18px] font-bold">Gulnora Karimova</h5>
                <p className="text-[#31383F] text-sm">Baxtli mijoz</p>
              </div>
            </div>
            <p className="text-[#31383F] text-[13px] leading-5 pt-3.5 font-[300] flex gap-1">
              <RatingStars rating={4} />
            </p>
            <p className=" text-[#31383F] text-[16px] leading-7 mt-4 font-normal">
              Qidiruv funksiyasi juda aniq ishladi. Narxlar ham juda mos keladi. VitaSoft Cars ni hammaga tavsiya qilaman!
            </p>
          </div>
          
          <div className="shadow px-12 py-10 rounded-2xl bg-white">
            <div className="flex gap-4 items-center mb-4">
              <div className="flex justify-center">
                <Image
                  src={user3}
                  width={64}
                  height={64}
                  alt="dwdw"
                  className="rounded-full"
                />
              </div>
              <div className="text-left">
                <h5 className="text-[18px] font-bold">Alisher Sobirov</h5>
                <p className="text-[#31383F] text-sm">Qoniqarli xaridor</p>
              </div>
            </div>
            <p className="text-[#31383F] text-[13px] leading-5 pt-3.5 font-[300] flex gap-1">
              <RatingStars rating={5} />
            </p>
            <p className=" text-[#31383F] text-[16px] leading-7 mt-4 font-normal">
              AutoMarket Cars orqali mashina topish juda oson boldi. Katta tanlov va qulay interfeys meni hayratda qoldirdi. Xizmat uchun rahmat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
