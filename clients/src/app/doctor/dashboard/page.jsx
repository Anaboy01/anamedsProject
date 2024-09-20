'use client'
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import { BiPlusMedical } from "react-icons/bi";
import { BsFileMedicalFill } from "react-icons/bs";
import { BsJournalMedical } from "react-icons/bs";
import Link from "next/link";

export default function page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const initialState = {
    // firstName: user?.firstName || "",
    // lastName: user?.lastName || "",
    // photo: user?.photo || "",
    // role: user?.role || "",
    firstName: "Muhammed",
    lastName: "Musa",
    photo: "",
    role: "",
  };

  const [profile, setProfile] = useState(initialState);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        profile={profile}
        // router={location}
      />

      <div className=" px-[69px] text-black pt-[74px] flex flex-col  gap-[80px]">

      <h6 className="text-[#3D3D3D] font-medium text-2xl ">Welcome to your Dashboard Dr. Dave</h6>

      <div className="flex flex-row w-full items-center gap-[36px]">
        <Link href="#" className="w-[229px] h-[101px]  rounded-[20px] border-[2px] border-[#BDBDBD] cursor-pointer">
            
            <div className=" flex items-center justify-center h-[48px] bg-[#F9F6F9] rounded-tl-[20px] rounded-tr-[20px] ">
            <BiPlusMedical  className="h-[24px] w-[24px] text-[#374957]" />
            </div>
          

            <div className="text-center h-[49px] bg-[#C2E5F5] py-[14px] font-normal text-[15px]  rounded-br-[20px] rounded-bl-[20px]">
            Create new record
            </div>
        </Link>
        <Link href="#" className="w-[229px] h-[101px]  rounded-[20px] border-[2px] border-[#BDBDBD] cursor-pointer">

            <div className=" flex items-center justify-center h-[48px] bg-[#F9F6F9] rounded-tl-[20px] rounded-tr-[20px]">
            <BsJournalMedical  className="h-[24px] w-[24px] text-[#374957]" />
            </div>
          

            <div className="text-center h-[49px] bg-[#EBDFEB] py-[14px] font-normal text-[15px]  rounded-br-[20px] rounded-bl-[20px]">
            Create new record
            </div>
        </Link>
        <Link href="#" className="w-[229px] h-[101px]  rounded-[20px] border-[2px] border-[#BDBDBD] cursor-pointer">

            <div className=" flex items-center justify-center h-[48px] bg-[#F9F6F9] rounded-tl-[20px] rounded-tr-[20px]">
            <BsFileMedicalFill  className="h-[24px] w-[24px] text-[#374957]" />
            </div>
          

            <div className="text-center h-[49px] bg-[#EBDFEB] py-[14px] font-normal text-[15px]  rounded-br-[20px] rounded-bl-[20px]">
            Create new record
            </div>
        </Link>
      </div>


        
      </div>
      
    </div>
  )
}