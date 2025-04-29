import type { Metadata } from "next";
import "./globals.css";
import Greeting from "@/components/Greeting";

export const metadata: Metadata = {
  title: "Barber Project",
  description: "Barber project for barbers",
};

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Greeting/>
        {children}
      </body>
    </html>
  );
}
