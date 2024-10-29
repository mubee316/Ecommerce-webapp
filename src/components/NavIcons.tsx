"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCarteOpen] = useState(false);

  const router = useRouter();
  const isLoggedIn = false;

  const handleProfile = () => {
    if (isLoggedIn) router.push("/Login");

    setIsProfileOpen((prev) => !prev);
  };
  const cartItems = true;
  return (
    <div className="flex items-center justify-between gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-lg">
          <Link href="/">Profile</Link>
          <div className="mt-3 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          alt=""
          width={24}
          height={24}
          onClick={() => setIsCarteOpen((prev) => !prev)}
        />
        <div className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          2
        </div>
        {isCartOpen && (
          <div className=" w-max absolute p-4 rounded-md top-12 right-0  shadow-lg bg-white flex  flex-col gap-6 z-20">
            {!cartItems ? (
              <div>cart is empty</div>
            ) : (
              <>
              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                <Image
                  src="/pixel.jpg"
                  alt="sss"
                  width={72}
                  height={96}
                  className="object-cover rounded-md"
                />
                <div>
                <div className="flex flex-col  justify-between w-full">
                  <div >
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold ">Product Name</h3>
                      <div className="p-1 bg-gray-50 rounded-sm">$59</div>
                    </div>
                    <div className=" text-sm text-gray-500">
                      available
                    </div>
                  </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">qty.1</span>
                      <span className="text-blue-500">remove</span>
                    </div>
                  </div>
                </div>
                
                </div>
              <div className="flex gap-4">
                <Image
                  src="/pixel.jpg"
                  alt="sss"
                  width={72}
                  height={96}
                  className="object-cover rounded-md"
                />
                <div>
                <div className="flex flex-col  justify-between w-full">
                  <div >
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold ">Product Name</h3>
                      <div className="p-1 bg-gray-50 rounded-sm">$59</div>
                    </div>
                    <div className=" text-sm text-gray-500">
                      available
                    </div>
                  </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">qty.1</span>
                      <span className="text-blue-500">remove</span>
                    </div>
                  </div>
                </div>
                
                </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <div>Subtotal</div>
                    <h1>$59</h1>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 mb-4">Shipping and taxes calculated at checkout</p>
                  <div className="flex justify-between text-sm">
                    <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                    <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavIcons;
