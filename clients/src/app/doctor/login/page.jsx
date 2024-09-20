"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  loginDoctor,
  RESET,
} from "@/app/redux/features/doctorsApi/doctorsSlice";
import { Form } from "./form";
import Nav from "../../components/Nav";
import Image from "next/image";
import Link from "next/link";
import Inter from "../../../../public/userinter.svg";

const initialState = {
  email: "",
  password: "",
};

// Add this function to validate email
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default function LoginPage() {
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  const dispatch = useDispatch();
  const router = useRouter();

  const { isError, isLoading, isLoggedIn, isSuccess } = useSelector(
    (state) => state.doctor
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginDoctors = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const doctorData = {
      email,
      password,
    };

    const toastId = toast.loading("Logging in...");

    try {
      await dispatch(loginDoctor(doctorData)).unwrap();
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
      console.error(error)
    }
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      router.push("/doctor/dashboard");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, router]);

  return (
    <main>
      <Nav />
      <div className="h-screen flex gap-[174px] justify-center items-center text-black">
        <div className="px-8 pb-8 pt-4 rounded-xl space-y-8">
          <div className="flex flex-col gap-[7px]">
            <h1 className="font-semibold text-2xl font-montserrat">Login</h1>
            <p className="text-[#888888] font-poppins">
              Don't have an account?{" "}
              <Link href="/register" className="text-[#2AA0CD] hover:underline">
                Sign up.
              </Link>
            </p>
          </div>

          <Form
            formData={formData}
            handleInputChange={handleInputChange}
            loginDoctor={loginDoctors}
            error={isError ? "Invalid email or password" : ""}
            loading={isLoading}
          />
        </div>

        <div className="bg-oval bg-90 p-[10px] bg-center bg-no-repeat flex justify-center items-center h-screen text-center">
          <div className="lg:block p-[10px]">
            <div className="flex items-center flex-col justify-center px-5 bg-gradient-to-r from-[#C8E6C] to-[#B3E5FC]">
              <div>
                <h2 className="text-2xl font-bold text-[#00579B] sm:text-[24px] font-lato">
                  Hey, Doc! Log in to manage patient files with ease!
                </h2>

                <p className="max-w-xl mt-3 text-[#0000008A] font-lato">
                  Join our community to help support patients in need of financial assistance for their health care.
                </p>
              </div>
              <Image src={Inter} width={294.21} height={248.85} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}