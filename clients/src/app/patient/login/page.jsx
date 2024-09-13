"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Form } from "./form"; // Import the Form component
import Nav from "../../components/Nav";
import Inter from "../../../../public/userinter.svg";

import { validateEmail } from "@/app/redux/features/patientApi/patientService";
import { toast } from "react-toastify"; // Import toast
import { login, RESET, sendPatientLoginCode, loginPatientWithCode } from "@/app/redux/features/patientApi/patientSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import ReusableModal from "@/app/components/Modal/Modal";

const initialState = {
  email: "",
  password: "",
};

export default function Page() {
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  const [showModal, setShowModal] = useState(false); // State to show modal
  const [loginCode, setLoginCode] = useState(""); // State to store the 2FA code
  const dispatch = useDispatch();
  const router = useRouter();

  const { isError, twoFactor, isLoading, isLoggedIn, isSuccess } = useSelector(
    (state) => state.patient
  );

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleModalInputChange = (e) => {
    setLoginCode(e.target.value);
  };

  // Handle user login
  const loginPatient = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const patientData = {
      email,
      password,
    };

    const toastId = toast.loading("Logging in...");

    try {
      await dispatch(login(patientData)).unwrap();
      toast.update(toastId, {
        render: "Logged in successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      toast.update(toastId, {
        render: "Login failed. Please check your credentials.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  // Handle token submission for 2FA
  const handleTokenSubmit = async (inputValue) => {
    const loginCode = {
      loginCode: inputValue
    }
    
    
    try {
      await dispatch(loginPatientWithCode({ email, loginCode })).unwrap();
      toast.success("Login token verified successfully!");
      router.push("/patient/profile");
    } catch (error) {
      toast.error("Invalid token. Please try again.");
    }
    setShowModal(false); // Close the modal after submission
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      router.push("/patient/profile");
    }

    if (isError && twoFactor) {
      dispatch(sendPatientLoginCode(email)); // Send login code to email
      setShowModal(true); // Show the modal for two-factor authentication
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, router, isError, twoFactor, email]);

  return (
    <main>
      <Nav />
      <div className="h-screen flex gap-[174px] justify-center items-center text-black">
        <div className="px-8 pb-8 pt-4 rounded-xl space-y-8">
          <div className="flex flex-col gap-[7px]">
            <h1 className="font-semibold text-2xl font-montserrat">Login</h1>
            <p className="text-[#888888] font-poppins">
              Already have an account?{" "}
              <Link href="/register" className="text-[#2AA0CD] hover:underline">
                Sign up.
              </Link>
            </p>
          </div>

          {/* Pass necessary props to Form component */}
          <Form
            formData={formData}
            handleInputChange={handleInputChange}
            loginPatient={loginPatient}
            error={isError ? "Invalid email or password" : ""}
            loading={isLoading}
          />
        </div>

        <div className="bg-oval bg-90 p-[10px] bg-center bg-no-repeat flex justify-center items-center h-screen text-center">
          <div className="lg:block p-[10px]">
            <div className="flex items-center flex-col justify-center px-5 bg-gradient-to-r from-[#C8E6C] to-[#B3E5FC]">
              <div>
                <h2 className="text-2xl font-bold text-[#00579B] sm:text-[24px] font-lato">
                  Log in to control and manage your health easily!
                </h2>

                <p className="max-w-xl mt-3 text-[#0000008A] font-lato">
                  Take control of your health and access support for your
                  healthcare needs. Join our community to help fund patients in
                  need and make a positive impact.
                </p>
              </div>
              <Image src={Inter} width={294.21} height={248.85} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Two-Factor Authentication Modal */}
      <ReusableModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Enter Two-Factor Authentication Code"
        description="We sent a login code to your email. Please enter it below to continue."
        handleSubmit={handleTokenSubmit}
        inputValue={loginCode}
        handleInputChange={handleModalInputChange}
        type="text"
      />
    </main>
  );
}
