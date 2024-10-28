"use client"
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
    if(isLoggedIn)
      router.push("/Login")

    setIsProfileOpen((prev) => !prev);

  }
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
      {isProfileOpen &&(
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
      <Image
        src="/cart.png"
        alt=""
        width={24}
        height={24}
        className="cursor-pointer"
      />
    </div>
  );
};

export default NavIcons;
