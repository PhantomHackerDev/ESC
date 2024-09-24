'use client';

import React from "react";
import Image from "next/image";
import SearchBar from "@/components/common/searchBar";
import Navbar from "@/components/common/navbar";

const Header: React.FC = () => {
  return (
    <div className="bg-[#000085] grid w-full grid-cols-3 relative items-center justify-between py-1 px-20">
      <div className="flex w-full relative">
        <Image alt="logo" src={"/img/logo.png"} width={100} height={100} className="" />
        <p className="absolute text-white text-[8px] top-7 left-20">ELECTRON STORAGE CORPORATION</p>
      </div>
      <Navbar />
      <div className="flex">
        <SearchBar />
      </div>
    </div>
  )
}

export default Header;