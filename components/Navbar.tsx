"use client";
import Link from "next/link";
import React from "react";
import logo from "../assets/svg/logo.svg";
import Image from "next/image";
import { useAuth } from "@/context/authContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSession } from "@/context/sessionContext";
import { Chat, ChatBubbleOutline } from "@mui/icons-material";
export default function Navbar() {
  const { isAuth } = useAuth();
  const { userData } = useSession();
  return (
    <nav className="bg-white flex z-[1000] items-center shadow h-18  sticky top-0">
      <div className="max-w-[1440px] px-5 mx-auto flex items-center justify-between w-full">
        <div className="flex items-center justify-center gap-10">
          <Link
            href="/"
            className="text-[#3DB8F5] text-2xl font-semibold flex items-center gap-2"
          >
            <span className="bg-[#3DB8F5] flex w-[36px] h-[36px] items-center justify-center rounded-md">
              <Image width={18} src={logo} alt="dwd" />
            </span>
            <span>AutoMarket</span>
          </Link>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href={"#"}
                className="font-medium text-[#161A1D] hover:text-[#3DB8F5] transition-all"
              >
                Bosh sahifa
              </Link>
            </li>
            <li>
              <Link
                href={"/product"}
                className="font-medium text-[#161A1D] hover:text-[#3DB8F5] transition-all"
              >
                Avtomobillar
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={"/chat"}
            className="py-2.5 px-4 text-sm font-medium rounded-lg  cursor-pointer hover:opacity-[0.8] flex items-center gap-1"
          >
            <ChatBubbleOutline
              sx={{ fontSize: "30px" }}
              className="text-[#3DB8F5]"
            />
            <span>Chat</span>
          </Link>
          {/* <button className="py-2.5 px-4 text-sm font-medium cursor-pointer text-[#161A1D]">Kirish</button> */}
          {isAuth ? (
            <Link
              href={"/profile"}
              className="py-3 px-6 font-medium rounded-lg  cursor-pointer hover:opacity-[0.8] flex items-center gap-1"
            >
              <AccountCircleIcon sx={{ fontSize: "40px" }} />
              <span>Hisobingiz</span>
            </Link>
          ) : (
            <Link
              href={"/login"}
              className="py-3 px-6 font-medium bg-gray-800 rounded-lg text-white cursor-pointer hover:opacity-[0.8]"
            >
              Kirish
            </Link>
          )}

          {isAuth && (
            <Link
              href={"/sell"}
              className="py-3 px-6 font-medium bg-[#3DB8F5] rounded-lg text-white cursor-pointer hover:opacity-[0.8]"
            >
              Elon berish
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
