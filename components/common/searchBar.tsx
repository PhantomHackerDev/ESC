'use client';

import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div>
      <label
        className="text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          className="block w-80 p-2 px-7 text-sm text-gray-900 rounded-md bg-gray-100 focus:ring-transparent focus:outline-none"
          placeholder="Search..."
        />
        <div className="absolute bg-[#007AFF] rounded-r-md inset-y-0 end-0 flex items-center px-2">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SearchBar