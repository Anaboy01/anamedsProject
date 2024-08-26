'use client'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useState } from 'react'

const page = () => {
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
  return (
   
       <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar
        // isSidebarOpen={isSidebarOpen}
        // toggleSidebar={toggleSidebar}
        profile={profile}
        // router={location}
      />
      
      <div>
        page
      </div>
    </div>
  )
}

export default page