"use client";
import { signIn } from 'next-auth/react';
import { Alert } from '../../components/ui/alert';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import GoogleButton from '../../components/GoogleButton';

export const Form = ({ profile }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic without using hooks or router here
    console.log('Form submitted');
  };

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-[20px] w-full font-mavenPro font-medium'>
      <div className='flex items-center gap-[15px] w-[70%]'>
        <div className='flex flex-col gap-[9px] w-[50%]'>
          <Label htmlFor="fullName" className='text-[#454545] text-[14px] font-medium uppercase'>Full Name</Label>
          <Input type="text" name="fullName" id="fullName" className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[24px] px-[20px]' />
        </div>
        <div className='flex flex-col gap-[9px] w-[50%]'>
          <Label htmlFor="email" className='text-[#454545] text-[14px] font-medium uppercase'>Email</Label>
          <Input type="email" name="email" id="email" className='outline-[1px] outline-[#2AA0CD] text-[14px] text-[#1C1C1CBF] rounded-[8px] border-[1px] border-[#00000066] font-normal py-[24px] px-[20px]' />
        </div>
      </div>

      {/* Additional fields omitted for brevity */}

      <div className='flex items-center justify-center w-[70%]'>
        <Button type="submit" className='bg-[#2AA0CD] p-[14px] rounded-[20px] w-[50%] text-[16px] font-inter font-normal'>Register</Button>
      </div>
    </form>
  );
};
