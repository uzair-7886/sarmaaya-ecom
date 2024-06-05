"use client";
import Link from "next/link";
import { Playfair } from "next/font/google";
import { cn } from "../../lib";

const pf = Playfair({ subsets: ["latin"] });

const Navbar = () => {
  const categories = [
    "Electronics",
    "Men's Fashion",
    "Women's Fashion",
    "Jewelery",
  ];
  return (
    <div>
      <div className="flex flex-row p-5 justify-between items-center">
        <div>
          <h1 className={cn("font-bold text-2xl", pf.className)}>Ecommerce</h1>
        </div>
        <div className="flex flex-row gap-5">
          {categories.map((cat) => (
            <Link href="#" className="hover:font-bold">{cat}</Link>
          ))}
        </div>

        <div className="flex flex-row gap-20">
          <div className="flex justify-between items-center rounded-xl bg-white border-2">
            <input
              type="text"
              placeholder="Search"
              className=" p-2 bg-transparent placeholder-center outline-none  w-32 md:w-48 "
            />
            <img
              src="search.png"
              alt=""
              className="w-5 mr-2 cursor-pointer hover:scale-105"
            />
            {/* <div className="w-0 ml-2 bg-black">.</div> */}
          </div>
          <div className="w-20 bg-black rounded-xl flex flex-row justify-center items-center gap-2">
<div className="text-white">
    0
</div>
<img src="cart.png" alt="" className="w-5 h-5 "/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
