"use client";
import Sidebar from "../../components/Sidebar/Sidebar";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react"; 
import "react-datepicker/dist/react-datepicker.css";
import CustomInput from "./customInputs"; 
import { useSelector, useDispatch } from "react-redux"; 
import { getPatientFiles } from "@/app/redux/features/patientApi/patientSlice";
import PatientFilesTable from "@/app/components/PatientFilesTable/PatientFilesTable";// Adjust the import path

const Page = () => {
  const dispatch = useDispatch(); 

  // Getting necessary states from Redux
  const { isLoading, isLoggedIn, isSuccess, message, patient } = useSelector(
    (state) => state.patient
  );

  useEffect(() => {
    dispatch(getPatientFiles());
  }, [dispatch]);

  // Logging the patient object whenever it is updated
  useEffect(() => {
    if (patient) {
      console.log("Patient files:", patient.patient_files);
      console.log("First name:", patient.name.firstName);
      console.log("Last name:", patient.name.lastName);
    }
  }, [patient]); 

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  }, [startDate, endDate]);

  // Filter patient files based on the selected date range
  const filteredFiles = patient?.patient_files?.filter((file) => {
    const fileDate = new Date(file.createdAt); // Convert file date to Date object
    const isAfterStartDate = startDate ? fileDate >= startDate : true;
    const isBeforeEndDate = endDate ? fileDate <= endDate : true;
    return isAfterStartDate && isBeforeEndDate;
  });

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
              {patient?.name?.firstName}
            </span>
          </h3>
          <h3 className="text-[18px] font-[500] mb-1 leading-[21.94px]">
            Last name:{" "}
            <span className="font-Poppins text-[16px] font-[400] leading-[24px] text-[#6D6D6D]">
              {patient?.name?.lastName}
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

        {/* Pass the filtered files as props to PatientFilesTable */}
        <PatientFilesTable patientFiles={filteredFiles} />
      </div>
    </div>
  );
};

export default Page;
