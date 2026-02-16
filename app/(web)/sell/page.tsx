import UploadButton from "@/components/Upload";
import {
    Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

export default function page() {
  return (
    <div className="py-10 max-w-5xl mx-auto px-5">
      <h2 className="text-center text-4xl font-bold">
        Mashinani sotish uchun royxatdan otkazish
      </h2>
      <p className="text-[#575E6B] text-[18px] text-center my-8">
        Avtomobilingizni soting. Malumotlarni toldiring va tezda elon qiling.
      </p>
      <div className="w-full">
        <h3 className="font-medium text-2xl">Avtomobil malumotlari</h3>
        <div className="grid grid-cols-2 gap-8 mt-5">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Marka</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Toyata</MenuItem>
              <MenuItem value={20}>BMW</MenuItem>
              <MenuItem value={30}>Mercedenz Benz</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Model</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>C class</MenuItem>
              <MenuItem value={20}>m5 f90</MenuItem>
              <MenuItem value={30}>E class</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Yil</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>2010</MenuItem>
              <MenuItem value={10}>2011</MenuItem>
              <MenuItem value={10}>2012</MenuItem>
              <MenuItem value={10}>2013</MenuItem>
              <MenuItem value={10}>2014</MenuItem>
              <MenuItem value={10}>2015</MenuItem>
              <MenuItem value={10}>2016</MenuItem>
              <MenuItem value={10}>2017</MenuItem>
              <MenuItem value={10}>2018</MenuItem>
              <MenuItem value={10}>2019</MenuItem>
              <MenuItem value={10}>2020</MenuItem>
              <MenuItem value={10}>2021</MenuItem>
              <MenuItem value={10}>2022</MenuItem>
              <MenuItem value={10}>2023</MenuItem>
              <MenuItem value={10}>2024</MenuItem>
              <MenuItem value={10}>2025</MenuItem>
            </Select>
          </FormControl>

          <TextField fullWidth placeholder="Price" />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{ width: "100%" }}>
              Marka
            </InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Marka</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Marka</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Marka</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="my-8">
          <h4 className="mb-2 font-medium text-sm">Qoshimcha tavsif</h4>
          <TextField
            multiline
            fullWidth
            label="Avtomobil haqida qo'shimcha ma'lumotlar, misol uchun: texnik holati, qo'shimcha funksiyalar..."
            rows={4}
            variant="outlined"
          />
        </div>

        <div>
            <h3 className="pb-8 text-[#16181D] text-2xl font-medium ">Suratlarni yuklash</h3>
            <UploadButton/>
        </div>
        <div>
            <h3 className="text-[#16181D] font-medium text-2xl leading-6 my-10 ">Boglanish malumotlari</h3>
            <div className="flex gap-10">
             <div className="flex flex-col gap-2 w-full">
                <p className="text-[#16181D] text-[14px] font-md ">Ism</p>
                 <TextField fullWidth placeholder="Ismingizni kiriting"  />
             </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="text-[#16181D] text-[14px] font-md ">Telefon raqami</p>
                   <TextField fullWidth  placeholder="+998 90 123 45 67"/>
             </div>
            </div>
            <div className="flex justify-center mt-4">
            <Button variant="contained" className="w-full rounded-md!">Elonni tasdiqlash</Button>
            </div>
        </div>
      </div>
    </div>
  );
}
