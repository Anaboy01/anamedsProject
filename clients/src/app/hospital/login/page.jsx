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
      <div className="h-screen gap-[174px] flex justify-center items-center text-black">
        <div className="px-8 pb-8 pt-4 rounded-xl space-y-8">
          <h1 className="font-semibold text-2xl">Login</h1>
          <p className=" text-[#888888]">
            Already have an account?{'  '}
            <Link className="text-[#2AA0CD] hover:underline" href="/register">
              Sign up.
            </Link>
          </p>
          <Form />
        </div>

        <div className="flex justify-center items-center text-center font-lato bg-oval bg-center bg-no-repeat bg-90 h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3">
            <div className="flex items-center flex-col gap-[16.75px] justify-center px-5 bg-gradient-to-r from-[#C8E6C] to-[#B3E5FC]">
              <div>
                <h2 className="text-[24px] font-bold text-[#00579B]">
                 Easily manage your doctors and patients!
                </h2>

                
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
