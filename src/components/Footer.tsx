import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64  bg-gray-200 text-sm mt-24">
      <div className="flex flex-col md:flex-row justify-between gap-24">
        <div className=" w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-widest ">MUBA</div>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <span className="font-semibold">mubastore@gmail.com</span>
          <span className="fomt-semibold">+234 9046 220 634</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={24} height={24} />
            <Image src="/x.png" alt="" width={24} height={24} />
            <Image src="/instagram.png" alt="" width={24} height={24} />
            <Image src="/pinterest.png" alt="" width={24} height={24} />

          </div>
        </div> 
        <div className=" hidden lg:flex justify-between gap-8 w-1/2"></div>
        <div className=" w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
        <h1 className="font-medium text-lg">SUBSCRIBE</h1>
        <p>
          be the first to get the latest newws about trends, promotions and much more!
        </p>
        <div className="flex">
          <input type="email" 
          placeholder="Email address"
          className="p-4 w-3/4"/>
          <button className="bg-pink-500  w-1/4 text-white">Join</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/visa.png" alt="" width={40} height={40} />
            <Image src="/mastercard.png" alt="" width={40} height={40} />
            <Image src="/paypal.png" alt="" width={40} height={40} />
            <Image src="/skrill.png" alt="" width={40} height={40} />
            <Image src="/discover.png" alt="" width={40} height={40} />
        </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
