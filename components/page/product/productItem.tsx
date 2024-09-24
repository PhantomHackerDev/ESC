'use client';

import React from "react";
import Breadcrumb from "@/components/common/breadcrumb";

const ProductItem: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Product Name', href: '/products/product-name' }
  ];
  return (
    <div className="flex">
      <Breadcrumb items={breadcrumbItems} />
    </div>
  )
}

export default ProductItem