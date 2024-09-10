"use client";
import Image from "next/image";
import Nav from "./components/Nav";
import heroImg from '../../public/Teamwork.png'


export default function Home() {
  return (
    <main className="h-screen justify-center items-center">
      <Nav />
      <div className="w-full h-[80vh] flex justify-center items-center">
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
      </div>
    </main>
  );
}
