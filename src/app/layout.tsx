import type { Metadata } from "next";

import "./globals.css";
import { PeekabooAvatar } from "../components/common/PeekabooAvatar";
import { Footer } from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Tanvir Ahmed | Front-End Expert",
  description: "Modern portfolio layout showcasing premium front-end web development skillsets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50 flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        
        <PeekabooAvatar />
      </body>
    </html>
  );
}
