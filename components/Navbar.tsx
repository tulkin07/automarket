import Link from "next/link";
import React from "react";
import logo from "../assets/svg/logo.svg";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="bg-white flex items-center shadow h-16">
      <div className="max-w-5xl mx-auto  px-5 flex items-center justify-between w-full ">
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
              <Link href={"#"} className="text-sm font-medium text-[#161A1D] hover:text-[#3DB8F5] transition-all">Bosh sahifa</Link>
            </li>
            <li>
              <Link href={"#"} className="text-sm font-medium text-[#161A1D] hover:text-[#3DB8F5] transition-all">Avtomobillar</Link>
            </li>
            <li>
              <Link href={"#"} className="text-sm font-medium text-[#161A1D] hover:text-[#3DB8F5] transition-all">Mashina sotish</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
            {/* <button className="py-2.5 px-4 text-sm font-medium cursor-pointer text-[#161A1D]">Kirish</button> */}
             <button className="py-2.5 px-4 text-sm font-medium bg-gray-800 rounded-lg text-white cursor-pointer hover:opacity-[0.8]">
            Kirish
          </button>
            <button className="py-2.5 px-4 text-sm font-medium bg-[#3DB8F5] rounded-lg text-white cursor-pointer hover:opacity-[0.8]">Ro‘yxatdan o‘tish</button>
        </div>
      </div>
    </nav>
  );
}
