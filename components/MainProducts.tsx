import React from "react";
import Card from "./Card";
import { products } from "@/constants/data";

export interface MainProductsType {
  id:string,
  title:string,
  description:string,
  rating:string,
  price:number,
  currency:string,
  image:string,
  mileage:string,
  year:string,
  fuel:string,
  transmission:string,
  color:string
}

export default async function MainProducts() {
  const data:MainProductsType[] = await fetch(
    "https://6950e18370e1605a1088bb80.mockapi.io/groups",{
      // cache:"no-store"
      next:{revalidate:60}
    }
    
  ).then(async (res) => await res.json());

  return (
    <div className="  px-5 w-full  py-10">
      <h4 className="text-[#161A1D] text-center font-semibold text-4xl">
        Tavsiya etilgan avtomobillar
      </h4>
      <div className="grid grid-cols-3 gap-5 mt-16">
        {data.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}
