'use client';

import React from "react";

const Feature: React.FC  = () => {
  return (
    <div className="bg-white px-40 w-full flex flex-col pt-8 pb-20">
      <div className="flex flex-col w-full P-5">
        <div className="flex flex-row w-full p-5 gap-5">
          <div className="flex flex-row gap-5 items-start rounded-lg p-5 w-2/5 bg-[#007AFF]">
            <div className="flex">
              <p className="text-white py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20"><path fill="#ffffff" d="M13.65 2.88c3.93 2.01 5.48 6.84 3.47 10.77s-6.83 5.48-10.77 3.47a7.94 7.94 0 0 1-3.86-4.4l1.64-1.03a6.13 6.13 0 0 0 3.08 3.76c3.01 1.54 6.69.35 8.23-2.66A6.114 6.114 0 1 0 4.56 7.21l1.88.97l-4.95 3.08l-.39-5.82l1.78.91C4.9 2.4 9.75.89 13.65 2.88m-4.36 7.83A1 1 0 0 1 9 10c0-.07.03-.12.04-.19h-.01L10 5l.97 4.81L14 13l-4.5-2.12l.02-.02c-.08-.04-.16-.09-.23-.15"></path></svg>
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-3xl">Ultra-Long Life</p>
              <p className="font-medium text-xl">{`Based on supercapacitor technology, making the battery projected cycle life up to 20 years.`}</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-start rounded-lg p-5 w-3/5 bg-[#007AFF]">
            <div className="flex">
              <p className="text-white py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20"><path fill="#ffffff" d="M13.65 2.88c3.93 2.01 5.48 6.84 3.47 10.77s-6.83 5.48-10.77 3.47a7.94 7.94 0 0 1-3.86-4.4l1.64-1.03a6.13 6.13 0 0 0 3.08 3.76c3.01 1.54 6.69.35 8.23-2.66A6.114 6.114 0 1 0 4.56 7.21l1.88.97l-4.95 3.08l-.39-5.82l1.78.91C4.9 2.4 9.75.89 13.65 2.88m-4.36 7.83A1 1 0 0 1 9 10c0-.07.03-.12.04-.19h-.01L10 5l.97 4.81L14 13l-4.5-2.12l.02-.02c-.08-.04-.16-.09-.23-.15"></path></svg>
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-3xl">Smart BMS</p>
              <p className="font-medium text-xl">{`Enerbond’s system integrates smart BMS with bluetooth or remote monitoring function. Modbus,Canbus, and TCP communication are available.`}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full p-5 gap-5">
          <div className="flex flex-row gap-5 items-start rounded-lg p-5 w-1/2 bg-[#007AFF]">
            <div className="flex">
              <p className="text-white py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20"><path fill="#ffffff" d="M13.65 2.88c3.93 2.01 5.48 6.84 3.47 10.77s-6.83 5.48-10.77 3.47a7.94 7.94 0 0 1-3.86-4.4l1.64-1.03a6.13 6.13 0 0 0 3.08 3.76c3.01 1.54 6.69.35 8.23-2.66A6.114 6.114 0 1 0 4.56 7.21l1.88.97l-4.95 3.08l-.39-5.82l1.78.91C4.9 2.4 9.75.89 13.65 2.88m-4.36 7.83A1 1 0 0 1 9 10c0-.07.03-.12.04-.19h-.01L10 5l.97 4.81L14 13l-4.5-2.12l.02-.02c-.08-.04-.16-.09-.23-.15"></path></svg>
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-3xl">Ultra-Long Life</p>
              <p className="font-medium text-xl">{`Based on supercapacitor technology, making the battery projected cycle life up to 20 years.`}</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-start rounded-lg p-5 w-1/2 bg-[#007AFF]">
            <div className="flex">
              <p className="text-white py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20"><path fill="#ffffff" d="M13.65 2.88c3.93 2.01 5.48 6.84 3.47 10.77s-6.83 5.48-10.77 3.47a7.94 7.94 0 0 1-3.86-4.4l1.64-1.03a6.13 6.13 0 0 0 3.08 3.76c3.01 1.54 6.69.35 8.23-2.66A6.114 6.114 0 1 0 4.56 7.21l1.88.97l-4.95 3.08l-.39-5.82l1.78.91C4.9 2.4 9.75.89 13.65 2.88m-4.36 7.83A1 1 0 0 1 9 10c0-.07.03-.12.04-.19h-.01L10 5l.97 4.81L14 13l-4.5-2.12l.02-.02c-.08-.04-.16-.09-.23-.15"></path></svg>
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-3xl">Smart BMS</p>
              <p className="font-medium text-xl">{`Enerbond’s system integrates smart BMS with bluetooth or remote monitoring function. Modbus,Canbus, and TCP communication are available.`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature;