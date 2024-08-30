"use client";
import Image from "next/image";
import Link from "next/link";
import { Form } from "./form";
import Nav from "../../components/Nav";
import Inter from "../../../../public/userinter.svg";

export default function page() {
  return (
    <main>
      <Nav />
      <div className="h-screen flex gap-[174px] justify-center items-center text-black">
        <div className="px-8 pb-8 pt-4 rounded-xl space-y-8">
          <div className="flex flex-col gap-[7px]">
            <h1 className="font-semibold text-2xl font-montserrat">Login</h1>
            <p className=" text-[#888888] font-poppins">
              Already have an account?{"  "}
              <Link className="text-[#2AA0CD] hover:underline" href="/register">
                Sign up.
              </Link>
            </p>
          </div>
          <Form />
        </div>

        <div className=" bg-oval bg-90 p-[10px] bg-center bg-no-repeat flex justify-center items-center h-screen text-center">
          <div className="  lg:block  p-[10px]">
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
    </main>
  );
}
