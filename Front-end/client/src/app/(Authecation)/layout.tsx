import HeaderAuth from "@/components/HeaderAuth";
import FooterAuth from "@/components/FooterAuth";
import Image from "next/image";
export default function AuthecationLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <HeaderAuth></HeaderAuth>
        <div className="h-[600px] w-full content-center flex">
          <div className="main-content-left w-1/2 border-r-4 p-20">
            <Image src="/images/bgAuth.jpg" width={200} height={200} alt="Your Company"/>
          </div>
          <div className="main-content-right w-1/2 border-r-4 ">
            {children}
          </div>
        </div>
        <FooterAuth></FooterAuth>
      </div>
    );
  }
  