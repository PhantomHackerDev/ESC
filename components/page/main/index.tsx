'use client';

import React from "react";
import Header from "../../layouts/header";
import ReadMore from "./readMore";
import Feature from "./feature";

const Main: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center bg-white">
      <Header />
      <ReadMore />
      <Feature />
    </div>
  )
}

export default Main;