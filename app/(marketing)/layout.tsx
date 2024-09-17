import Header from "@/components/global/Header";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Separator className="mr-auto ml-auto max-w-[1600px]" />
      {children}
    </>
  );
}
