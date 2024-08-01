
import React from 'react'
import { FaBars} from "react-icons/fa";

import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
const Navbar = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <div className='bg-black items-center text-white py-3 flex justify-between h-14 '>
      <div className='flex items-center h-5 text'>
      <FaBars className='test-white me-4 cursor-pointer ml-4 mt-2' 
        onClick={() => setSidebarToggle(!sidebarToggle)}/>
        <span className=" size-8 flex text-white items-center  ml-1 text-l tracking-tighter ">
           <img src="images/yt-logo-mobile.png "></img>YouTube 
        </span> 
      </div>
      <div className='flex items-center group'>
        <div className=' flex h-8 md:h-10 md:ml-5 md:pl-5 hover:border-2 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0'>
          <div className='w-10 items-centr justify-center hidden group-focus-within:md:flex'>
          <IoIosSearch  className='text-white text-xl  mt-2 '/>
          </div>
          <input type='text' className="bg-transparent  outline-none text-white  md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"/>
         
        </div>
        <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1] ">
          <IoIosSearch className='ml-4 items-center text-3xl'/>
          </button>
          </div>
          <div className='flex items-center'>
            <div className="hidden md:flex">
              <div className="flex items-center justfy-center  h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <RiVideoAddLine className='text-white text-xl cursor-pointer ml-3' /> 
              </div>
              <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <CiBellOn className='text-white text-xl cursor-pointer ' />
              </div>
              <div className="flex h-8 w-8 overflow-hidden rounded-full mt-2  md:ml-4">
                <img src='images/Premium Photo _ Astronaut illustration logo icon.jpeg'/>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Navbar