'use client';

import Image from "next/image";
import React from "react";

const Why: React.FC = () => {
  return (
    <div className="flex w-full bg-white flex-col py-5 px-32 gap-5">
      <p className="text-5xl text-black font-bold pb-10">Why Our ESC Product is Best </p>
      <div className="flex flex-row items-center justify-center divide-solid divide-x-2 divide-gray-500">
        <div className="flex flex-row items-center px-10">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#007AFF] text-2xl font-bold">ESC Wall Mount Standard</p>
            <Image alt="electronic-1.png" src={"/img/electronic_1.png"} width={300} height={300} />
          </div>
          <p className="flex justify-center">
            <svg width="85" height="70" viewBox="0 0 85 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M46.4648 42.5956L43.3907 35.7957L49.4379 32.383L72.5006 19.7054L76.1267 26.3099L46.4648 42.5956Z" fill="#00004A"/>
              <path d="M54.4266 5.88632C49.025 2.28199 42.7271 0.251477 36.2375 0.0218829C29.7478 -0.207711 23.3222 1.37267 17.6794 4.58626C12.0365 7.79985 7.399 12.5199 4.28545 18.2186C1.1719 23.9172 -0.294884 30.3697 0.0491551 36.8543C0.393194 43.3389 2.53449 49.6 6.23354 54.9372C9.93259 60.2744 15.0435 64.4772 20.9947 67.0757C26.9459 69.6742 33.5026 70.5658 39.9316 69.6508C46.3606 68.7358 52.4082 66.0503 57.3981 61.8947L52.7071 56.2619C48.7622 59.5471 43.9812 61.6702 38.8987 62.3935C33.8163 63.1169 28.6328 62.412 23.928 60.3578C19.2232 58.3035 15.1827 54.9809 12.2584 50.7615C9.33407 46.5422 7.64125 41.5924 7.36926 36.4659C7.09728 31.3395 8.25686 26.2384 10.7183 21.7333C13.1798 17.2282 16.846 13.4967 21.307 10.9561C25.768 8.41558 30.8478 7.1662 35.9783 7.3477C41.1088 7.52921 46.0876 9.13445 50.3579 11.9839L54.4266 5.88632Z" fill="#00004A"/>
            </svg>
          </p>
        </div>
        <div className="flex flex-row items-center px-10">
          <p className="flex justify-center">
            <svg width="77" height="68" viewBox="0 0 77 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49.5 43.4368L38.115 32.0518L43.3033 26.8634L49.5 33.0784L67.6133 14.9468L72.8017 20.1351L49.5 43.4368Z" fill="#01E43F"/>
              <path d="M52.8716 5.71814C47.6243 2.21679 41.5064 0.244292 35.2021 0.0212577C28.8979 -0.201776 22.6558 1.33345 17.1742 4.45522C11.6926 7.577 7.1876 12.1622 4.16301 17.698C1.13842 23.2339 -0.286459 29.502 0.0477506 35.8013C0.38196 42.1007 2.46207 48.1828 6.05544 53.3675C9.6488 58.5522 14.6137 62.635 20.3949 65.1593C26.176 67.6835 32.5454 68.5496 38.7907 67.6608C45.036 66.7719 50.9108 64.1632 55.7582 60.1263L51.2011 54.6544C47.369 57.8458 42.7246 59.9082 37.7873 60.6109C32.8501 61.3136 27.8147 60.6288 23.2443 58.6333C18.674 56.6377 14.7489 53.41 11.9082 49.3112C9.06738 45.2124 7.42293 40.4041 7.15871 35.4241C6.8945 30.444 8.02095 25.4887 10.4121 21.1123C12.8032 16.7359 16.3647 13.111 20.6982 10.6431C25.0318 8.17514 29.9664 6.96145 34.9503 7.13777C39.9342 7.31409 44.7708 8.87347 48.9191 11.6415L52.8716 5.71814Z" fill="#01E43F"/>
            </svg>
          </p>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#007AFF] text-2xl font-bold">ESC Wall Mount Standard</p>
            <Image alt="electronic-1.png" src={"/img/electronic_1.png"} width={300} height={300} />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-row rounded-full w-[80%] py-3 bg-[#007AFF] justify-between">
          <p className="font-bold text-2xl ml-3">60%</p>
          <p className="text-xs">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, </p>
          <p className="font-bold text-2xl mr-3">70%</p>
        </div>
        <div className="flex flex-row rounded-full w-[56%] py-3 bg-[#007AFF] justify-between">
          <p className="font-bold text-2xl ml-3">50%</p>
          <p className="text-xs">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, </p>
          <p className="font-bold text-2xl mr-3">55%</p>
        </div>
        <div className="flex flex-row rounded-full w-[68%] py-3 bg-[#007AFF] justify-between">
          <p className="font-bold text-2xl ml-3">55%</p>
          <p className="text-xs">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, </p>
          <p className="font-bold text-2xl mr-3">60%</p>
        </div>
        <div className="flex flex-row rounded-full w-[44%] py-3 bg-[#007AFF] justify-between">
          <p className="font-bold text-2xl ml-3">30%</p>
          <p className="text-xs">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, </p>
          <p className="font-bold text-2xl mr-3">40%</p>
        </div>
      </div>
    </div>
  )
}

export default Why