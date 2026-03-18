"use client";
import React, { useEffect, useRef } from "react";
import Card from "./Card";
import useProductList from "@/app/hooks/useProdcutList";
import CarCardSkeleton from "./Spinner";
import { Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

export default function MainProducts() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const size = Number(searchParams.get("size")) || 12;

  const { data, isLoading } = useProductList();

  const savedScroll = useRef<number | null>(null);

  const pagination = () => {
    savedScroll.current = window.scrollY;

    const newSize = size + 12;
    params.set("size", newSize.toString());

    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Data yuklangandan keyin scroll qaytarish
  useEffect(() => {
    if (!isLoading && savedScroll.current !== null) {
      window.scrollTo({
        top: savedScroll.current + 400, // pastga tushadi
        behavior: "smooth",
      });
      savedScroll.current = null;
    }
  }, [isLoading]);

  const totalElements = data?.totalElements || 0;
  const currentLength = data?.content?.length || 0;

  return (
    <div className="w-full py-10">
      <h4 className="text-[#161A1D] text-center font-semibold text-4xl">
        Tavsiya etilgan avtomobillar
      </h4>

      <div className="grid grid-cols-3 gap-5 mt-16">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <CarCardSkeleton key={index} width={465} />
            ))
          : data?.content?.map((product: any) => (
              <Card key={product.id} data={product} />
            ))}
      </div>

      <div className="text-center mt-5">
        {currentLength === 0 && !isLoading && "Ma'lumot yo'q"}
      </div>

      {currentLength < totalElements && (
        <div className="text-center mt-10">
          <Button
            type="button"
            onClick={pagination}
            variant="contained"
            color="primary"
            className="py-5 px-20"
          >
            {isLoading ? "Yuklanmoqda..." : "Ko'proq ko'rsatish"}
          </Button>
        </div>
      )}
    </div>
  );
}