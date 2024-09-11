"use client";
import { forwardRef } from 'react';

import { FaCalendarAlt } from 'react-icons/fa';

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <div
    onClick={onClick}
    ref={ref}
    className="relative  rounded-lg flex items-center  "
  >
    <input
      type="text"
      value={value}
      onClick={onClick}
      className="w-full p-2 bg-transparent pr-10 border border-[#B0B0B0] border-r-0 rounded-l-lg h-[44px]"
      placeholder="mm/dd/yyyy"
      ref={ref} 
    />
    <div className='bg-[#2AA0CD] h-[44px] flex items-center justify-center rounded-r-lg w-[44px] p-2'>
    <FaCalendarAlt
      className=" text-[#F5F5F5]   rounded"
    />
    </div>
  </div>
));

export default CustomInput;
