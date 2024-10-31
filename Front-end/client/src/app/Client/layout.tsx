import HeaderAuth from "@/components/client/HeaderAuth";
import FooterAuth from "@/components/client/FooterAuth";
import { auth } from "@/auth";
import { SharedDataProvider } from "@/context/SharedDataContextType";
export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const tokenExpiration = Math.floor(
    new Date(session?.expires || 0).getTime() / 1000
  );
  console.log(">>>>check token_expiration: ", tokenExpiration);
  return (
    <div>
      <div className="header">
        <HeaderAuth session={session}></HeaderAuth>
      </div>
      <div className="main">
        <SharedDataProvider>{children}</SharedDataProvider>
      </div>
      <div className="footer">
        <FooterAuth></FooterAuth>
      </div>
    </div>
  );
}
