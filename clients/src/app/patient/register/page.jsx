"use client"; // This is crucial for client-side features like useRouter

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Form } from "./form";
import Nav from "../../components/Nav";
import Inter from "../../../../public/userinter.svg";
import Oval from "../../../../public/oval.svg";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+ app router
import { validateEmail } from "@/app/redux/features/patientApi/patientService";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { register, RESET } from "@/app/redux/features/patientApi/patientSlice";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  password2: "", // Updated to match the Form component
};

export default function Page() {
  const [formData, setFormData] = useState(initialState);
  const { firstName, lastName, email, password, password2 } = formData;

  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoading, isLoggedIn, isSuccess, message } = useSelector(
    (state) => state.patient
  );

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  useEffect(() => {
    setUCase(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/));
    setNum(password.match(/([0-9])/));
    setSChar(password.match(/([!,%,&,@,#,$,^,*,?,_,~])/));
    setPassLength(password.length > 5);
  }, [password]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const registerAPatient = async (e) => {
    e.preventDefault();

    console.log(formData); // Debugging

    if (!lastName || !firstName || !email || !password) {
      return toast.error("All fields are required");
    }
    if (password.length < 6) {
      return toast.error("Password must be up to 6 characters");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const patientData = {
      lastName,
      firstName,
      email,
      password,
    };

    console.log(patientData); // Debugging
    await dispatch(register(patientData));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      router.push("/patient/profile");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, router]);

  return (
    <main>
      <Nav />
      <div className="h-screen w-full flex justify-center gap-[174px] items-center text-black">
        <div className="px-8 py-2 rounded-xl space-y-10">
          <h1 className="font-semibold text-2xl">Create an account</h1>
          <p className="text-[#888888]">
            Already have an account?{" "}
            <Link className="text-[#2AA0CD] hover:underline" href="/login">
              Login
            </Link>
          </p>
          <Form 
            formData={formData}
            handleInputChange={handleInputChange}
            onSubmit={registerAPatient}
            uCase={uCase}
            num={num}
            sChar={sChar}
            passLength={passLength}
          />
        </div>

        <div
          className="bg-center bg-70 bg-no-repeat text-center flex justify-center items-center h-screen w-[40%]"
          style={{ backgroundImage: `url(${Oval.src})` }}
        >
          <div className="flex items-center flex-col gap-[20px] justify-between px-5">
            <div>
              <h2 className="text-2xl font-bold text-[#00579B] sm:text-3xl font-lato">
                Your health, your control!
              </h2>

              <p className="max-w-xl mt-3 text-[#000000]">
                Register to access and manage your medical records with ease.
              </p>
            </div>
            <Image src={Inter} width={294.21} height={248.85} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}
