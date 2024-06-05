import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "../../lib";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarmaaya Ecommerce",
  description: "Assessment for Internship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(" py-10 max-w-7xl mx-auto text-justify",inter.className)}>{children}</body>
    </html>
  );
}
