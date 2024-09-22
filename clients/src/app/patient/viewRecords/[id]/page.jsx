"use client";
import Image from "next/image";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import result from "../../../../../public/Frame 79 (1).png";
import { useDispatch, useSelector } from "react-redux";
import Layout from "@/app/components/Layout/Layout";
import { getPatientFiles } from "@/app/redux/features/patientApi/patientSlice";
import useRedirectLoggedPatient from "@/app/customHook/useRedirectPatient";



const Page = ({ params }) => {
  useRedirectLoggedPatient('/patient/login')
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const dispatch = useDispatch();

  // Destructure the `id` from `params`
  const { id } = params;

  // Accessing the patient files from Redux
  const { isLoading, isLoggedIn, isSuccess, message, patient } = useSelector(
    (state) => state.patient
  );

  useEffect(() => {
    dispatch(getPatientFiles());
  }, [dispatch]);

  useEffect(() => {
    if (patient) {
      console.log("Patient files:", patient.patient_files);
      console.log("First name:", patient.name?.firstName);
      console.log("Last name:", patient.name?.lastName);
    }
  }, [patient]);

  console.log(patient)

  // Find the specific file by ID
  const fileDetails = patient?.patient_files?.find(
    (file) => file.id === id
  );


  console.log(fileDetails)
  const handleClearDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  if (!fileDetails || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen text-[#3D3D3D]  ">

        <div className="ml-[60px] flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[6px]">
            <h1 className="text-[24px] font-montserrat font-medium uppercase">File Name</h1>
            <h3 className="text-[14px] font-poppins font-light text-[#888888] mb-1 leading-[21.94px] capitalize">
              {fileDetails.fileName}
            </h3>
          </div>

          <div className="flex flex-col gap-[17px]">
            <h3 className="text-[18px] font-medium mb-1 leading-[21.94px] font-montserrat">
              Hospital name:{" "}
              <span className="font-Poppins text-[16px] font-[400] leading-[24px] text-[#6D6D6D] capitalize">
                {fileDetails.hospitalName}
              </span>
            </h3>
            <h3 className="text-[18px] font-medium mb-1 leading-[21.94px] font-montserrat">
              Doctor&apos;s name:{" "}
              <span className="font-Poppins text-[16px] font-[400] leading-[24px] text-[#6D6D6D] normal-case">
                Dr. {fileDetails.doctorName}
              </span>
            </h3>

            
          </div>

          <div className="test overflow-x-auto flex flex-col gap-[15px]">
          <h1 className="text-[24px] font-montserrat font-medium">Files</h1>
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 font-montserrat font-medium text-[24px] text-left">Tests</th>
                  <th className="border border-gray-300 p-2 font-montserrat font-medium text-[24px] text-left">
                    Results
                  </th>
                </tr>
              </thead>
              <tbody>
                {fileDetails.tests.map((test) => (
                  <tr key={test.id}>
                    <td className="border border-gray-300 font-montserrat font-normal text-[18px] p-2">{test.test}</td>
                    <td className="border border-gray-300 font-montserrat font-normal text-[18px] p-2">
                      {test.testResults}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[24px] font-montserrat font-medium">Prescription</h1>
            <div className="flex flex-col gap-[10px]">
              {fileDetails.prescriptions.map((prescription) => (
                <p className="text-[#888888] font-poppins font-normal text-[16px] capitalize " key={prescription}>{prescription}</p>
              ))}
            </div>
          </div>

          <div lassName="flex flex-col gap-[10px]">
            <h1 className="text-[24px] font-montserrat font-medium">Diagnosis</h1>
            <p className="text-[#888888] font-poppins font-normal text-[16px] ">{fileDetails.diagnosis}</p>
          </div>

          <div lassName="flex flex-col gap-[10px]">
            <h1 className="text-[24px] font-montserrat font-medium">Note</h1>
            <p className="text-[#888888] font-poppins font-normal text-[16px] ">{fileDetails.note}</p>
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
                <source src={fileDetails.videoUrl} type="video/mp4" />
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
