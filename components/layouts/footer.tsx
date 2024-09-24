'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0b5b] text-white flex flex-col py-12 w-full">
      <div className="flex flex-row w-full ml-20 gap-20">
        <div className="flex flex-col">
          <Image alt='logo' src={"/img/logo2.png"} width={100} height={100} />
          <div className="flex flex-col">
            <p className="text-sm">Powering the Future with Superior Electron Storage Corporation</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="Facebook" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="-7 -2 24 24"><path fill="#ffffff" d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865"></path></svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="#ffffff" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
              </Link>
              <Link href="#" aria-label="YouTube" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#ffffff" d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z"></path></g></svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-7">

          {/* About Us Links */}
          <div>
            <h3 className="font-semibold text-lg underline">About Us</h3>
            <ul className="space-y-2 mt-4">
              <li><Link href="#" className="hover:underline text-xs">Who we are</Link></li>
              <li><Link href="#" className="hover:underline text-xs">Products</Link></li>
              <li><Link href="#" className="hover:underline text-xs">Privacy policy</Link></li>
              <li><Link href="#" className="hover:underline text-xs">Term Of Use</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg underline">Support</h3>
            <ul className="space-y-2 mt-4">
              <li><Link href="#" className="hover:underline text-xs">FAQs</Link></li>
              <li><Link href="#" className="hover:underline text-xs">Tutorial videos</Link></li>
              <li><Link href="#" className="hover:underline text-xs">Warranty</Link></li>
              <li><Link href="#" className="hover:underline text-xs">Downloads</Link></li>
              <li><Link href="#" className="hover:underline text-xs">ESC blogs</Link></li>
            </ul>
          </div>

          {/* Cooperation Links */}
          <div>
            <h3 className="font-semibold text-lg underline">Cooperation</h3>
            <ul className="space-y-2 mt-4">
              <li><Link href="#" className="hover:underline text-xs">Become our Partners</Link></li>
              <li><Link href="#" className="hover:underline text-xs">Exhibitions</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className='-mr-4'>
            <h3 className="font-semibold text-lg underline">Contact Us</h3>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512"><path fill="#ffffff" d="M256 17.108c-75.73 0-137.122 61.392-137.122 137.122c.055 23.25 6.022 46.107 11.58 56.262L256 494.892l119.982-274.244h-.063a137.1 137.1 0 0 0 17.202-66.418C393.122 78.5 331.73 17.108 256 17.108m0 68.56a68.56 68.56 0 0 1 68.56 68.562A68.56 68.56 0 0 1 256 222.79a68.56 68.56 0 0 1-68.56-68.56A68.56 68.56 0 0 1 256 85.67z"></path></svg>
                <span className='text-xs'>11/A, Bonifant Street, Suite 459<br />NY, New York City, United States</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 256 256"><path fill="#ffffff" d="M144.27 45.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.2 8.2 0 0 1-2.07.27a8 8 0 0 1-7.73-5.94a70.35 70.35 0 0 0-50.33-50.33a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.54 26.33 26.33A8 8 0 0 0 176 120a8.2 8.2 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m81.94 95.35A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a8 8 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6 6 0 0 1 .57-.77L96 95.15l-21-47a.6.6 0 0 1 0-.12A40.2 40.2 0 0 0 40 88a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"></path></svg>
                <span className='text-xs'>01234567890</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="#ffffff" d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-.41 2l-5.88 5.88a1 1 0 0 1-1.42 0L5.41 6ZM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.41l5.88 5.88a3 3 0 0 0 4.24 0L20 7.41Z"></path></svg>
                <span className='text-xs'>esc@xyz.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto flex justify-between items-center border-t border-gray-700 mt-12 pt-4 ">
        <p>© Copyright 2024 | All Rights Reserved.</p>
        <div className="flex space-x-4">
          {/* Add your payment method logos */}
          <Image src="/img/payment/visa.png" alt="Visa" width={30} height={30}  />
          <Image src="/img/payment/bkash.png" alt="PayPal" width={30} height={30}  />
          <Image src="/img/payment/paypal.png" alt="Mastercard" width={30} height={30}  />
          <Image src="/img/payment/nagad.png" alt="Mastercard" width={30} height={30}  />
          <Image src="/img/payment/mastercard.png" alt="Mastercard" width={30} height={30}  />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
