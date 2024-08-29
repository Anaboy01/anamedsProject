"use client";
import Sidebar from "../../components/Sidebar/Sidebar";
import viewImg from "../../../../public/Frame 71.png";
import Image from "next/image";
const page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen text-[#3D3D3D] montserrat-font ">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
        .montserrat-font {
          font-family: "Montserrat", sans-serif;
        }
      `}</style>
      <Sidebar />
      <div className="mt-[150px] ml-[60px] flex flex-col gap-10">
        <h1 className="text-[#3D3D3D] text-[24px] font-[500px] leading-[29.26px]">
          All campaign
        </h1>

        <div className="flex flex-row  space-x-4 gap-12">
          <div>
            <Image
              src={viewImg}
              width="761px"
              height="327px"
              className="rounded-[20px]"
            />
          </div>

          <div className="flex flex-col gap-[12px]">
            {/* <div className="w-[327px] h-[140px] gap-2"> */}
            <div className="flex flex-col w-[140px] h-[101px] rounded-[20px] border-[2px] border-[#BDBDBD]">
              <div className="bg-[#F9F6F9]  rounded-t-[20px] rounded-r[20px]  w-full h-[48px] flex items-center justify-center">
                <h3 className="text-[#3D3D3D] text-[20px] font-[500px] leading-[24.33px]">
                  19
                </h3>
              </div>
              <div className="bg-[#C2E5F5]  rounded-b-[20px]  w-full h-[49px] flex items-center justify-center">
                <h3 className="text-[#3D3D3D] text-[20px] font-[500px] leading-[24.33px]">
                  Days left
                </h3>
              </div>
            </div>
            <div className="flex flex-col w-[140px] h-[101px] rounded-[20px] border-[2px] border-[#BDBDBD]">
              <div className="bg-[#F9F6F9]  rounded-t-[20px] rounded-r[20px]  w-full h-[48px] flex items-center justify-center">
                <h3 className="text-[#3D3D3D] text-[20px] font-[500px] leading-[24.33px]">
                  0.0
                </h3>
              </div>
              <div className="bg-[#EBDFEB]  rounded-b-[20px]  w-full h-[49px] flex items-center justify-center px-2">
                <h3 className="text-[#3D3D3D] text-[18px] text-center font-[500px] leading-[24.33px]">
                  Raised of 0.5
                </h3>
              </div>
            </div>
            <div className="flex flex-col w-[140px] h-[101px] rounded-[20px] border-[2px] border-[#BDBDBD]">
              <div className="bg-[#F9F6F9]  rounded-t-[20px] rounded-r[20px]  w-full h-[48px] flex items-center justify-center">
                <h3 className="text-[#3D3D3D] text-[20px] font-[500px] leading-[24.33px]">
                  0
                </h3>
              </div>
              <div className="bg-[#FFDAB9]  rounded-b-[20px]  w-full h-[49px] flex items-center justify-center">
                <h3 className="text-[#3D3D3D] text-[20px] font-[500px] leading-[24.33px]">
                  Total backers
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-[20px] w-[343px] h-[426px] ">
            <h3 className="text-[14px] font-[700] leading-[16.45px] text-[#1C1C1C]">
              CREATOR
            </h3>
            <div className="flex flex-row w-[492px] h-[50px] gap-[20px]">
              <Image src="/Ellipse 6.png" width={50} height={50} />

              <div className="gap-[20px]">
                <h6 className="font-[500] text-[#1C1C1C] text-[17px] leading-[16.94px]">
                  0xsnj23o8y2bdwy82ef348f wrwouh3f3 oh
                </h6>
                <p>10 campaigns</p>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h3 className="text-[14px] font-[700] leading-[16.45px] text-[#1C1C1C]">
                Story
              </h3>
              <div className="w-[360px] h-auto p-5  border-[1px] rounded-[8px] bg-[#FFFFFF] border-[#00000066]">
                <article className="text-wrap ...">
                  <p className="text-[#1C1C1C] text-[17px]">joe</p>
                </article>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h3 className="text-[14px] font-[700] leading-[16.45px] text-[#1C1C1C]">
                Donators
              </h3>
              <div className="w-[360px] h-auto p-5  border-[1px] rounded-[8px] bg-[#FFFFFF] border-[#00000066]">
                {/* <article className="text-wrap ...">
                 
                </article> */}
                <ul className="">
                  <li>No donators yet</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-[700] leading-[16.45px] text-[#1C1C1">
              Fund
            </h3>
            <div className="flex flex-col items-center  justify-center w-[343px] h-[390px] rounded-[20px] bg-[#FFFFFF] p-10 ">
              <div className=" flex flex-col  gap-[20px] w-[306px] h-[359px] ">
                <h4 className="text-[18px] font-[600] leading-[21.15px] text-[#1C1C1C] text-center">
                  Fund campaign
                </h4>

                <div className="w-[306px] h-[65px] p-5  border-[1px] rounded-[8px] bg-[#FFFFFF] border-[#00000066]">
                  <p className="text-[#1C1C1C] text-[17px]">0.0015Eth</p>
                </div>

                <div className="w-[306px] h-[151px] gap-[6px]">
                  <h4 className="text-[16px] font-[600] leading-[19.5px] text-[#3D3D3D]">
                    Fund patients in need - make a difference now!
                  </h4>
                  <p className="text-[14px] text-[#888888] leading-[21px]">
                    Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                </div>

                <button className="w-[306px] h-[47px] p-[10px] gap-[10px] rounded-[20px] bg-[#2AA0CD] text-[#F5F5F5] text-[16px] leading-[19.36px]">
                  Fund campaign
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
