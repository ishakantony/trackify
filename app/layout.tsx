import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trackify",
  description: "Track everything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex min-h-screen flex-col items-center",
        )}
      >
        <nav className="flex h-14 w-full items-center border-b-2 px-2">
          <div id="left-nav" className="w-24">
            <Link href="/">
              <Image
                src="/trackify.svg"
                width={300}
                height={100}
                alt="Trackify"
              />
            </Link>
          </div>
          <div id="right-nav" className="ml-auto">
            <Button asChild>
              <Link href="/auth/sign-up">Sign up for free</Link>
            </Button>
            <Button asChild variant="link">
              <Link href="/auth/sign-in">Sign In</Link>
            </Button>
          </div>
        </nav>
        {children}
        <footer className="mt-auto flex h-16 w-full flex-col items-center justify-center px-8 text-teal-800 md:flex-row">
          <p className="flex items-center text-center">
            This app is under active development (during free time)
          </p>
          <p className="flex items-center md:ml-1">
            by{" "}
            <Link
              href="https://github.com/ishakantony"
              target="_blank"
              className="ml-1 flex items-center border-b-4"
            >
              <GitHubLogoIcon className="mx-1" /> ishakantony
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
