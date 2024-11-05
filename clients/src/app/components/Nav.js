'use client'
import Image from "next/image";
  import Logo from '../../../public/careChainLogo.png'

const Nav = () => {
  return (
    <div className="flex items-center justify-center py-4 bg-[#2AA0CD]">
      <Image 
      src={Logo}
      width={200}
      alt="CareChain Logo"
      />
    </div>
  );
};

export default Nav;
