'use client';

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="flex">
      <ul className="flex space-x-6 text-lg text-white">
        <li>
          <Link href={`/home`} className="hover:underline text-center active:underline">
            Home
            </Link>
          </li>
        <li>
          <Link href={`/product`} className="hover:underline text-center active:underline">
            Products
          </Link>
        </li>
        <li>
          <Link href={`/about`} className="hover:underline text-center active:underline">
            About Us
          </Link>
        </li>
        <li>
          <Link href={`/contact`} className="hover:underline text-center active:underline">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar