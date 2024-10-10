"use client";
import Image from "next/image";
import Nav from "./components/Nav";
import heroImg from "../../public/Teamwork.png";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="h-screen justify-center items-center">
      <Nav />
      {/* <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="w-[80%] h-[594.68px] flex flex-row justify-center items-center gap-[66px] pt-[120px]">
        <div className="">
          <style jsx>{`
            @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap");
          `}</style>
          <h1 
             style={{ fontFamily: '"Cormorant Garamond", serif' }}
          className="font-[700] text-[64px] leading-[77.5px] text-center text-[#1C1C1C]  font-cormorantGaramond">
            Keep your Medical records safe and accessible everywhere you go with
            ANAMEDS
          </h1>
        </div>
        <Image
          src={heroImg}
          width='636px'
          height='594.68px'
        />
      </div>
      </div> */}

      <div className="flex items-center justify-center  p-[70px] select-none ">
        <div className=" flex flex-col items-center gap-[212px] p-[46px]  font-bold blueContainer bg-[#2AA0CD] h-[80vh] w-[90vw] rounded-[45px]  ">
          <div className="w-full flex flex-col items-center gap-[36px]">
            <h1 className="font-outfit text-[200px] text-[#F5F5F5]">
              CareChain
            </h1>
            <div className="z-[3] w-[80%]  relative flex items-center justify-between">
              <div className="hello flex justify-center items-center gap-[15px] p-[10px] rounded-[40px]">
                  <div className="w-[47px] h-[47px] flex items-center justify-center rounded-full bg-[#E7C2D4]">
                    <TbActivityHeartbeat size={25} color="#252B61"/>
                  </div>
                  <p className="text-[25px] font-normal text-[#C6DEFD] font-outfit">Best Health Records!</p>
              </div>
              <div className="hi flex justify-center items-center gap-[15px] p-[10px] rounded-[40px]">
              <div className="w-[47px] h-[47px] flex items-center justify-center rounded-full bg-[#A3DAC2] ">
                    <FaPeopleGroup size={25} color="#252B61"/>
                  </div>
                  <p className="text-[25px] font-normal text-[#C6DEFD] font-outfit">Patient Support Community</p>
              </div>
              
            </div>

          </div>

          <div className="z-[3] w-[80%]  relative flex items-center justify-between">
            <button className="py-[22px] px-[95px] rounded-[128px] bg-[#E7C2D4] text-[21px] font-outfit font-semibold text-[#3d3d3d]">Fund a patient</button>
            <button className="py-[22px] px-[95px] rounded-[128px] bg-[#E7C2D4] text-[21px] font-outfit font-semibold text-[#3d3d3d]">Get started</button>
          </div>
        </div>
      </div>
    </main>
  );
}
