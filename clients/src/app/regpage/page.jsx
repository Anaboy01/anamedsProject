import React from "react";
import Nav from "../components/Nav";
import regImg1 from "../../../public/unsplash_HPha3t0r4MU.png";
import regImg2 from "../../../public/Lifesavers Avatar.png";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <Nav />
      <div
        className="h-screen flex justify-center items-center text-[#1C1C1C] font-montserrat "
      >
        <div className="w-[672px] h-[330px] flex gap-[120px] ">
          <div>
           <Link href="/patient/register">
           <div className="h-[276px] w-[330px] flex flex-col items-center gap-[20px] ">
              <div className="bg-[#FFFFFF] w-[276px] h-[259px] flex items-center justify-center rounded-[20px]">
                <Image className="p-2" src={regImg2} width={212.96} height={224.83} />
              </div>
            
               <h3 className="w-[209px] h-[24px] font-[500px] text-[20px] leading-[24.38px]" > Register as a Patient</h3>
              
            </div>
           </Link>
          </div>
          <div>
          <Link href="#">
          <div className="h-[276px] w-[330px] flex flex-col items-center gap-[20px]">
              <div className="bg-[#FFFFFF] w-[276px] h-[259px] flex items-center justify-center rounded-[20px] ">
                <Image src={regImg1} width={212.96} height={224.83} />
              </div>
            
               <h3 className="w-[233px] h-[24px] font-[500px] text-[20px] leading-[24.38px]" >Register as an Hospital</h3>
              
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
