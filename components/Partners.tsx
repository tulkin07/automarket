import React from "react";
import Image from "next/image";

import volkswagen from "../assets/img/volkswagen.png";
import alfaRomeo from "../assets/img/alfa-romeo.png";
import astonMartin from "../assets/img/aston-martin.png";
import audi from "../assets/img/audi-black.png";
import bentley from "../assets/img/bentley.png";
import bugatti from "../assets/img/bugatti.png";
import byd from "../assets/img/byd.png";
import cadilac from "../assets/img/cadilac.png";
import chevrolet from "../assets/img/chevrolet.png";
import ferrari from "../assets/img/ferrari.png";

export default function Partners() {
  return (
    <div className="w-full py-24 ">
      <div className="max-w-[1440px] mx-auto">
        <h4 className="text-[#161A1D] text-center font-semibold text-4xl">
          Hamkor brendlar
        </h4>
        <div className="grid grid-cols-5 gap-5 mt-16 justify-items-center items-center">
          <div>
            <Image src={volkswagen} alt="" width={120} height={64} />
          </div>
          <div>
            <Image src={alfaRomeo} alt="" width={120} height={64} />
          </div>
          <div>
            <Image src={astonMartin} alt="" width={120} height={64} />
          </div>
          <div>
            <Image src={audi} alt="" width={120} height={64} />
          </div>
          <div>
            <Image src={bentley} alt="" width={120} height={64} />
          </div>
          <div>
            <Image src={ferrari} alt="" width={120} height={64} />
          </div>
          <div>
            <Image src={bugatti} alt="" width={120} height={64} />
          </div>
          <div>
            <Image src={byd} alt="" width={120} height={64} />
          </div>
          <div>
            <Image src={cadilac} alt="" width={120} height={64} />
          </div>
          <div>
            <Image src={chevrolet} alt="" width={120} height={64} />
          </div>
        </div>
      </div>
    </div>
  );
}
