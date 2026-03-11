"use client";
import React from "react";
import Card from "./Card";
import { products } from "@/constants/data";
import useProductList from "@/app/hooks/useProdcutList";
import CarCardSkeleton from "./Spinner";

export type MainProductsType = {
  id: number;
  brandName: string;
  modelName: string;
  year: number;
  price: number;
  mileage: number;
  color: string;
  transmission: "AVTOMAT" | "MECHANIC";
  fuelType: "PETROL" | "DIESEL" | "ELECTRIC" | "HYBRID";
  bodyType: "SEDAN" | "HATCHBACK" | "SUV" | "COUPE" | "UNIVERSAL";
  mainImageUrl: string | null;
  sellerRegion: string | null;
  status: "APPROVED" | "PENDING" | "REJECTED";
  createdAt: string | null;
  description: string;
  averageRating: number;
  favorite: boolean;
};

export default function MainProducts() {
  const { data, isLoading } = useProductList();

  return (
    <div className="w-full  py-10">
      <h4 className="text-[#161A1D] text-center font-semibold text-4xl">
        Tavsiya etilgan avtomobillar
      </h4>
      <div className="grid grid-cols-3 gap-5 mt-16">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
            <CarCardSkeleton key={index} width={465}/>
            ))
          : data?.content.map((product: MainProductsType) => (
              <Card key={product.id} data={product} />
            ))}
      </div>
      <div className="text-center ">
        {!data?.content && !isLoading && "Ma'lumot yoq"}
      </div>
    </div>
  );
}
