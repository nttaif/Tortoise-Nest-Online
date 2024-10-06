import HeaderAuth from "@/components/HeaderAuth";
import FooterAuth from "@/components/FooterAuth";
export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <div className="header">
          <HeaderAuth></HeaderAuth>
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
  