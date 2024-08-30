"use client";
import Image from "next/image";
import Link from "next/link";
import { Form } from "./form";
import Nav from "../../components/Nav";
import Inter from '../../../../public/userinter.svg'
import Oval from '../../../../public/oval.svg'

export default function page() {
  return (
    <main>
      <Nav />
      <div className="h-screen w-full flex justify-center items-center text-black">
        <div className="px-8  py-2 rounded-xl space-y-10">
          <h1 className="font-semibold text-2xl">Create an account</h1>
          <p className=" text-[#888888]">
            Already have an account?{'  '}
            <Link className="text-[#2AA0CD] hover:underline" href="/login">
              Login
            </Link>
          </p>
          <Form />
        </div>

        <div className=" oval text-center flex justify-center items-center h-screen w-[40%]">
          <div className="hidden bg-cover lg:block w-[60%] text-wrap" style={{ backgroundImage: Oval }}>
            <div className="flex items-center flex-col justify-center px-5">
              <div>
                <h2 className="text-2xl font-bold text-[#00579B] sm:text-3xl font-lato">Your health, your control!

                </h2>

                <p className="max-w-xl mt-3 text-[#000000]">
                Register to access and manage your medical records with ease. 
                </p>
              </div>
              <Image
                src={Inter}
                width={294.21}
                height={248.85}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
