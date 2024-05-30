import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around text-white items-center p-4 max-w-screen-2xl mx-auto bg-[#25311c]">
      <div> regen.network </div>
      <div className="text-white flex gap-4">
        <Link href="/">Products</Link>
        <Link href="/">Solutions</Link>
        <Link href="/">Customers</Link>
        <Link href="/">Resources</Link>
        <Link href="/">Pricing</Link>
      </div>
      <div className="btns flex gap-2">
        <button className="border bg-transparent font-bold px-4 py-2">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
