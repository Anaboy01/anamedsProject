import Sidebar from "../Sidebar/Sidebar";
import MetaMask from '../../../../public/metamaxfox.png'
import Image from "next/image";
import { IoNotifications } from "react-icons/io5";

const Layout = ({ children }) => {
  return (
    <div className="flex h-[100vh] relative">
 
      <Sidebar className="fixed top-0 left-0 h-full w-[250px]" />


      <main className="flex-1  overflow-y-auto relative">
      
        <nav className="sticky top-0 w-full flex items-center justify-end pr-[20px] text-black pt-[49px]  z-10">
          <div className="navCon w-auto px-[20px] flex items-center justify-center gap-[14px] py-[9px]">
          
            <button className="metaMaskButton cursor-pointer flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#2AA0CD]">
              <Image src={MetaMask} alt="Metamask" />
            </button>
            <p className="walletAddress">0x3fABcB3a1eF527...</p>
          
            <button className="cursor notifyButton text-[20px] text-[#6b7a82]">
              <IoNotifications />
            </button>
          </div>
        </nav>

        <div className="p-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
