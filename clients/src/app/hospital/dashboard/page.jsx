"use client";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import React, { useState } from "react";
import { Form } from "./form";
import Link from "next/link";
// import { BsPersonPlus } from "react-icons/bs";
import { LuUserPlus } from "react-icons/lu";

const page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const initialState = {
    // firstName: user?.firstName || "",
    // lastName: user?.lastName || "",
    // photo: user?.photo || "",
    // role: user?.role || "",
    name: "Adelum Hopitals",
    description: "Healing Things",
    website: "Adelum.com",
    state: "Ogun State",
    city: "Otah",
    country: "Nigeria",
    phoneNo: "+2348067453645",
    email: "Adelum@gmail.com",
  };

  const [profile, setProfile] = useState(initialState);
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar
        // isSidebarOpen={isSidebarOpen}
        // toggleSidebar={toggleSidebar}
        profile={profile}
        // router={location}
      />

      <div className="py-[74px] px-[69px] flex flex-col gap-[35px] w-full">
        <div className="flex flex-col gap-[6px]">
          <h6 className="text-[#3D3D3D] font-medium text-[24px] font-montserrat">
            Hi {profile.name}
          </h6>
          <p className="text-[#888888] font-light text-[14px] font-poppins">
            Welcome to your dashboard
          </p>
        </div>

        <Form profile={profile} />

        <div className="flex flex-row w-full items-center gap-[36px] pt-[47px] border-t-[1px] border-t-[#000000] mt-[48px]">
          <Link
            href="#"
            className="w-[229px] h-[101px]  rounded-[20px] border-[2px] border-[#BDBDBD] cursor-pointer"
          >
            <div className=" flex items-center justify-center h-[48px] bg-[#F9F6F9] rounded-tl-[20px] rounded-tr-[20px] ">
              <LuUserPlus className="h-[24px] w-[24px] text-[#374957]" />
            </div>

            <div className="text-center h-[49px] bg-[#C2E5F5] text-[#1C1C1C] font-montserrat py-[14px] font-normal text-[15px]  rounded-br-[20px] rounded-bl-[20px]">
              Register Doctor
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
