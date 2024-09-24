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
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_183_501)">
                  <path d="M15.9309 32.0128L15.4589 31.8034C14.9335 31.5728 2.66687 26.0328 2.66687 16.0008V7.30209C2.66734 6.46498 2.93191 5.64937 3.42292 4.97139C3.91393 4.29341 4.60634 3.78763 5.40154 3.52609L16.0002 0.0127563L26.5989 3.52609C27.3941 3.78763 28.0865 4.29341 28.5775 4.97139C29.0685 5.64937 29.3331 6.46498 29.3335 7.30209V16.0008C29.3335 27.4368 16.9495 31.6741 16.4215 31.8501L15.9309 32.0128ZM16.0002 2.80876L6.24554 6.04342C5.98013 6.13011 5.74896 6.29856 5.58514 6.52466C5.42132 6.75075 5.33325 7.02289 5.33354 7.30209V16.0008C5.33354 23.3261 13.9202 28.0781 16.0629 29.1488C18.2015 28.2888 26.6669 24.3514 26.6669 16.0008V7.30209C26.6672 7.02289 26.5791 6.75075 26.4153 6.52466C26.2514 6.29856 26.0203 6.13011 25.7549 6.04342L16.0002 2.80876Z" fill="#FAFAFA"/>
                  <path d="M14.815 19.3894H14.771C14.4335 19.3842 14.1006 19.3106 13.7924 19.1731C13.4841 19.0356 13.207 18.837 12.9777 18.5894L9.90302 15.3893L11.8243 13.5467L14.8163 16.6667L21.7243 9.75867L23.6097 11.644L16.595 18.6587C16.3614 18.8921 16.0837 19.0769 15.7782 19.2023C15.4727 19.3278 15.1453 19.3913 14.815 19.3894Z" fill="#FAFAFA"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_183_501">
                  <rect width="32" height="32" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
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
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33335 5.99999C8.62401 5.99979 7.92738 6.18821 7.31486 6.54596C6.70234 6.9037 6.19597 7.41789 5.84766 8.03582C5.49935 8.65375 5.32162 9.35319 5.33269 10.0624C5.34377 10.7717 5.54324 11.4652 5.91068 12.072C4.99807 12.2483 4.17531 12.7369 3.58368 13.4538C2.99205 14.1707 2.66846 15.0712 2.66846 16.0007C2.66846 16.9301 2.99205 17.8306 3.58368 18.5475C4.17531 19.2644 4.99807 19.753 5.91068 19.9293M9.33335 5.99999C9.33335 5.11593 9.68454 4.26809 10.3097 3.64297C10.9348 3.01785 11.7826 2.66666 12.6667 2.66666C13.5507 2.66666 14.3986 3.01785 15.0237 3.64297C15.6488 4.26809 16 5.11593 16 5.99999V26C16 26.884 15.6488 27.7319 15.0237 28.357C14.3986 28.9821 13.5507 29.3333 12.6667 29.3333C11.7826 29.3333 10.9348 28.9821 10.3097 28.357C9.68454 27.7319 9.33335 26.884 9.33335 26C8.62421 26 7.92781 25.8116 7.31548 25.4539C6.70316 25.0962 6.19693 24.5822 5.84865 23.9645C5.50038 23.3468 5.32258 22.6476 5.33348 21.9385C5.34438 21.2295 5.54359 20.536 5.91068 19.9293M9.33335 5.99999C9.33335 7.09066 9.85735 8.05866 10.6667 8.66666M5.91068 19.9293C6.38918 19.1372 7.12757 18.5354 8.00001 18.2267M25.6667 6.33332L22.6667 9.33332H20M25.6667 25.6667L22.6667 22.6667H20M25.6667 16H20M24.6667 6.33332C24.6667 6.59854 24.772 6.85289 24.9596 7.04043C25.1471 7.22797 25.4015 7.33332 25.6667 7.33332C25.9319 7.33332 26.1863 7.22797 26.3738 7.04043C26.5613 6.85289 26.6667 6.59854 26.6667 6.33332C26.6667 6.06811 26.5613 5.81375 26.3738 5.62622C26.1863 5.43868 25.9319 5.33332 25.6667 5.33332C25.4015 5.33332 25.1471 5.43868 24.9596 5.62622C24.772 5.81375 24.6667 6.06811 24.6667 6.33332ZM24.6667 25.6667C24.6667 25.4014 24.772 25.1471 24.9596 24.9595C25.1471 24.772 25.4015 24.6667 25.6667 24.6667C25.9319 24.6667 26.1863 24.772 26.3738 24.9595C26.5613 25.1471 26.6667 25.4014 26.6667 25.6667C26.6667 25.9319 26.5613 26.1862 26.3738 26.3738C26.1863 26.5613 25.9319 26.6667 25.6667 26.6667C25.4015 26.6667 25.1471 26.5613 24.9596 26.3738C24.772 26.1862 24.6667 25.9319 24.6667 25.6667ZM24.6667 16C24.6667 16.2652 24.772 16.5196 24.9596 16.7071C25.1471 16.8946 25.4015 17 25.6667 17C25.9319 17 26.1863 16.8946 26.3738 16.7071C26.5613 16.5196 26.6667 16.2652 26.6667 16C26.6667 15.7348 26.5613 15.4804 26.3738 15.2929C26.1863 15.1053 25.9319 15 25.6667 15C25.4015 15 25.1471 15.1053 24.9596 15.2929C24.772 15.4804 24.6667 15.7348 24.6667 16Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
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
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_183_501)">
                  <path d="M15.9309 32.0128L15.4589 31.8034C14.9335 31.5728 2.66687 26.0328 2.66687 16.0008V7.30209C2.66734 6.46498 2.93191 5.64937 3.42292 4.97139C3.91393 4.29341 4.60634 3.78763 5.40154 3.52609L16.0002 0.0127563L26.5989 3.52609C27.3941 3.78763 28.0865 4.29341 28.5775 4.97139C29.0685 5.64937 29.3331 6.46498 29.3335 7.30209V16.0008C29.3335 27.4368 16.9495 31.6741 16.4215 31.8501L15.9309 32.0128ZM16.0002 2.80876L6.24554 6.04342C5.98013 6.13011 5.74896 6.29856 5.58514 6.52466C5.42132 6.75075 5.33325 7.02289 5.33354 7.30209V16.0008C5.33354 23.3261 13.9202 28.0781 16.0629 29.1488C18.2015 28.2888 26.6669 24.3514 26.6669 16.0008V7.30209C26.6672 7.02289 26.5791 6.75075 26.4153 6.52466C26.2514 6.29856 26.0203 6.13011 25.7549 6.04342L16.0002 2.80876Z" fill="#FAFAFA"/>
                  <path d="M14.815 19.3894H14.771C14.4335 19.3842 14.1006 19.3106 13.7924 19.1731C13.4841 19.0356 13.207 18.837 12.9777 18.5894L9.90302 15.3893L11.8243 13.5467L14.8163 16.6667L21.7243 9.75867L23.6097 11.644L16.595 18.6587C16.3614 18.8921 16.0837 19.0769 15.7782 19.2023C15.4727 19.3278 15.1453 19.3913 14.815 19.3894Z" fill="#FAFAFA"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_183_501">
                  <rect width="32" height="32" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
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
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 18.6666L17.3333 2.66663V13.3333H24L14.6667 29.3333V18.6666H8Z" stroke="#FAFAFA" stroke-width="2" stroke-linejoin="round"/>
                </svg>
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