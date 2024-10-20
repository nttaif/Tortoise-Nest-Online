import HeaderAuth from "@/components/HeaderAuth";
import FooterAuth from "@/components/FooterAuth";
import { auth } from '@/auth'
export default async function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  const session = await auth();
    return (
      <div>
        <div className="header">
          <HeaderAuth session={session} ></HeaderAuth>
        </div>
        <div className="main">
          {children}
        </div>
        <div className="footer">
          <FooterAuth></FooterAuth>
        </div>
      </div>
    );
  }
  