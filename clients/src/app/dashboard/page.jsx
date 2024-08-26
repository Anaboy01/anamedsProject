'use client'
import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

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
      
    </div>
  )
}