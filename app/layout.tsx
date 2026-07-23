import FloatingContact from "@/components/floating-contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sujatha and Associates | Advocates & Legal Consultants",
    template: "%s | Sujatha and Associates",
  },
  description:
    "Sujatha and Associates provides thoughtful, dependable and client-focused legal representation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#f8f5ef] text-[#14342f]">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}