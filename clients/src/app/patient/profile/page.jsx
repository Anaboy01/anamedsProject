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

      <div className="pt-20 px-10">
        <div>
          <p className="text-[24px] text-black">Your profile</p>
          <p className="text-[14px] text-[#888888]">Personalize your profile</p>
        </div>

        <div className='flex items-center justify-between gap-80 w-full'>
          <div>
            <Image
              src={Profile}
              width={162}
              height={189}
              alt={'Muhammed Musa'}
            />
          </div>

          <div className='flex flex-col text-black gap-4'>

            <div className="flex w-full items-center gap-1.5 capitalize">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  className="w-full"
                  required
                  // value={name.firstName}
                  // onChange={(e) => setName({ ...name, firstName: e.target.value })}
                  id="firstName"
                  type="text"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  className="w-full"
                  required
                  // value={name.lastName}
                  // onChange={(e) => setName({ ...name, lastName: e.target.value })}
                  id="lastName"
                  type="text"
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5 capitalize">
              <Label htmlFor="email">email address</Label>
              <Input
                className="w-full"
                required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
              />
            </div>

            <div className="w-full">
              <Button className="w-full" size="lg">
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