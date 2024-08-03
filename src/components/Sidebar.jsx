import React from 'react';

import { GoHomeFill } from 'react-icons/go';
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { BiSolidUserAccount } from "react-icons/bi";
import { RiHistoryLine } from "react-icons/ri";
import { RiPlayList2Fill } from "react-icons/ri";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import { IoBagHandleSharp } from "react-icons/io5";
import { PiMusicNoteLight } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { HiStatusOnline } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiTrophy } from "react-icons/bi";
import { LiaLightbulb } from "react-icons/lia";
import { MdDryCleaning } from "react-icons/md";
import { MdPodcasts } from "react-icons/md";
import { NavLink } from "react-router-dom"


const Sidebar = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? " hidden ": " block " } w-56 bg-black fixed h-full  py-2 text-white hover:overflow-y-auto `}>
      <div className="flex item-center  ">
      <FaBars className='test-white me-4 cursor-pointer ml-4 mt-2' 
       onClick={() => setSidebarToggle(!sidebarToggle)}/>
       
        <span className=" size-8 flex  items-center  ml-1 text-l tracking-tighter ">
           <img src="images/yt-logo-mobile.png "></img>YouTube 
        </span> 
      </div>
      
      <ul className="mt-3 text-white ">
        <li className="mb-2 rounded-l ">
        <NavLink 
            to="/" 
            className={({ isActive }) => 
              `${isActive ? "bg-[#303030]" : ""} py-2 px-4 flex items-center hover:bg-[#303030] rounded-l`
            }>
            <GoHomeFill className="w-6 h-6 mr-4" />
            Home 
          </NavLink>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className=" flex items-center"></a>
          <SiYoutubeshorts className="w-6 h-6 mr-4 ml-3" />
            Shorts
          
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className=" flex items-center"></a>
          <MdSubscriptions  className="w-6 h-6 mr-4 ml-3" />
            Subscriptions
          
        </li>
        <hr/>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className=" flex items-center"></a>
          <BiSolidUserAccount className="w-6 h-6 mr-4 ml-3" />
            Your channel
          
        </li>
        
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className="flex items-center"></a>
          <RiHistoryLine  className=" w-6 h-6 mr-4 ml-3" />
            History
          
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className=" flex items-center"></a>
          <RiPlayList2Fill  className="w-6 h-6 mr-4 ml-3" />
        Playlists
         
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className="flex items-center"></a>
          <RiVideoLine  className="w-6 h-6 mr-4 ml-3" />
            Your videos
        
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className=" flex items-center"></a>
          <MdOutlineWatchLater  className="w-6 h-6 mr-4 ml-3" />
            Watch Later
          
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className="flex items-center"></a>
          <AiOutlineLike  className="w-6 h-6 mr-4 ml-3" />
            Liked Videos
         
        </li>
        <hr/>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className=" flex items-center"></a>
          <BsFire  className="w-6 h-6 mr-4 ml-3" />
            Trending
         
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className=" flex items-center"></a>
          <IoBagHandleSharp  className="w-6 h-6 mr-4 ml-3" />
            Shoping
         
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className=" flex items-center"></a>
          <PiMusicNoteLight  className="w-6 h-6 mr-4 ml-3" />
            Music
          
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className=" flex items-center"></a>
          <BiMoviePlay  className="w-6 h-6 mr-4 ml-3" />
            Movies
        
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className=" flex items-center"></a>
          <HiStatusOnline className="w-6 h-6 mr-4 ml-3" />
            Live
          
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className="flex items-center"></a>
          <SiYoutubegaming
          className="w-6 h-6 mr-4 ml-3" />
            Gaming
          
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className=" flex items-center"></a>
          <IoNewspaperOutline  className="w-6 h-6 mr-4 ml-3" />
            News 
          
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className=" flex items-center"></a>
          <BiTrophy 
          className="w-6 h-6 mr-4 ml-3" />
            Sports
          
        </li>
       
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className="flex items-center"></a>
          <LiaLightbulb 

          className="w-6 h-6 mr-4 ml-3" />
            Cources
        
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className=" flex items-center"></a>
          <MdDryCleaning 
          className="w-6 h-6 mr-4 ml-3" />
           Fashion & Beauty
         
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-[#303030] py-2 flex items-center">
          <a href="" className=" flex items-center"></a>
          <MdPodcasts  className="w-6 h-6 mr-4 ml-3" />
            Podcasts
        </li>
        <hr/>
      </ul>
    </div>
  );
};

export default Sidebar;
