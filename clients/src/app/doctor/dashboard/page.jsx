"use client";
import { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import { BiPlusMedical } from "react-icons/bi";
import { BsFileMedicalFill, BsJournalMedical } from "react-icons/bs";
import ReusableModal from "@/app/components/Modal/Modal";
import { useRouter } from "next/navigation";
import Layout from "@/app/components/Layout/Layout";


export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecordType, setSelectedRecordType] = useState("");
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const initialState = {
    firstName: "Muhammed",
    lastName: "Musa",
    photo: "",
    role: "",
  };

  const [profile, setProfile] = useState(initialState);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openModal = (recordType) => {
    setSelectedRecordType(recordType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (email) => {
    switch (selectedRecordType) {
      case "Create new medical record":
        router.push(`/doctor/create-record/${email}`);
        break;
      case "Create new journal record":
        router.push(`/patient-files?email=${email}`);
        break;
      case "Create new file record":
        router.push(`/created-files?email=${email}`);
        break;
      default:
        console.error("Unknown record type");
    }
    closeModal();
  };

  return (
   <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="px-[69px] text-black pt-[74px] flex flex-col gap-[80px]">
          <h6 className="text-[#3D3D3D] font-medium text-2xl">
            Welcome to your Dashboard Dr. Dave
          </h6>
  
          <div className="flex flex-row w-full items-center gap-[36px]">
            <div
              onClick={() => openModal("Create new medical record")}
              className="w-[229px] h-[101px] rounded-[20px] border-[2px] border-[#BDBDBD] cursor-pointer"
            >
              <div className="flex items-center justify-center h-[48px] bg-[#F9F6F9] rounded-tl-[20px] rounded-tr-[20px]">
                <BiPlusMedical className="h-[24px] w-[24px] text-[#374957]" />
              </div>
              <div className="text-center h-[49px] bg-[#C2E5F5] py-[14px] font-normal text-[15px] rounded-br-[20px] rounded-bl-[20px]">
                Create new record
              </div>
            </div>
  
            <div
              onClick={() => openModal("Create new journal record")}
              className="w-[229px] h-[101px] rounded-[20px] border-[2px] border-[#BDBDBD] cursor-pointer"
            >
              <div className="flex items-center justify-center h-[48px] bg-[#F9F6F9] rounded-tl-[20px] rounded-tr-[20px]">
                <BsJournalMedical className="h-[24px] w-[24px] text-[#374957]" />
              </div>
              <div className="text-center h-[49px] bg-[#EBDFEB] py-[14px] font-normal text-[15px] rounded-br-[20px] rounded-bl-[20px]">
                Access patient files
              </div>
            </div>
  
            <div
              onClick={() => openModal("Create new file record")}
              className="w-[229px] h-[101px] rounded-[20px] border-[2px] border-[#BDBDBD] cursor-pointer"
            >
              <div className="flex items-center justify-center h-[48px] bg-[#F9F6F9] rounded-tl-[20px] rounded-tr-[20px]">
                <BsFileMedicalFill className="h-[24px] w-[24px] text-[#374957]" />
              </div>
              <div className="text-center h-[49px] bg-[#EBDFEB] py-[14px] font-normal text-[15px] rounded-br-[20px] rounded-bl-[20px]">
                Access files you created
              </div>
            </div>
          </div>
        </div>
  
        {isModalOpen && (
          <ReusableModal
            title="Patient Email"
            description="Please enter the patient's Email to proceed."
            placeholder="Joe@Example.com"
            show={isModalOpen}
            type="email"
            onClose={closeModal}
            handleSubmit={handleSubmit}
            inputValue={inputValue}
            handleInputChange={handleInputChange}
          />
        )}
      </div>
   </Layout>
  );
}