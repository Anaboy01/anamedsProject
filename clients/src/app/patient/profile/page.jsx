'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import Layout from '@/app/components/Layout/Layout';
import { TbPhotoEdit } from "react-icons/tb";
import Profile from '../../../../public/Frame 79.png';
import { useDispatch, useSelector } from 'react-redux';
import { getPatient, selectPatient, updatePatient } from '@/app/redux/features/patientApi/patientSlice';


const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(Profile); // Default image
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file input change
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);

      // Display the selected image in the profile
      const fileReader = new FileReader();
      fileReader.onload = function (event) {
        setProfileImage(event.target.result);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  // Upload image to Cloudinary
  const uploadImage = async (e) => {
    e.preventDefault();
  
    if (!selectedFile) {
      console.log("No file selected");
      return;
    }
  
    // Convert the image to base64
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = async () => {
      try {
        const res = await axios.post('/api/upload', { image: reader.result });
  
        const imageUrl = res.data.url;
        console.log("Uploaded image URL:", imageUrl);
        setProfileImage(imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };
  
    reader.onerror = () => {
      console.error('Error reading file');
    };
  };
  
  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="pt-20 px-[69px] flex flex-col gap-[26px] w-[100%]">
          <div className='flex flex-col gap-[6px]'>
            <p className="text-[24px] text-black font-montserrat font-medium">Your profile</p>
            <p className="text-[14px] text-[#888888] font-poppins font-light">Personalize your profile</p>
          </div>

          <form className='flex items-center gap-80 w-full font-mavenPro' onSubmit={uploadImage}>
            <div className='InputFieldForImage relative group'>
              <label htmlFor="photo-upload" className="cursor-pointer relative">
                <Image
                  src={profileImage}
                  width={202}
                  height={230}
                  alt="Profile Image"
                  className='rounded-[20px]'
                />
                <div className="absolute inset-0 flex justify-center items-center rounded-[20px] bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <TbPhotoEdit
                    size={30}
                    color='white'
                    className='absolute bottom-[10%] right-[10%]'
                  />
                </div>
              </label>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }} // Hide the input
              />
            </div>

            <div className='flex flex-col text-black gap-4 w-full'>
              <div className="flex w-[50%] items-center gap-1.5 capitalize">
                <div className='w-[50%] flex-col flex gap-[9px]'>
                  <Label htmlFor="firstName" className='font-medium text-[14px] font-mavenPro uppercase'>First Name</Label>
                  <Input
                    className="w-full p-[24px]"
                    required
                    id="firstName"
                    type="text"
                    defaultValue="Muhammed"
                  />
                </div>
                <div className='w-[50%] flex-col flex gap-[9px]'>
                  <Label htmlFor="lastName" className='font-medium text-[14px] font-mavenPro uppercase'>Last Name</Label>
                  <Input
                    className="w-full p-[24px]"
                    required
                    id="lastName"
                    type="text"
                    defaultValue="Musa"
                  />
                </div>
              </div>

              <div className="w-[50%] capitalize flex-col flex gap-[9px]">
                <Label htmlFor="email" className='font-medium text-[14px] font-mavenPro uppercase '>Email Address</Label>
                <Input
                  className="w-full p-[24px] disabled:bg-white"
                  required
                  placeHolder="maryjoe0@gmail.com"
                  id="email"
                  defaultValue="Mula"
                  type="email"
                  disabled
                />
              </div>

              <div className="w-[50%] flex justify-center items-center">
                <Button className="w-[60%] rounded-[20px] font-inter" size="lg" type='submit'>
                  Update Profile
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
