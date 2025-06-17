import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";
import {NavBar} from "@/components/navbar/NavBar";

export const metadata: Metadata = {
    title: "Hien Dau Website",
    description: "Hien Dau's website",
    icons: "/website_icon.png",
};

const fira = localFont({
    src: '../fonts/FiraCode-VariableFont_wght.ttf',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fira.className}>
      <body className={"bg-[#010101] text-[#18C0B8] p-2"}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
