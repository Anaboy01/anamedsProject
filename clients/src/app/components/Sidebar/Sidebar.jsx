import React from "react";
import Link from "next/link";
import { MdBarChart } from "react-icons/md";
import { BsCartDash } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { usePathname } from "next/navigation";
import { IoMdSettings } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import Logo from '../../../../public/anameds.svg'
import Image from "next/image";

const Sidebar = ({ isSidebarOpen, toggleSidebar, profile, router }) => {
  const pathname = usePathname();
  const isActive = (path) => {
    pathname === path
      ? "text-[#2AA0CD] bg-[#C2E5F5] rounded-lg "
      : "text-white";
  }

  const svg = (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="25" fill="#2AA0CD" />
      <path d="M39.6255 10.7844L27.3661 19.8796L29.6429 14.5136L39.6255 10.7844Z" fill="#E17726" stroke="#E17726" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M11.3544 10.7844L23.5022 19.9656L21.337 14.5136L11.3544 10.7844Z" fill="#E27625" stroke="#E27625" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M35.2182 31.8677L31.9569 36.865L38.9353 38.7842L40.9296 31.978L35.2182 31.8677Z" fill="#E27625" stroke="#E27625" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10.0619 31.9775L12.0441 38.7837L19.0225 36.8645L15.7733 31.8672L10.0619 31.9775Z" fill="#E27625" stroke="#E27625" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M18.6402 23.4239L16.6957 26.3662L23.6131 26.6741L23.3791 19.2269L18.6402 23.4239Z" fill="#E27625" stroke="#E27625" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M32.3389 23.4236L27.5261 19.1405L27.3661 26.6737L34.2835 26.3658L32.3389 23.4236Z" fill="#E27625" stroke="#E27625" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19.0223 36.865L23.1957 34.8329L19.6007 32.0272L19.0223 36.865Z" fill="#E27625" stroke="#E27625" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M27.7845 34.8329L31.9579 36.865L31.3796 32.0272L27.7845 34.8329Z" fill="#E27625" stroke="#E27625" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M31.9579 36.8649L27.7845 34.8328L28.1168 37.5536L28.0804 38.6982L31.9579 36.8649Z" fill="#D5BFB2" stroke="#D5BFB2" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19.022 36.8646L22.8995 38.6979L22.8753 37.5533L23.1954 34.8325L19.022 36.8646Z" fill="#D5BFB2" stroke="#D5BFB2" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M22.9736 30.23L19.5022 29.2091L21.9514 28.0887L22.9736 30.23Z" fill="#233447" stroke="#233447" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M28.0062 30.2296L29.0284 28.0884L31.4897 29.2087L28.0062 30.2296Z" fill="#233447" stroke="#233447" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19.0224 36.8653L19.625 31.8674L15.7729 31.9778L19.0224 36.8653Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M31.3552 31.8674L31.9578 36.8653L35.2194 31.9778L31.3552 31.8674Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M34.2835 26.3661L27.3661 26.674L28.0062 30.2297L29.0281 28.0888L31.4891 29.2089L34.2835 26.3661Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19.5022 29.2088L21.951 28.0886L22.973 30.2296L23.6131 26.6739L16.6957 26.366L19.5022 29.2088Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16.6957 26.366L19.6004 32.0274L19.5022 29.2088L16.6957 26.366Z" fill="#E27525" stroke="#E27525" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M31.4895 29.2088L31.3792 32.0274L34.2838 26.366L31.4895 29.2088Z" fill="#E27525" stroke="#E27525" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M23.6131 26.6738L22.973 30.2295L23.7853 34.4265L23.9574 28.9008L23.6131 26.6738Z" fill="#E27525" stroke="#E27525" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M27.3661 26.6737L27.0339 28.8886L27.194 34.4264L28.0062 30.2294L27.3661 26.6737Z" fill="#E27525" stroke="#E27525" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M28.0065 30.2296L27.1942 34.4266L27.7846 34.8327L31.3791 32.0275L31.4894 29.2089L28.0065 30.2296Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19.5022 29.2089L19.6004 32.0275L23.1949 34.8327L23.7852 34.4266L22.973 30.2296L19.5022 29.2089Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M28.0807 38.6976L28.1171 37.5531L27.8104 37.2828H23.1695L22.8749 37.5531L22.8991 38.6976L19.022 36.8645L20.3762 37.9714L23.1331 39.8796H27.8468L30.6037 37.9714L31.9579 36.8645L28.0807 38.6976Z" fill="#C0AC9D" stroke="#C0AC9D" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M27.7847 34.8328L27.1943 34.4266H23.7853L23.1949 34.8328L22.8749 37.5532L23.1695 37.2828H27.8102L28.1169 37.5532L27.7847 34.8328Z" fill="#161616" stroke="#161616" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M40.1422 20.471L41.1763 15.4493L39.6257 10.7842L27.7845 19.5726L32.3394 23.4243L38.7758 25.3083L40.1919 23.6461L39.576 23.2036L40.5604 22.304L39.81 21.7136L40.7944 20.9632L40.1422 20.471Z" fill="#763E1A" stroke="#763E1A" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.80383 15.4497L10.8501 20.4713L10.1857 20.9635L11.1702 21.714L10.4197 22.3044L11.4042 23.204L10.7883 23.6465L12.2043 25.3086L18.6407 23.4246L23.1956 19.573L11.3544 10.7845L9.80383 15.4497Z" fill="#763E1A" stroke="#763E1A" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M38.7758 25.3081L32.3393 23.4241L34.284 26.3665L31.3792 32.0282L35.2187 31.9785H40.9301L38.7758 25.3081Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M18.6411 23.4241L12.2046 25.3081L10.0624 31.9785H15.7738L19.6012 32.0282L16.6964 26.3665L18.6411 23.4241Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M27.3663 26.6741L27.7845 19.5725L29.643 14.5135H21.3363L23.1948 19.5725L23.613 26.6741L23.773 28.9132L23.7851 34.4268H27.1941L27.2063 28.9132L27.3663 26.6741Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.712817" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  )

  return (
    <>
      <div className="fixed inset-0 md:relative md:w-1/5 bg-[#2AA0CD] p-4 flex flex-col space-y-2 z-20 border-r border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[20px] my-3">
            <Image
              src={Logo}
              width={200}
              alt="Anameds Logo"
            />
            <div>
              {/* <p className="text-[18px]">
                {profile.firstName} {profile.lastName}
              </p>
              <p className="text-[18px] text-neutral-400">
                {profile.profession}
              </p> */}
            </div>
          </div>
        </div>
        <div className="text-lg">
          <p>Menu</p>
        </div>
        <Link
          className={`flex gap-[10px] p-3 mt-3 items-center ${pathname === '/dashboard' ? 'text-[#2AA0CD] bg-[#C2E5F5] rounded-lg' : 'text-white'}`}
          href="/dashboard"
        >
          <MdBarChart size={25} /> <p className="text-[14px]">Dashboard</p>
        </Link>
        <Link
          className={`flex gap-[10px] p-3 mt-3 items-center ${pathname === '/campaign' ? 'text-[#2AA0CD] bg-[#C2E5F5] rounded-lg' : 'text-white'}`}
          href="/campaign"
        >
          <BsCartDash size={25} /> <p className="text-[14px]">Campaign</p>
        </Link>

        {/* </AdminLink> */}
        <Link
          className={`flex gap-[10px] p-3 mt-3 items-center text-white ${pathname === '/records' ? 'text-[#2AA0CD] bg-[#C2E5F5] rounded-lg' : 'text-white'}`}
          href="/records"
        >
          <GrDocumentText size={25} color="red" />{" "}
          <p className="text-[17px]">View records</p>
        </Link>

        <div className="text-lg">
          <p>Other</p>
        </div>
        <Link
          className={`flex gap-[10px] p-3 mt-3 items-center ${pathname === '/setting' ? 'text-[#2AA0CD] bg-[#C2E5F5] rounded-lg' : 'text-white'}`}
          href="/setting"
        >
          <IoMdSettings size={25} /> <p className="text-[14px]">Settings</p>
        </Link>
        <Link
          className={`flex gap-[10px] p-3 mt-3 items-center ${pathname === '/logout' ? 'text-[#2AA0CD] bg-[#C2E5F5] rounded-lg' : 'text-white'}`}
          href="/logout"
        >
          <FaArrowLeft size={25} /> <p className="text-[14px]">Logout</p>
        </Link>
      </div>

      {/* <div className="flex float-right">
        <svg />
        <div className="flex ">
          <img
            src={profile.photo}
            alt=""
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            loading="lazy"
          />
          <p className="text-[18px]">
            {profile.firstName} {profile.lastName}
          </p>
          <p className="text-[18px] text-neutral-400">
            {profile.profession}
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Sidebar;
