'use client';

import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="">
      <ul className="flex space-x-6 text-lg text-white">
        {["Home", "Products", "About Us", "Contact Us"].map((item, index) => (
          <li key={index}>
            <a href={`#${item.toLowerCase()}`} className="hover:underline text-center active:underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar