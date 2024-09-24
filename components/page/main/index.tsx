'use client';

import React from "react";
import Header from "../../layouts/header";
import ReadMore from "./readMore";

const Main: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center bg-white">
      <Header />
      <ReadMore />
    </div>
  )
}

export default Main;