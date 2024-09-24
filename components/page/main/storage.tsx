'use client';

import React from "react";
import Image from "next/image";

const Storage: React.FC = () => {
  return (
    <div className="flex flex-row w-full px-32 bg-cover bg-center items-center justify-center py-3"
      style={{
        backgroundImage: "url(/img/main_1.png)",
        width: "100%",
        height: "100%",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex flex-col w-2/3 gap-5">
        <Image alt="logo2" src={"/img/logo2.png"} width={100} height={100} />
        <p className="text-white text-5xl">
          Hybrid Supercapacitor<br/> Energy  Storage
        </p>
        <div className="flex flex-row gap-8">
          <button className="p-1 bg-[#007AFF] rounded-md text-white">
            Read More
          </button>
          <button className="flex flex-row gap-3 justify-center items-center">
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5V19L11 12L3 5ZM14 5V19L22 12L14 5Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span>
            Watch video
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-row 1/3">
        <Image alt="electronic_1" src={"/img/electronic_1.png"} width={200} height={200} />
      </div>
    </div>
  )
}

export default Storage;