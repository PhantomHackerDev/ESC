'use client';

import React, {useState} from "react";
import Image from "next/image";
import {electron} from '@/utils/context';

const ReadMore: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % electron.length);
  };
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + electron.length) % electron.length);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="relative flex bg-cover bg-center flex-row justify-center py-10 items-center gap-5"
        style={{
          backgroundImage: "url(/img/readmore.png)",
          width: "100%",
          height: "100%",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="flex flex-row justify-center  items-center">
          <div className="flex flex-col gap-5">
            <p className="text-white text-5xl text-center">
              No Thermal &nbsp; Runaway  &nbsp; No &nbsp; Fires<br/> 30,000+ Full Discharge/Recharge Cycles<br/> 20 - 30 Year Expected Lifespan<br/> UL310A Certified
            </p>
            <div className="flex px-16">
              <div className="flex flex-col gap-5 left-4">
                <p className="text-white text-[10px]">
                  Electron Storage Corporation (ESC) delivers cutting-edge energy storage<br/> technologies for a cleaner, sustainable world.
                </p>
                <div className="flex flex-row gap-7">
                  <button className="bg-[#000a18] px-5 py-3 border border-white hover:bg-[#007AFF] hover:border-[#007AFF] rounded-md">Read More</button>
                  <button className="bg-[#000a18] px-5 py-3 border border-white hover:bg-[#007AFF] hover:border-[#007AFF] rounded-md">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center justify-between ">
              <div className="flex">
                <Image
                  src={`/img/${electron[currentIndex]}`}
                  width={400}
                  height={400}
                  alt={`${electron[currentIndex]}`}
                  className=""
                />
              </div>
            </div>
            <div className="absolute">
              <a onClick={(e) => { e.preventDefault(); handlePrevClick(); }}>
                <Image
                  src="/img/arrow_right.png"
                  width={100}
                  height={100}
                  alt="arrow.png"
                  className=" w-[50px] h-auto mt-64 rotate-180"
                />
              </a>
            </div>
            <div className="absolute items-center j">
              <a onClick={(e) => { e.preventDefault(); handleNextClick(); }}>
                <Image
                  src="/img/arrow_right.png"
                  width={100}
                  height={100}
                  alt="arrow.png"
                  className=" w-[50px] mt-64 ml-[340px] h-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadMore