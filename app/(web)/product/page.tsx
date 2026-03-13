"use client";

import useSearchProdcutList from "../../hooks/useSearchProdcutList";
import FilteredCard from "@/components/FilteredCard";
import { MainProductsType } from "@/components/MainProducts";
import SearchSidebar from "@/components/SearchSidebar";
import { Pagination, Stack } from "@mui/material";
import React from "react";
import CarCardSkeleton from "@/components/Spinner";
import { useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const { data, isLoading } = useSearchProdcutList();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const handleSort = (direction: "asc" | "desc") => {

    params.set("direction", direction);
    router.push(`?${params.toString()}`);
  };
  return (
    <div className="py-10 max-w-[1440px] px-5 mx-auto ">
      <h3 className="text-[#16181D] text-3xl font-bold">
        Avtomobillar royxati
      </h3>
      <div className="flex mt-10 gap-5">
        <div className="min-w-[300px] max-w-[300px]  min-h-[250px] border-r border-[#E0E2E6]  ">
          <p className="text-[#16181D] text-xl font-medium">Filtrlar</p>
          <div className="mt-6">
            <SearchSidebar />
          </div>
        </div>
        <div className="w-full min-h-[856px] ">
          <div className="flex justify-end items-center gap-4">
            <span className="text-[#575E6B] text-sm font-normal">
              Saralash:
            </span>

            <button
              onClick={() => handleSort("asc")}
              className={`text-[#575E6B] text-sm font-medium border border-[#E0E2E6] py-2 px-3 rounded-xl cursor-pointer transition-all ${params.get("direction")=="asc"&&"bg-blue-400 text-white"}`}
            >
              Eng arzon
            </button>

            <button
              onClick={() => handleSort("desc")}
              className={`text-[#575E6B] text-sm font-medium border border-[#E0E2E6] py-2 px-3 rounded-xl cursor-pointer transition-all ${params.get("direction")=="desc"&&"bg-blue-400 text-white"}`}            >
              Eng qimmat
            </button>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-8">

            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                <CarCardSkeleton key={index} width={300} />
              ))
              : data?.content.map((product: MainProductsType) => (
                <FilteredCard key={product.id} data={product} />
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
