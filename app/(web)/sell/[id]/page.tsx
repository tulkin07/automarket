"use client";

import useBarandList from "@/app/hooks/useBarandList";
import useBarandOfModelList from "@/app/hooks/useBarandOfModelList";
import useCreateCar from "@/app/hooks/useCreateCar";
import UploadButton from "@/components/Upload";
import { bodyTypeOptions, filtersData } from "@/constants/data";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";



export default function Page() {
  const [images, setAllImages] = useState<File[]>([]);
  const [form, setForm] = useState({
    brandId: "",
    modelId: "",
    year: "",
    price: "",
    mileage: "",
    color: "",
    transmission: "",
    fuelType: "",
    bodyType: "",
    description: "",
  });

  const { brands, isLoading } = useBarandList()
  const { models, IsLoadingModles } = useBarandOfModelList(form.brandId)
  const {createCar,isPending} = useCreateCar()

  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    const payload = {
      modelId: Number(form.modelId),
      year: Number(form.year),
      price: Number(form.price),
      mileage: Number(form.mileage),
      color: form.color,
      transmission: form.transmission,
      fuelType: form.fuelType,
      bodyType: form.bodyType,
      description: form.description,
    };
 
    formData.append("data", JSON.stringify(payload));
    images.forEach((image) => {
      formData.append("images", image);
    });

    createCar(formData,{
      onSuccess:()=>{
         toast("Success",{type:"success"})
          setForm({
            brandId: "",
            modelId: "",
            year: "",
            price: "",
            mileage: "",
            color: "",
            transmission: "",
            fuelType: "",
            bodyType: "",
            description: "",
          })
          setAllImages([])
      },
      onError:(err)=>{
        toast(err?.message,{type:"error"})
      }
    })
  };

  return (
    <div className="py-10 max-w-[1000px] px-5 mx-auto">
      <h2 className="text-center text-4xl font-bold">
        Mashinani sotish uchun royxatdan otkazish
      </h2>

      <p className="text-[#575E6B] text-[18px] text-center my-8">
        Avtomobilingizni soting. Malumotlarni toldiring va tezda elon qiling.
      </p>

      <div>
        <h3 className="font-medium text-2xl">Avtomobil malumotlari</h3>

        <div className="grid grid-cols-2 gap-8 mt-5">

          {/* Brand */}
          <FormControl fullWidth>
            <InputLabel>Brand</InputLabel>
            <Select
              value={form.brandId}
              label="Brand"
              onChange={(e) => handleChange("brandId", e.target.value)}
            >
              {
                isLoading ? <MenuItem >Loading...</MenuItem>
                  :
                  brands?.map((brand) => (
                    <MenuItem key={brand.id} value={brand.id}>
                      {brand.name}
                    </MenuItem>
                  ))
              }
            </Select>
          </FormControl>

          {/* Model */}
          <FormControl fullWidth>
            <InputLabel>Model</InputLabel>
            <Select
              value={form.modelId}
              label="Model"
              onChange={(e) => handleChange("modelId", e.target.value)}
            >

              {
                IsLoadingModles ? <MenuItem >Loading...</MenuItem> :
                  models?.map((model) => (
                    <MenuItem key={model.id} value={model.id}>
                      {model.name}
                    </MenuItem>
                  ))}
            </Select>
          </FormControl>

          {/* Year */}
          <TextField
            label="Year"
            type="number"
            fullWidth
            value={form.year}
            onChange={(e) => handleChange("year", e.target.value)}
          />

          {/* Price */}
          <TextField
            label="Price"
            type="number"
            fullWidth
            value={form.price}
            onChange={(e) => handleChange("price", e.target.value)}
          />

          {/* Mileage */}
          <TextField
            label="Mileage"
            type="number"
            fullWidth
            value={form.mileage}
            onChange={(e) => handleChange("mileage", e.target.value)}
          />

          {/* Color */}
          <FormControl fullWidth>
            <InputLabel>Color</InputLabel>
            <Select
              value={form.color}
              label="Color"
              onChange={(e) => handleChange("color", e.target.value)}
            >
              {
                filtersData?.map(item => {
                  if (item.key == "color") {
                    return item.options?.map(el => <MenuItem key={el?.value} value={el?.value}>{el?.label}</MenuItem>)
                  }
                })
              }
            </Select>
          </FormControl>

          {/* Transmission */}
          <FormControl fullWidth>
            <InputLabel>Transmission</InputLabel>
            <Select
              value={form.transmission}
              label="Transmission"
              onChange={(e) => handleChange("transmission", e.target.value)}
            >
              {
                filtersData?.map(item => {
                  if (item.key == "transmission") {
                    return item.options?.map(el => <MenuItem key={el?.value} value={el?.value}>{el?.label}</MenuItem>)
                  }
                })
              }
            </Select>
          </FormControl>

          {/* Fuel type */}
          <FormControl fullWidth>
            <InputLabel>Fuel type</InputLabel>
            <Select
              value={form.fuelType}
              label="Fuel type"
              onChange={(e) => handleChange("fuelType", e.target.value)}
            >
              {
                filtersData?.map(item => {
                  if (item.key == "fuel") {
                    return item.options?.map(el => <MenuItem key={el?.value} value={el?.value}>{el?.label}</MenuItem>)
                  }
                })
              }
            </Select>
          </FormControl>

          {/* Body type */}
          
           <FormControl fullWidth>
            <InputLabel>Body type</InputLabel>
            <Select
              value={form.bodyType}
              label="Body type"
              onChange={(e) => handleChange("bodyType", e.target.value)}
            >
              {
                bodyTypeOptions?.map(item => {
                  return <MenuItem key={item?.value} value={item?.value}>{item?.label}</MenuItem>
                })
              }
            </Select>
          </FormControl>

        </div>

        {/* Description */}
        <div className="my-8">
          <TextField
            multiline
            fullWidth
            label="Qo'shimcha tavsif"
            rows={4}
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>

        {/* Upload */}
        <div>
          <h3 className="pb-8 text-[#16181D] text-2xl font-medium">
            Suratlarni yuklash
          </h3>
          <UploadButton images={images} setAllImages={setAllImages} />
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#16181D] font-medium text-2xl my-10">
            Boglanish malumotlari
          </h3>

          <div className="flex gap-10">
            <TextField fullWidth label="Ism" placeholder="Ismingizni kiriting" />
            <TextField
              fullWidth
              label="Telefon"
              placeholder="+998 90 123 45 67"
            />
          </div>

          <div className="flex justify-center mt-6">
            <Button
              variant="contained"
              onClick={handleSubmit}
              className="w-full rounded-md!"
            >
              {
                isPending?"Loading...":"Elonni tasdiqlash"
              }
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}