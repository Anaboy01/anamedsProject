"use client";
import Image from "next/image";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import { useState } from "react";
import result from "../../../../../public/Frame 79 (1).png";
import { useSelector } from "react-redux";
import Layout from "@/app/components/Layout/Layout";

const Page = ({ params }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Destructure the `id` from `params`
  const { id } = params;

  // Accessing the patient files from Redux
  const patient = useSelector((state) => state.patient);
  // console.log(patient);

  // Find the specific file by ID
  const fileDetails = patient?.patient?.patient_files?.find(
    (file) => file.id === id
  );

  const handleClearDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  if (!fileDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen text-[#3D3D3D] montserrat-font">
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
          .montserrat-font {
            font-family: "Montserrat", sans-serif;
          }
        `}</style>

        <div className="ml-[60px] flex flex-col gap-5">
          <div>
            <h1 className="text-[24px] font-medium uppercase">File Name</h1>
            <h3 className="text-[14px] text-[#888888] font-medium mb-1 leading-[21.94px]">
              {fileDetails.fileName}
            </h3>
          </div>

          <div>
            <h3 className="text-[18px] font-medium mb-1 leading-[21.94px]">
              Hospital name:{" "}
              <span className="font-Poppins text-[16px] font-[400] leading-[24px] text-[#6D6D6D]">
                {fileDetails.hospitalName}
              </span>
            </h3>
            <h3 className="text-[18px] font-medium mb-1 leading-[21.94px]">
              Doctor&apos;s name:{" "}
              <span className="font-Poppins text-[16px] font-[400] leading-[24px] text-[#6D6D6D]">
                Dr. {fileDetails.doctorName}
              </span>
            </h3>

            <h1 className="text-[24px] font-[800px] mt-2">Files</h1>
          </div>

          <div className="test overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-left">
                    Tests
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Results
                  </th>
                </tr>
              </thead>
              <tbody>
                {fileDetails.tests.map((test) => (
                  <tr key={test.id}>
                    <td className="border border-gray-300 p-2">{test.test}</td>
                    <td className="border border-gray-300 p-2">
                      {test.testResults}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-[#888888]">
            <h1 className="text-[24px] text-black font-medium">Prescription</h1>

            <div>
              {fileDetails.prescriptions.map((test) => (
                <p key={test}>{test}</p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-[24px] font-medium">Diagnosis</h1>
            <p>{fileDetails.diagnosis}</p>
          </div>
          <div className="text-[#888888]">
            <h1 className="text-[24px] text-black font-medium">Note</h1>

            <p className="text-[16px] font-[400]">{fileDetails.note}</p>
          </div>

          <div>
            <div className="flex gap-4">
              {fileDetails.images.map((image) => (
                <Image
                  key={image}
                  src={image}
                  width={311}
                  height={189}
                  alt="An image"
                />
              ))}
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
    </Layout>
  );
};

export default Page;
