"use client";

import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import useRegister from "./hooks/useRegister";

export default function RegisterPage() {
  const {isPending,mutate} = useRegister()
  const [form, setForm] = useState({
    phone: "",
    fullName: "",
    password: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(form)
     mutate(form)
  };

  return (
    <div className="bg-white py-8 px-6 rounded-xl shadow min-w-[300px]">
      <p className="text-[#55A6F6] text-[23px] font-bold text-center">
        AutoMarket
      </p>

      <div className="grid gap-3 mt-6">
        {/* Telefon */}
        <FormControl>
          <FormLabel>Telefon</FormLabel>
          <TextField
            size="small"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </FormControl>

        {/* FIO */}
        <FormControl>
          <FormLabel>F.I.O</FormLabel>
          <TextField
            size="small"
            value={form.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
          />
        </FormControl>

        {/* Parol */}
        <FormControl>
          <FormLabel>Parol</FormLabel>
          <TextField
            type="password"
            size="small"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </FormControl>
      </div>

      <div className="mt-3 grid">
        <Button variant="contained" fullWidth onClick={handleSubmit}>
          {isPending?"Loading...":"Kirish"}
        </Button>

        <Link
          href="/login"
          className="text-center text-[#55A6F6] mt-2 hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
}