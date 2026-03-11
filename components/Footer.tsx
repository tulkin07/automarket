import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/svg/logo.svg";
import favebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import twitter from "../assets/svg/twitter.svg";
import linkiden from "../assets/svg/linkiden.svg";
export default function Footer() {
  return (
    <div className="bg-[#f3f5f6] pt-20 pb-15 relative bottom-0 flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col">
        <div className="flex w-full justify-between ">
          <div className="mr-50">
            <Link
              href="/"
              className="text-[#3DB8F5] text-2xl font-semibold flex items-center gap-2"
            >
              <span className="bg-[#3DB8F5] flex w-[36px] h-[36px] items-center justify-center rounded-md">
                <Image width={18} src={logo} alt="dwd" />
              </span>
              <span>AutoMarket</span>
            </Link>
            <p className="text-[#31383F] max-w-[300px] leading-5 pt-4">
              VitaSoft Cars - avtomobillar sotish va sotib olish uchun ishonchli
              platforma.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Image
                src={favebook}
                width={40}
                height={40}
                alt="avto market"
                className="cursor-pointer hover:opacity-[0.6] transition-all"
              />
              <Image
                src={instagram}
                width={40}
                height={40}
                alt="avto market"
                className="cursor-pointer hover:opacity-[0.6] transition-all"
              />
              <Image
                src={twitter}
                width={40}
                height={40}
                alt="avto market"
                className="cursor-pointer hover:opacity-[0.6] transition-all"
              />
              <Image
                src={linkiden}
                width={40}
                height={40}
                alt="avto market"
                className="cursor-pointer hover:opacity-[0.6] transition-all"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 w-full">
            <div>
              <h6 className="text-[#161A1D] text-[18px] font-semibold leading-7 pb-2">
                Kompaniya
              </h6>
              <Link
                href={"#"}
                className="text-[#31383F] text-base leading-6 pt-2 flex"
              >
                Biz haqimizda
              </Link>
              <Link
                href={"#"}
                className="text-[#31383F] text-base leading-6 pt-2 flex"
              >
                Karyera
              </Link>
              <Link
                href={"#"}
                className="text-[#31383F] text-base leading-6 pt-2 flex"
              >
                Matbuot
              </Link>
            </div>
            <div>
              <h6 className="text-[#161A1D] text-[18px] font-semibold leading-7 pb-2">
                Kompaniya
              </h6>
              <Link
                href={"#"}
                className="text-[#31383F] text-base leading-6 pt-2 flex"
              >
                Tez-tez soraladigan savollar
              </Link>
              <Link
                href={"#"}
                className="text-[#31383F] text-base leading-6 pt-2 flex"
              >
                Aloqa
              </Link>
              <Link
                href={"#"}
                className="text-[#31383F] text-base leading-6 pt-2 flex"
              >
                Qollanmalar
              </Link>
            </div>
            <div>
              <h6 className="text-[#161A1D] text-[18px] font-semibold leading-7 pb-2">
                Kompaniya
              </h6>
              <Link
                href={"#"}
                className="text-[#31383F] text-base leading-6 pt-2 flex"
              >
                Maxfiylik siyosati
              </Link>
              <Link
                href={"#"}
                className="text-[#31383F] text-base leading-6 pt-2 flex"
              >
                Xizmat korsatish shartlari
              </Link>
              <Link
                href={"#"}
                className="text-[#31383F] text-base leading-6 pt-2 flex"
              >
                Cookie siyosati
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-[#cccfd2] text-center mt-10 font-medium text-md pt-10">
          © 2026 VitaSoft Cars. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </div>
  );
}
