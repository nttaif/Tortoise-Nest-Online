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
        <div className="h-[800px] w-full content-center flex bg-white">
          <div className="main-content-left w-1/2 content-center max-md:hidden max-md:w-0 ">
            <Image className="m-auto" src="/images/bgAuth.jpg" width={600} height={600} alt="Your Company"/>
          </div>
          <div className="main-content-right w-1/2 max-md:w-full ">
            {children}
          </div>
        </div>
        <FooterAuth></FooterAuth>
      </div>
    );
  }
