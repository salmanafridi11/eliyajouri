import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Elyajouri Foundation",
  description:
    "Connecting communities across New York City and Morocco through education, health, and sustainable development programs that create lasting change.",
  keywords:
    "nonprofit, education, health, community development, New York, Morocco, empowerment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
