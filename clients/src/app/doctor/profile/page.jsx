'use client'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useState } from 'react'
import {Form} from './form'

const page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const initialState = {
    // firstName: user?.firstName || "",
    // lastName: user?.lastName || "",
    // photo: user?.photo || "",
    // role: user?.role || "",
    firstName: "Joe",
    lastName: "Musa",
    speciality: "Anesthesiology",
    liscenseNo: "ug123456789",
    phoneNo:"+2348067453645",
    email:"maryjoe0@gmail.com"
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
      
      <div className='py-[74px] px-[69px] flex flex-col gap-[35px]'>
        <div className='flex flex-col gap-[6px]'>
            <h6 className='text-[#3D3D3D] font-medium text-[24px] '>Your profile</h6>
            <p className='text-[#888888] font-light text-[14px]'>Personalize your profile</p>
        </div>

       <Form profile={profile}/>
      </div>
    </div>
  )
}

export default page