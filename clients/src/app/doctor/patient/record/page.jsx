"use client";
import Image from "next/image";
import Sidebar from "../../Sidebar/Sidebar";
import { useState } from "react";
import result from '../../../../../public/Frame 79 (1).png'

const Page = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleClearDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen text-[#3D3D3D] montserrat-font">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
        .montserrat-font {
          font-family: "Montserrat", sans-serif;
        }
      `}</style>

      <Sidebar />
      <div className="mt-[150px] ml-[60px] flex flex-col gap-5">
        <div>
          <h1 className="text-[24px] font-medium">
            File name
          </h1>
          <h3 className="text-[14px] text-[#888888] font-medium mb-1 leading-[21.94px]">
            Urinary tract infection
          </h3>
        </div>

        <div>

          <h3 className="text-[18px] font-medium mb-1 leading-[21.94px]">
            Hospital name:{" "}
            <span className="font-Poppins text-[16px] font-[400] leading-[24px] text-[#6D6D6D]">
              John peters hospital
            </span>
          </h3>
          <h3 className="text-[18px] font-medium mb-1 leading-[21.94px]">
            Doctor&apos;s name:{" "}
            <span className="font-Poppins text-[16px] font-[400] leading-[24px] text-[#6D6D6D]">
              Dr Dave
            </span>
          </h3>

          <h1 className="text-[24px] font-[800px] mt-2">
            Files
          </h1>
          <div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="">
                <th className="border border-gray-300 p-2 text-left">Tests</th>
                <th className="border border-gray-300 p-2 text-left">Results</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Test 1</td>
                <td className="border border-gray-300 p-2">Positive</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Test 2</td>
                <td className="border border-gray-300 p-2">Negative</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-[#888888]">
          <h1 className="text-[24px] text-black font-medium">Prescription</h1>

          <p className="text-[16px] font-[400]">Paracetamol</p>
          <p className="text-[16px] font-[400]">Cough tablets</p>
        </div>
        <div>
          <h1 className="text-[24px] font-medium">Diagnosis</h1>
        </div>
        <div className="text-[#888888]">
          <h1 className="text-[24px] text-black font-medium">Note</h1>

          <p className="text-[16px] font-[400]">Paracetamol</p>
        </div>

        <div>
          <div className="flex gap-4">
            <Image
              src={result}
              width={311}
              height={189}
              alt="result"
            />
            <Image
              src={result}
              width={311}
              height={189}
              alt="result"
            />
          </div>
          <div className=" w-[311px] h-[246px] mt-4 ">
            <video controls className="rounded-md">
              <source src="/path/to/your/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
