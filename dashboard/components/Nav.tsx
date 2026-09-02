import React from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Nav = () => {
  return (
    <div className="w-full shrink-0 bg-white h-22 shadow-lg px-5 flex items-center shadow-black/5">
      <HiOutlineMenuAlt1  className="text-2xl text-[#071a3d] cursor-pointer"/>
      <h1 className="text-xl font-semibold font-poppins ml-5 text-black">Dashboard</h1>
    </div>
  )
}

export default Nav