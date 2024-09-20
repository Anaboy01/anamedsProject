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
      <div className="h-screen flex justify-center items-center gap-[174px] w-full text-black">
        <div className="px-8 pb-8 pt-4 rounded-xl space-y-8">
          <h1 className="font-semibold text-2xl font-montserrat">Login</h1>
          <Form />
        </div>

        <div className="bg-oval bg-center bg-90 bg-no-repeat flex justify-center items-center h-screen">
          <div className=" bg-cover lg:block w-[80%]">
            <div className=" flex items-center flex-col justify-center px-5 py-5 text-center from-[#C8E6C] font-lato to-[#B3E5FC]">
              <div>
                <h2 className="text-[24px] font-bold text-[#00579B] font-lato sm:text-[24px]">
                Hey, Doc! Log in to manage patient files with ease!

                </h2>


                <p className="max-w-xl font-normal text-[16px] mt-3 text-[#0000008A]">
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
