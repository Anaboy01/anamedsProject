// "use client"
import { Inter } from "next/font/google";
import "./globals.css";
import ProviderWrapper from "./ProviderWrapper";
import Logo from '../../public/titleStuff.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareChain",
  description: "Your Records",
  icons: {
    icon: "/titleStuff.png",
  },
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Sidebar/>
//         <div>
//           <Nav/>
//           {children}
//         </div>
//       </body>
//     </html>
//   );
// }
export default function RootLayout({ children }) {
  return (
   
      <html lang="en">
        <body className={inter.className}>
          <ProviderWrapper>
          {children}
          </ProviderWrapper>
        </body>
      </html>
   
  );
}
