"use client";
import Image from "next/image";
import Link from "next/link";
import { Form } from "./form";
import Nav from "../../components/Nav";
import Inter from '../../../../public/userinter.svg'

export default function page() {
  return (
    <main>
      <Nav />
      <div className="h-screen flex justify-center items-center w-full text-black">
        <div className="px-8 pb-8 pt-4 rounded-xl space-y-8">
          <h1 className="font-semibold text-2xl">Login</h1>
          <p className=" text-[#888888]">
            Dont have an account?{'  '}
            <Link className="text-[#2AA0CD] hover:underline" href="/register">
              Sign up.
            </Link>
          </p>
          <Form />
        </div>

        <div className="flex justify-center items-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3">
            <div className="oval flex items-center flex-col justify-center px-5 py-5 text-center bg-gradient-to-r from-[#C8E6C] to-[#B3E5FC]">
              <div>
                <h2 className="text-2xl font-bold text-blue-500 sm:text-[24px]">
                Hey, Doc! Log in to easily access and manage your patient files for better care!

                </h2>


                <p className="max-w-xl mt-3 text-[#0000008A]">
                  Join our community to help support patients in need of financial assistance for their health care.
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
