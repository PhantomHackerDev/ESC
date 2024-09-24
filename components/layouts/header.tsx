'use client';

import React from "react";
import Image from "next/image";
import SearchBar from "@/components/common/searchBar";
import Navbar from "@/components/common/navbar";

const Header: React.FC = () => {
  return (
    <div className="bg-[#000085] flex w-full flex-row items-center justify-between gap-20 py-4 px-32">
      <div className="flex bg-[#00001D] rounded-lg p-5">
        <Image alt="logo" src={"/img/logo.png"} width={300} height={100} />
      </div>
      <Navbar />
    </div>
  )
}

export default Header;