'use client'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useState } from 'react'
import Image from 'next/image'
import Profile from '../../../../public/Frame 79.png'
import { Label } from '@/app/components/ui/label'
import { Input } from '@/app/components/ui/input'
import { Button } from '@/app/components/ui/button'

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

      <div className="pt-20 px-[69px] flex flex-col gap-[26px] w-[80%]">
        <div className='flex flex-col gap-[6px]'>
          <p className="text-[24px] text-black font-montserrat font-medium">Your profile</p>
          <p className="text-[14px] text-[#888888] font-poppins font-light">Personalize your profile</p>
        </div>

        <div className='flex items-center gap-80 w-full font-mavenPro'>
          <div>
            <Image
              src={Profile}
              width={162}
              height={189}
              alt={'Muhammed Musa'}
            />
          </div>

          <div className='flex flex-col text-black gap-4 w-full'>

            <div className="flex w-[50%] items-center gap-1.5 capitalize">
              <div className='w-[50%] flex-col flex gap-[9px] '>
                <Label htmlFor="firstName" className='font-medium text-[14px] font-mavenPro uppercase'>First Name</Label>
                <Input
                  className="w-full p-[24px]"
                  required
                  // value={name.firstName}
                  // onChange={(e) => setName({ ...name, firstName: e.target.value })}
                  id="firstName"
                  type="text"
                />
              </div>
              <div className='w-[50%] flex-col flex gap-[9px] '>
                <Label htmlFor="lastName" className='font-medium text-[14px] font-mavenPro uppercase'>Last Name</Label>
                <Input
                  className="w-full p-[24px]"
                  required
                  // value={name.lastName}
                  // onChange={(e) => setName({ ...name, lastName: e.target.value })}
                  id="lastName"
                  type="text"
                />
              </div>
            </div>
            <div className="w-[50%] capitalize flex-col flex gap-[9px]">
              <Label htmlFor="email" className='font-medium text-[14px] font-mavenPro uppercase '>email address</Label>
              <Input
                className="w-full p-[24px]"
                required
                placeHolder="maryjoe0@gmail.com"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
              />
            </div>

            <div className="w-[50%] flex justify-center items-center">
              <Button className="w-[60%] rounded-[20px] font-inter" size="lg">
                Update profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page