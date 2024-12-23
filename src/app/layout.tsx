import type { Metadata } from "next";
import "./globals.css";
import { playfairDisplay, roboto } from "./fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import logoDevboot from "@/assets/new-logo-devboot.png";

export const metadata: Metadata = {
  title: "Devboot",
  description: "Creating digital solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${playfairDisplay.variable} ${roboto.className} antialiased`}
      >
        <header className="w-full flex flex-col sm:flex-row gap-2 items-center justify-center bg-gray-500/70 px-8 py-4">
          <div className="flex items-center gap-2">
            <Image
              src={logoDevboot}
              alt="devboot logo"
              width={80}
              className="w-8 sm:w-20"
            />
            <Link
              href="/"
              className={`${playfairDisplay.className} text-3xl sm:text-5xl font-bold`}
            >
              Devboot
            </Link>
          </div>
          <p className="sm:ml-4 sm:text-xl">
            | Developed by{" "}
            <Link
              href="https://giluansouza.com.br"
              className="hover:underline text-blue-400 bg-blue-400 bg-clip-text text-transparent shadow-blue-300 drop-shadow-lg"
            >
              Giluan Souza
            </Link>
          </p>
        </header>
        {children}
      </body>
    </html>
  );
}
