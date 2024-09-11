"use client";
import Sidebar from "../../components/Sidebar/Sidebar";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import CustomInput from "./customInputs"; // Adjust the import path as needed

const Page = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleClearDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen text-[#3D3D3D] font-montserrat ">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
        .montserrat-font {
          font-family: "Montserrat", sans-serif;
        }
      `}</style>

      <Sidebar />
      <div className="mt-[150px] ml-[60px] flex flex-col gap-10">
        <div>
          <h1 className="text-[24px] font-[800px] mb-5 leading-[29.26px]">
            Your records
          </h1>
          <h3 className="text-[18px] font-[500] mb-1 leading-[21.94px]">
            First name:{" "}
            <span className="font-Poppins text-[16px] font-[400] leading-[24px] text-[#6D6D6D]">
              Mary
            </span>
          </h3>
          <h3 className="text-[18px] font-[500] mb-1 leading-[21.94px]">
            Last name:{" "}
            <span className="font-Poppins text-[16px] font-[400] leading-[24px] text-[#6D6D6D]">
              Joe
            </span>
          </h3>
        </div>

        <div>
          <h1 className="text-[24px] font-[800px] mb-5 leading-[29.26px]">
            Files
          </h1>

          <div>
            <div className="flex gap-8">
              <div className="flex items-center gap-1">
                <label className="">Start Date:</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  customInput={<CustomInput />}
                />
              </div>

              <div className="flex items-center gap-1">
                <label className="">End Date:</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  customInput={<CustomInput />}
                />
              </div>

              <div className="h-[44px] w-[138px] border bg-[#2AA0CD] rounded-lg text-[#f5f5f5] flex items-center justify-center">
                <button
                  onClick={handleClearDates}
                  className="px-4 py-2 w-full rounded text-center"
                >
                  Clear Dates
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse shadow-lg backdrop-blur-md bg-white/30 rounded-lg">
            <thead>
              <tr className="bg-[#2AA0CD] text-white">
                <th className="p-2 text-left rounded-tl-lg">File name</th>
                <th className="p-2 text-left">ID</th>
                <th className="p-2 text-left rounded-tr-lg">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="cursor-pointer odd:bg-[#2AA0CD]/30 even:bg-[#2AA0CD]/20 hover:bg-[#2AA0CD]/40 transition-all">
                <td className="p-2">Covid</td>
                <td className="p-2">1</td>
                <td className="p-2">10/1/2023</td>
              </tr>
              <tr className="cursor-pointer odd:bg-[#2AA0CD]/30 even:bg-[#2AA0CD]/20 hover:bg-[#2AA0CD]/40 transition-all">
                <td className="p-2">2nd trimester</td>
                <td className="p-2">2</td>
                <td className="p-2">10/2/2023</td>
              </tr>
              <tr className="cursor-pointer odd:bg-[#2AA0CD]/30 even:bg-[#2AA0CD]/20 hover:bg-[#2AA0CD]/40 transition-all">
                <td className="p-2">Burn</td>
                <td className="p-2">3</td>
                <td className="p-2">10/3/2023</td>
              </tr>
              <tr className="cursor-pointer odd:bg-[#2AA0CD]/30 even:bg-[#2AA0CD]/20 hover:bg-[#2AA0CD]/40 transition-all">
                <td className="p-2">Pregnancy</td>
                <td className="p-2">4</td>
                <td className="p-2">10/4/2023</td>
              </tr>
              <tr className="cursor-pointer odd:bg-[#2AA0CD]/30 even:bg-[#2AA0CD]/20 hover:bg-[#2AA0CD]/40 transition-all">
                <td className="p-2">Urinary tract infection</td>
                <td className="p-2">5</td>
                <td className="p-2">10/5/2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
