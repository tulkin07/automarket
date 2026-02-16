import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <div className="bg-white py-8 px-6 rounded-xl shadow min-w-[300px] ">
      <div>
        <p className="text-[#55A6F6] text-[23px] leading-6 font-bold text-center">
          AutoMarket
        </p>
        <div className="grid gap-3 mt-6">
          <FormControl>
            <FormLabel>Username</FormLabel>
            <TextField type="text" size="small"></TextField>
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <TextField type="text" size="small"></TextField>
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <TextField type="password" size="small"></TextField>
          </FormControl>
        </div>

        <div className="mt-3 grid">
          <Button variant="contained" sx={{ with: "100%" }}>
            Kirish
          </Button>
          <Link
            href={"/login"}
            className=" text-center text-[#55A6F6] mt-2 hover:underline transition-all"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
