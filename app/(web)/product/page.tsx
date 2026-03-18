"use client";

import useSearchProdcutList from "../../hooks/useSearchProdcutList";
import FilteredCard from "@/components/FilteredCard";
import { MainProductsType } from "@/components/MainProducts";
import SearchSidebar from "@/components/SearchSidebar";
import { Pagination } from "@mui/material";
import React from "react";
import CarCardSkeleton from "@/components/Spinner";
import { useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const { data, isLoading } = useSearchProdcutList();
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());

  const page = Number(searchParams.get("page")) || 0;
  const size = Number(searchParams.get("size")) || 12;

  const handleSort = (direction: "asc" | "desc") => {
    params.set("direction", direction);
    params.set("page", "0"); // sort o'zgarsa boshidan boshlaydi
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handlePageChange = (_: any, value: number) => {
    params.set("page", (value - 1).toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const totalElements = data?.totalElements || 0;
  const totalPages = Math.ceil(totalElements / size);
  const currentLength = data?.content?.length || 0;

  return (
    <div className="py-10 max-w-[1440px] px-5 mx-auto">
      <h3 className="text-[#16181D] text-3xl font-bold">
        Avtomobillar royxati
      </h3>

      <div className="flex mt-10 gap-5">
        <div className="min-w-[300px] max-w-[300px] min-h-[250px] border-r border-[#E0E2E6]">
          <p className="text-[#16181D] text-xl font-medium">Filtrlar</p>
          <div className="mt-6 sticky max-h-[80vh] overflow-auto top-24">
            <SearchSidebar />
          </div>
        </div>

        <div className="w-full min-h-[856px]">
          {/* Sort */}
          <div className="flex justify-end items-center gap-4">
            <span className="text-[#575E6B] text-sm font-normal">
              Saralash:
            </span>

            <button
              onClick={() => handleSort("asc")}
              className={`text-sm font-medium border py-2 px-3 rounded-xl transition-all ${
                params.get("direction") === "asc"
                  ? "bg-blue-400 text-white"
                  : "text-[#575E6B] border-[#E0E2E6]"
              }`}
            >
              Eng arzon
            </button>

            <button
              onClick={() => handleSort("desc")}
              className={`text-sm font-medium border py-2 px-3 rounded-xl transition-all ${
                params.get("direction") === "desc"
                  ? "bg-blue-400 text-white"
                  : "text-[#575E6B] border-[#E0E2E6]"
              }`}
            >
              Eng qimmat
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-5 mt-8">
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <CarCardSkeleton key={index} width={300} />
                ))
              : data?.content?.map((product: MainProductsType) => (
                  <FilteredCard key={product.id} data={product} />
                ))}
          </div>

          <div className="text-center w-full mt-5">
            {currentLength === 0 && !isLoading && "Ma'lumot yo'q"}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10">
              <Pagination
                count={totalPages}
                page={page + 1}
                onChange={handlePageChange}
                color="primary"
                size="large"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}