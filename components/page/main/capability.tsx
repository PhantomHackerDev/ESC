'use client';

import React from "react";
import Image from "next/image";

const Capability: React.FC = () => {
  return (
    <div className="flex flex-row w-full px-32 bg-cover bg-center items-center justify-center py-3"
      style={{
        backgroundImage: "url(/img/main_1.png)",
        width: "100%",
        height: "100%",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex flex-col w-2/3">
        <Image alt="logo2" src={"/img/logo2.png"} width={100} height={100} />
        <p className="text-white text-xl pb-10">
          Whether you are powering or backing up your home, your office or an entire city block,  ESC has a scalable solution for you. 
        </p>
        <p className="text-white text-xl">
          From 5 kWh - 10 Megawatts and higher, <br/>
          ESC Engineers will design and build a system precisely tailored to your requirements.
        </p>
      </div>
      <div className="flex flex-row 1/3">
        <Image alt="electronic_1" src={"/img/electronic_1.png"} width={200} height={200} />
        <Image alt="electronic_back.png" src={"/img/electronic_back.png"} width={200} height={200} />
      </div>
    </div>
  )
}

export default Capability;