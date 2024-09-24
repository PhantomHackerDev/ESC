'use client';

import Image from "next/image";
import React from "react";

const Detail: React.FC = () => {
  return (
    <div className="flex flex-row bg-[#E1E1E1] w-full py-16 px-36 gap-7">
      <div className="flex flex-row w-1/2">
        <DetailItem />
        <div className="flex bg-[#F5F5F5] w-[45%]">
          <Image alt="electronic_3.png" src={"/img/electronic_3.png"} width={300} height={200} />
        </div>
      </div>
      <div className="flex flex-row w-1/2">
        <DetailItem />
        <div className="flex bg-[#F5F5F5] w-[45%] justify-center items-center">
          <Image alt="electronic_3.png" src={"/img/electronic_slot.png"} width={300} height={100} />
        </div>
      </div>
    </div>
  )
}

const DetailItem: React.FC = () => {
  return (
    <div className="bg-[#FEFEFE] flex flex-col p-5 w-[55%]">
      <p className="text-black text-3xl font-bold">ESC Wall Mount<br/>System</p>
      <p className="text-[#007AFF] text-2xl font-semibold">Features:</p>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside pb-3">
        <li>
        Green/Environmentally Friendly
        </li>
        <li>
        Safe — No risk of thermal runaway
        </li>
        <li>
        Long Lifespan/Cycle Life
        </li>
        <li>
        Wide operating temperature
        </li>
        <li>
        Low ESR
        </li>
        <li>
        100% Depth of Discharge (DoD)
        </li>
        <li>
        Low maintenance
        </li>
      </ul>
      <button className="flex flex-row border justify-center items-center gap-2 w-1/2 py-2 border-gray-300 rounded-lg" >
        <span className="flex text-center font-bold text-gray-400 ">Learn More</span>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="-5 -5 24 24"><path fill="#b2aeae" d="m10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2z"></path></svg>
        </span>
      </button>
    </div>
  )
}
export {
  DetailItem
}

export default Detail;