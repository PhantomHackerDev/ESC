'use client';

import Image from "next/image";
import React from "react";

const Certificate: React.FC = () => {
  return (
    <div className="flex flex-col justify-center w-full bg-[#AFDAFB] items-center py-24">
      <Image alt="achievements.png" src={"/img/achievements.png"} width={800} height={100} className="" />
    </div>
  )
}

export default Certificate;