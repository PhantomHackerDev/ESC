'use client';

import React from "react";
import Header from "../../layouts/header";
import Footer from "@/components/layouts/footer";
import ProductItem from "./productItem";

const Product: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center bg-white">
      <Header />
      <ProductItem />
      <Footer />
    </div>
  )
}

export default Product;