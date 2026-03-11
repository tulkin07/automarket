"use client";
import Image from "next/image";
import Car from "../../../../assets/img/car.png";

import UserIcon from "../../../../assets/svg/user-icon.svg";
import PhoneIcon from "../../../../assets/svg/phone-icon.svg";
import StarIcon from "../../../../assets/svg/star.svg";
import React from "react";
import { useParams } from "next/navigation";
import useProdcutDetails from "@/app/hooks/useProdcutDetails";
import { Skeleton } from "@mui/material";

export default function Detail() {
  const { productId } = useParams();
  const { data, isLoading } = useProdcutDetails({ id: productId });
  console.log(data);

  return (
    <div className="max-w-[1440px] mx-auto py-5 flex flex-col gap-7">
      <Image src={Car} alt="Car image" className="w-full h-120 rounded-xl" />

      <div className="flex gap-8 text-[#16181D]">
        <div className="flex w-full flex-col gap-5 border p-5 border-[#E0E2E6] rounded-2xl">
          <h3 className="text-2xl font-medium">Mashina tafsilotlari</h3>
          <ul className="grid grid-cols-2 gap-3">
            <li>
              <p className="text-[#575E6B] text-sm">Marka</p>
              <span className="font-medium">
                {isLoading ? (
                  <Skeleton width="40%" height={24} />
                ) : (
                  data?.brandName
                )}
              </span>
            </li>
            <li>
              <p className="text-[#575E6B] text-sm">Yil</p>
              <span className="font-medium">
                {isLoading ? <Skeleton width="40%" height={24} /> : data?.year}
              </span>
            </li>
            <li>
              <p className="text-[#575E6B] text-sm">Rang</p>
              <span className="font-medium">
                {isLoading ? <Skeleton width="40%" height={24} /> : data?.color}
              </span>
            </li>
            <li>
              <p className="text-[#575E6B] text-sm">Yonilgi turi</p>
              <span className="font-medium">
                {isLoading ? (
                  <Skeleton width="40%" height={24} />
                ) : (
                  data?.fuelType
                )}
              </span>
            </li>
            <li>
              <p className="text-[#575E6B] text-sm">Model</p>
              <span className="font-medium">
                {isLoading ? (
                  <Skeleton width="40%" height={24} />
                ) : (
                  data?.modelName
                )}
              </span>
            </li>
            <li>
              <p className="text-[#575E6B] text-sm">Narx</p>
              <span className="font-medium">
                
                {isLoading ? <Skeleton width="40%" height={24} /> :<>$ { data?.price}</>}
              </span>
            </li>
            <li>
              <p className="text-[#575E6B] text-sm">Transmissiya</p>
              <span className="font-medium">
                {isLoading ? (
                  <Skeleton width="40%" height={24} />
                ) : (
                  data?.transmission
                )}
              </span>
            </li>
          </ul>
        </div>
        <div className="min-w-80 border p-5 border-[#E0E2E6] rounded-2xl p-6">
          <h2 className="text-2xl font-medium">Sotuvchi malumotlari</h2>
          <div className="flex flex-col gap-3 my-4">
            <div className="flex justify-between">
              <span className="flex gap-2 text-[#575E6B]">
                <Image src={UserIcon} alt="User Icon" width={20} height={20} />{" "}
                Ism:
              </span>
              <span className="font-medium">
                {isLoading ? (
                  <Skeleton width="100px" height={24} />
                ) : (
                  data?.seller?.fullName
                )}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="flex gap-2 text-[#575E6B]">
                <Image
                  src={PhoneIcon}
                  alt="Phone Icon"
                  width={20}
                  height={20}
                />{" "}
                Telefon:
              </span>
              <span className="text-[#55A6F6] font-medium">
                {isLoading ? (
                  <Skeleton width="100px" height={24} />
                ) : (
                  data?.seller?.phone
                )}
              </span>
            </div>
            {/* <div className="flex justify-between">
              <span className="flex gap-2 text-[#575E6B]">
                <Image src={StarIcon} alt="StarIcon" width={20} height={20} />{" "}
                Reyting:
              </span>
              <span className="font-medium">4.8 / 5</span>
            </div> */}
          </div>
          <div className="flex flex-col gap-4">
            <button className="text-white rounded-xl font-medium w-full h-10 bg-[#55A6F6]">
              Savol berish
            </button>
            <button className="rounded-xl w-full font-medium h-10 border border-[#E0E2E6]">
              Elonni saqlash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
