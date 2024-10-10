'use client'
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import useRedirectLoggedPatient from "@/app/customHook/useRedirectPatient";
import Layout from "@/app/components/Layout/Layout";



export default function page() {
  // useRedirectLoggedPatient('/patient/login')
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

    <Layout>
         <div className="flex flex-col md:flex-row min-h-screen">
      {/* <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        profile={profile}
      // router={location}
      /> */}
      <div className="py-10 px-8 flex flex-col gap-x-10">
        <div>
          <p className="text-[24px] text-black font-medium">Hi Mary!</p>
          <p className="text-[#888888] text-lg">Welcome to your dashboard</p>
        </div>

        <div className="mt-10">
          <p className="text-[16px] text-black font-medium">Welcome to your dashboard</p>
          <ul className="text-[14px] list-disc text-[#888888]">
            <li>New york city hospital</li>
            <li>New Amstadarm hospital</li>
            <li>Enugu state hospital</li>
            <li>Paris international hospital</li>
          </ul>
        </div>
      </div>
    </div>
    </Layout>
   
  )
}