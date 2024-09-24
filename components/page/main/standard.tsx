'use client';

import Image from "next/image";
import React from "react";

const Standard: React.FC = () => {
  return (
    <div className="flex w-full bg-[#E1E1E1] justify-center items-center flex-row py-5 px-32 gap-10">
      <div className="flex w-2/5">
        <Image alt="electronic_2.png" src={"/img/electronic_2.png"} width={400} height={400} />
      </div>
      <div className="flex flex-col w-3/5 gap-5">
        <p className="text-5xl font-bold text-[#007AFF]">ESC Wall Mount<br /> Standard</p>
        <p className="text-lg text-gray-400">{`This energy storage module has a rated voltage range from 58.8V to 42V, with a capacity of 5250Wh. It supports a standard charge and discharge current of 50A, with maximum pulse discharge up to 150A, and operates within temperatures from -20°C to 60°C. With a cycle life of over 50,000 cycles and compatibility with popular inverters like Victron and SMA, it's designed for efficient, long-lasting performance in parallel systems up to 15 modules.`}</p>
        <button className="flex items-center rounded-lg w-1/4 py-3 text-center justify-center bg-[#007AFF]">
          <p className="text-white text-xl">Read More</p>
        </button>
      </div>
    </div>
  )
}

export default Standard;