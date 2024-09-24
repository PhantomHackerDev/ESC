'use client';

import React from "react";
import Header from "../../layouts/header";
import ReadMore from "./readMore";
import Feature from "./feature";
import Capability from "./capability";
import Detail from "./detail";

const Main: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center bg-white">
      <Header />
      <ReadMore />
      <Feature />
      <Capability />
      <Detail />
    </div>
  )
}

export default Main;