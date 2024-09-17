import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: {
    template: "%s / InvoSnap / Invoices made simple, payments made quicker",
    absolute: "InvoSnap / Invoices made simple, payments made quicker",
  },
  description:
    "With InvoSnap, billing your clients has never been easier. Whether you're a freelancer, small business owner, or entrepreneur, we take the hassle out of invoicing and helps you focus on growing your business.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
