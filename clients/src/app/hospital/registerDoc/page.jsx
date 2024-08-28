"use client";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import React, { useState } from "react";
import { Form } from "./form";
import Link from "next/link";
import { BsPersonPlus } from "react-icons/bs";

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
          <h6 className="text-[#3D3D3D] font-medium text-[24px] ">
          Register doctor
          </h6>
          
        </div>

        <Form profile={profile} />

      </div>
    </div>
  );
};

export default page;
