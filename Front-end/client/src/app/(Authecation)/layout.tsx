import { Button } from "@/components/ui/button";

export default function AuthecationLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <div>
            <Button>sd</Button>
        </div>
        {children}
      </div>
    );
  }
  