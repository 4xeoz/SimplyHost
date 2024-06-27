import React, { Children } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex justify-between wrapper">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="Eventih logo"
            width={128}
            height={38}
          ></Image>
        </Link>

        <SignedIn>
          <nav className="hidden md:flex md:w-full md:max-w-xs md:justify-between ">
            <NavItems />
          </nav>

          <div className="flex gap-5">
            <UserButton />
            <MobileNav />
          </div>
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <div className="flex justify-end w-32 gap-3">
              <Button className="rounded-full" size="lg">
                <Link href="/sign-in">Log In</Link>
              </Button>
            </div>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
