'use client';

import Image from "next/image";
import React from "react";

const characteristics = [
  {imgSrc:"tempreture.png", description: "-20⁰C to 60⁰C discharge temperature range"},
  {imgSrc:"charge.png", description: "1C – 5C high charge / discharge rate"},
  {imgSrc:"cool.png", description: "No heat generated during cycling"},
  {imgSrc:"degradation.png", description: "Minimal capacity degradation due to cycling"},
  {imgSrc:"protect.png", description: "In-built safeties protect the module"},
  {imgSrc:"remote.png", description: "Remote monitoring"},
  {imgSrc:"safe.png", description: "Safe - no risk of thermal runaway"},
  {imgSrc:"repair.png", description: "No maintenance required during warehousing or after installation"},
  {imgSrc:"environment.png", description: "Environment - no disposal impact, fully recyclable"},
]

const Essential: React.FC = () => {
  return (
    <div className="flex w-full bg-white justify-center items-center flex-col pt-12 px-40 gap-10 pb-24">
      <p className="text-5xl text-black w-full font-bold">Essential characteristics</p>
      <div className="flex flex-col w-full px-10">
        <div className="grid grid-cols-3 gap-3">
          {
            characteristics.map((charcter: any, index: number) => (
              <div key={index} className="flex flex-row items-center gap-3">
                <Image alt={charcter.imgSrc} src={`/img/${charcter.imgSrc}`} width={50} height={50} />
                <p className="text-sm text-gray-400">{charcter.description}</p>
              </div>
            ))
          }
        </div>
      </div>
      <p className="text-5xl text-black w-full font-bold">Achievements</p>
    </div>
  )
}

export default Essential