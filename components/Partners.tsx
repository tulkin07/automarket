import React from "react";
import mers from "../assets/img/mers.png"
import Image from "next/image";
export default function Partners() {
  return (
    <div className=" px-5 w-full py-24 ">
      <div className=" max-w-5xl mx-auto px-5">
        <h4 className="text-[#161A1D] text-center font-semibold text-4xl">
        Hamkor brendlar
        </h4>
        <div className="grid grid-cols-5 gap-5 mt-16">
          <div>
            <Image src={mers} alt="avto market" width={120} height={64}/>
          </div>
            <div>
            <Image src={mers} alt="avto market" width={120} height={64}/>
          </div>
            <div>
            <Image src={mers} alt="avto market" width={120} height={64}/>
          </div>
            <div>
            <Image src={mers} alt="avto market" width={120} height={64}/>
          </div>
            <div>
            <Image src={mers} alt="avto market" width={120} height={64}/>
          </div>
            <div>
            <Image src={mers} alt="avto market" width={120} height={64}/>
          </div>
            <div>
            <Image src={mers} alt="avto market" width={120} height={64}/>
          </div>
            <div>
            <Image src={mers} alt="avto market" width={120} height={64}/>
          </div>
            <div>
            <Image src={mers} alt="avto market" width={120} height={64}/>
          </div>
            <div>
            <Image src={mers} alt="avto market" width={120} height={64}/>
          </div>

        </div>
      </div>
    </div>
  );
}
