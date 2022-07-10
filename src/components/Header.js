import React, { useSelector } from "react-redux";
import { useState } from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";
import Button from "@mui/material/Button";
import { Badge } from "@mui/material";
import { MailIcon } from "@heroicons/react/outline";


function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div className="flex flex-col bg-green-200 w-full md:bg-cover md:h-40 z-20 footer-gradient bg-night-sky bg-no-repeat bg-bottom pb-10 ">
      <nav className="flex basis-0 mt-5 mx-3 ">
      <div class="text-white font-light text-xl my-3 rounded-xl  ">
        Fashion Hub
        {/* title-box h-14 md:h-20 text-sm md:text-xl w-24 md:w-28
      font-bold  font-sans text-white tracking-widest text-center ml-3 p-2 */}
      </div>
          
          {/* brand-name text-xl font-extrabold font-sans text-white tracking-widest ml-3 bg-stone-400 p-2 border border-4 */}
          
        <button 
        className="hamburger"
        onClick={() => setIsNavExpanded (!isNavExpanded)}>
        {/* <MenuIcon></MenuIcon> */}
        </button>
        <div className={ isNavExpanded ? "navigation-menu expanded" : 
        "navigation-menu title-box font-light text-white ml-auto p-0 sm:flex-col rounded-lg" }>
          <ul className="flex p-0 py-4 ">
          <li className="px-4">
            <a href="/home" className="block">Home</a>
          </li>
          <li className="px-4">
            <a href="/Product" className="block">Products</a>
          </li>
          </ul>
        </div>
        
      </nav>
      <div className="mt-10 mx-3 text-white font-semibold text-center space-y-5 ">
      <h1>We are a ecommerce site </h1>
        <Button variant="contained">Contact US</Button>
      </div>
    </div>

    // <header>
    //   <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
    //     <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
    //       <Image
    //       onClick = {() => router.push('/')}
    //         src="https://links.papareact.com/f90"
    //         width={150}
    //         height={40}
    //         objectFit="contain"
    //         className="cursor-pointer"
    //       />
    //     </div>

    //     {/* Custom search */}
    //     <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
    //       <input
    //         className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
    //         type="text"
    //       />
    //       <SearchIcon className="h-12 p-4" />
    //     </div>

    //     {/* Right */}
    //     <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
    //       <div onClick={!session ? signIn : signOut} className="cursor-pointer link">
    //         <p className="font-extrabold md:text-sm">
    //           {session ? `Hello, ${session.user.name}`: "Sign In"}
    //         </p>
    //         <p >Accounts and Lists</p>
    //       </div>
    //       <div className="cursor-pointer link">
    //         <p className="font-extrabold md:text-sm">Returns</p>
    //         <p>&Orders</p>
    //       </div>
    //       <div onClick={() => router.push("/checkout")}className="relative link flex items-center">
    //         <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
    //           {items.length}
    //         </span>

    //         <ShoppingCartIcon className="h-10"/>
    //         <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Bottom nav  */}
    //   <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
    //     <p className="link flex items-center">
    //       <MenuIcon className="h-6 mr-1"/>
    //       All
    //       </p>
    //       <p className="link">Prime Video</p>
    //       <p className="link">Amazon Business</p>
    //       <p className="link">Today's Deals</p>
    //       <p className="link hidden lg:inline-flex">Buy Again</p>
    //       <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
    //       <p className="link hidden lg:inline-flex">Health & Personal</p>
    //   </div>
    // </header>
  );
}

export default Header;
