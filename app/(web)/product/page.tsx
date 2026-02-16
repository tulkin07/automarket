
import Card from "@/components/Card";
import FilteredCard from "@/components/FilteredCard";
import MainProducts from "@/components/MainProducts";
import SearchSidebar from "@/components/SearchSidebar";
import { Pagination, Stack } from "@mui/material";
import React from "react";
import { products } from "@/constants/data";
export default function Search() {
  console.log(products)
  return (
    <div className="py-10 max-w-5xl mx-auto px-5">
      <h3 className="text-[#16181D] text-3xl font-bold">
        Avtomobillar ro'yxati
      </h3>
      <div className="flex mt-10 gap-5">
        <div className="min-w-[250px] max-w-[288px]  min-h-[250px] border-r border-[#E0E2E6]  ">
          <p className="text-[#16181D] text-xl font-medium">Filtrlar</p>
          <div className="mt-6">
            <SearchSidebar />
          </div>
        </div>
        <div className="w-full min-h-[856px] ">
          <div className="flex justify-end flex items-center gap-4">
            <span className="text-[#575E6B] text-sm font-normal">
              Saralash:
            </span>
            <button className="text-white text-sm font-medium leading-5 border border-[#55A6F6] py-2 px-3 rounded-xl cursor-pointer bg-[#55A6F6] hover:opacity-[0.8] transition-all">
              Eng yangi
            </button>
            <button className="text-[#575E6B] text-sm font-medium leading-5 border border-[#E0E2E6] py-2 px-3 rounded-xl cursor-pointer hover:bg-[#E0E2E6] transition-all">
              Eng arzon
            </button>
            <button className="text-[#575E6B] text-sm font-medium leading-5 border border-[#E0E2E6] py-2 px-3 rounded-xl cursor-pointer hover:bg-[#E0E2E6] transition-all">
              Eng qimmat
            </button>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-8">
            {products.map((product) => (
              <Card key={product.id} data={product} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Stack spacing={2}>
              <Pagination count={10} color="primary" />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
