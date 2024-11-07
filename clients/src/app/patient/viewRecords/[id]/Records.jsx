"use client";
import Image from "next/image";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "@/app/components/Layout/Layout";
import { getPatientFiles } from "@/app/redux/features/patientApi/patientSlice";
import useRedirectLoggedPatient from "@/app/customHook/useRedirectPatient";

const Records = ({id}) => {
   // Redirects if user is not logged in
   useRedirectLoggedPatient('/patient/login');

   // State management for start and end dates
   const [startDate, setStartDate] = useState(null);
   const [endDate, setEndDate] = useState(null);
 
   // Dispatch and selector setup for Redux
   const dispatch = useDispatch();
   const { isLoading, patient } = useSelector((state) => state.patient);
 

 
   useEffect(() => {
     // Fetch patient files on component mount
     dispatch(getPatientFiles());
   }, [dispatch]);
 
   // Find the specific file by `id` after patient data is fetched
   const fileDetails = patient?.patient_files?.find((file) => file.id === id);
 
   // Loading or error message
   if (isLoading) return <div>Loading...</div>;
   if (!fileDetails) return <div>File not found</div>;
 
   return (
     <Layout>
       <div className="flex flex-col md:flex-row min-h-screen text-[#3D3D3D]">
 
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
                   <th className="border border-gray-300 p-2 font-montserrat font-medium text-[24px] text-left">Results</th>
                 </tr>
               </thead>
               <tbody>
                 {fileDetails.tests.map((test) => (
                   <tr key={test.id}>
                     <td className="border border-gray-300 font-montserrat font-normal text-[18px] p-2">{test.test}</td>
                     <td className="border border-gray-300 font-montserrat font-normal text-[18px] p-2">{test.testResults}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
 
           <div className="flex flex-col gap-[10px]">
             <h1 className="text-[24px] font-montserrat font-medium">Prescription</h1>
             <div className="flex flex-col gap-[10px]">
               {fileDetails.prescriptions.map((prescription) => (
                 <p className="text-[#888888] font-poppins font-normal text-[16px] capitalize" key={prescription}>
                   {prescription}
                 </p>
               ))}
             </div>
           </div>
 
           <div className="flex flex-col gap-[10px]">
             <h1 className="text-[24px] font-montserrat font-medium">Diagnosis</h1>
             <p className="text-[#888888] font-poppins font-normal text-[16px]">{fileDetails.diagnosis}</p>
           </div>
 
           <div className="flex flex-col gap-[10px]">
             <h1 className="text-[24px] font-montserrat font-medium">Note</h1>
             <p className="text-[#888888] font-poppins font-normal text-[16px]">{fileDetails.note}</p>
           </div>
 
           <div>
             <div className="flex gap-4">
               {fileDetails.images.map((image) => (
                 <Image
                   key={image}
                   src={image}
                   width={311}
                   height={189}
                   alt="Patient image"
                 />
               ))}
             </div>
             <div className="w-[311px] h-[246px] mt-4">
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
}

export default Records
