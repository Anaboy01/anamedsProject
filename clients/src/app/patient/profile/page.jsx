'use client'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useState } from 'react'
import Image from 'next/image'
import Profile from '../../../../public/Frame 79.png'
import { Label } from '@/app/components/ui/label'
import { Input } from '@/app/components/ui/input'
import { Button } from '@/app/components/ui/button'
import Layout from '@/app/components/Layout/Layout'
import { TbPhotoEdit } from "react-icons/tb";

const page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const initialState = {
    firstName: "Muhammed",
    lastName: "Musa",
    photo: "",
    role: "",
  };

  const [profile, setProfile] = useState(initialState);

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="pt-20 px-[69px] flex flex-col gap-[26px] w-[100%]">
          <div className='flex flex-col gap-[6px]'>
            <p className="text-[24px] text-black font-montserrat font-medium">Your profile</p>
            <p className="text-[14px] text-[#888888] font-poppins font-light">Personalize your profile</p>
          </div>

          <form className='flex items-center gap-80 w-full font-mavenPro'>
            <div className='InputFieldForImage relative group'>
              <label htmlFor="photo-upload" className="cursor-pointer relative">
                <Image
                  src={Profile}
                  width={202}
                  height={230}
                  alt={'Muhammed Musa'}
                  className='rounded-[20px]'
                />
                <div className="absolute inset-0 flex justify-center items-center rounded-[20px] bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className='relative w-full h-full p-[20px] rounded-[20px]'>
                    
                    <TbPhotoEdit
                      size={30}
                      color='white'
                      className='absolute bottom-[10%] right-[10%] '
                    />
                  </div>
                </div>
              </label>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                style={{ display: 'none' }} // Hide the input
              />
            </div>

            <div className='flex flex-col text-black gap-4 w-full'>
              <div className="flex w-[50%] items-center gap-1.5 capitalize">
                <div className='w-[50%] flex-col flex gap-[9px] '>
                  <Label htmlFor="firstName" className='font-medium text-[14px] font-mavenPro uppercase'>First Name</Label>
                  <Input
                    className="w-full p-[24px]"
                    required
                    id="firstName"
                    type="text"
                  />
                </div>
                <div className='w-[50%] flex-col flex gap-[9px] '>
                  <Label htmlFor="lastName" className='font-medium text-[14px] font-mavenPro uppercase'>Last Name</Label>
                  <Input
                    className="w-full p-[24px]"
                    required
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
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default page;
