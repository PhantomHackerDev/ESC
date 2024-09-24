'use client';

import React from "react";
import Image from "next/image";
import SearchBar from "@/components/common/searchBar";
import Navbar from "@/components/common/navbar";

const Header: React.FC = () => {
  return (
    <div className="bg-[#000085] grid w-full grid-cols-3 relative items-center justify-between py-1 px-20">
      <div className="flex w-full relative">
        <Image alt="logo" src={"/img/logo.png"} width={200} height={100} className="" />
      </div>
      <Navbar />
      <SearchBar />
    </div>
  )
}

export default Header;