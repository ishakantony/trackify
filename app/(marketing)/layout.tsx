import { TrackifyLogoFull } from "@/components/common/trackify-logo-full";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex h-14 w-full items-center border-b-2 bg-white px-2">
        <div id="left-nav" className="w-24">
          <Link href="/">
            <TrackifyLogoFull />
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
      <footer className="mt-auto flex h-16 w-full flex-col items-center justify-center px-8 text-slate-700 md:flex-row">
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
    </>
  );
}
