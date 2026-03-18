"use client";

import { FormControl, FormLabel, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import useLogin from "./hooks/useLogin";

export default function LoginPage() {
  const { mutate, isPending } = useLogin();
  const [user, setUser] = useState({ phone: "", password: "" });
  const login = (e) => {
    e.preventDefault()
    mutate(user);
  };
  return (
    <div className="bg-white py-8 px-6 rounded-xl shadow min-w-[300px] ">
      <form>
        <p className="text-[#55A6F6] text-[23px] leading-6 font-bold text-center">
          AutoMarket
        </p>
        <div className="grid gap-3 mt-6">
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <TextField
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              name="phone"
              type="text"
              size="small"
            ></TextField>
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <TextField
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              name="password"
              type="password"
              size="small"
            ></TextField>
          </FormControl>
        </div>

        <div className="mt-3 grid">
          <Button type="submit" onClick={login} variant="contained" sx={{ with: "100%" }}>
            {isPending?"Laoding...":"Kirish"} 
          </Button>
          <Link
            href={"/register"}
            className=" text-center text-[#55A6F6] mt-2 hover:underline transition-all"
          >
            Royxatdan otish
          </Link>
        </div>
      </form>
    </div>
  );
}
