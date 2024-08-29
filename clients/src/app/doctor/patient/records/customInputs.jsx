"use client";
import { forwardRef } from 'react';

import { FaCalendarAlt } from 'react-icons/fa';

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <div
    onClick={onClick}
    ref={ref}
    className="relative p-2 rounded flex items-center"
  >
    <input
      type="text"
      value={value}
      onClick={onClick}
      className="w-full p-2  bg-transparent border  border-[#B0B0B0]  pr-10"
      placeholder="mm/dd/yyyy"
      ref={ref} 
    />
    <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
  </div>
));

export default CustomInput;
