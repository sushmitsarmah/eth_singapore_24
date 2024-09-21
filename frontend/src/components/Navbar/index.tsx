import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full py-6 flex justify-between items-center bg-black border-b border-gray-700 shadow-md sticky top-0 z-50">
      
      {/* Moraq Leagues Logo */}
      <Link href="/" passHref>
        <div className="text-3xl font-bold text-[#71FF4C] hover:text-white transition duration-300 cursor-pointer ml-4">
          Moraq Leagues
        </div>
      </Link>

      {/* Navbar Items */}
      <div className="flex items-center space-x-6 mr-4">
        <Link href="/dashboard" passHref>
          <div className="text-lg text-[#c8cacd] hover:text-[#71FF4C] transition duration-300 cursor-pointer">
            Dashboard
          </div>
        </Link>

        <Link href="/games" passHref>
          <div className="text-lg text-[#c8cacd] hover:text-[#71FF4C] transition duration-300 cursor-pointer">
            Games
          </div>
        </Link>

        <Link href="/create" passHref>
          <div className="text-lg text-[#c8cacd] hover:text-[#71FF4C] transition duration-300 cursor-pointer">
            Earn
          </div>
        </Link>

        <Link href="/mybets" passHref>
          <div className="text-lg text-[#c8cacd] hover:text-[#71FF4C] transition duration-300 cursor-pointer">
            Profile
          </div>
        </Link>

        {/* Profile Icon (Optional) */}
        {/* <Link href="/profile" passHref>
          <CgProfile className="text-3xl text-[#8a939b] hover:text-[#71FF4C] transition duration-300 cursor-pointer" />
        </Link> */}

        {/* Wallet Connect Button */}
        <w3m-button />
      </div>
    </div>
  );
};

export default Navbar;
