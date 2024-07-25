import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Input } from "postcss";

const Navbar = () => {
  return (
    <div className="text-white w-full fixed z-50 h-20 flex justify-between px-10 bg-custom-bg bg-cover bg-center bg-no-repeat bg-[#000000]">
      <div className="flex items-center gap-2 mt-2">
        <div className="hidden lg:block md:block ">
          <Image
            src="images/logo_navbar.svg"
            height={52}
            width={50}
            alt="Logo Image"
          />
        </div>
        <div>
          <p className="font-inter lg:text-xs md:text-xs text-base lg:font-medium md:font-medium font-semibold tracking-wider">
            CODERS.DYP
          </p>
        </div>
      </div>

      <div className="visible lg:hidden md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex items-center h-full w-full my-auto">
              <HiOutlineBars3 className="h-9 w-9 my-auto" />
            </div>
          </SheetTrigger>
          <SheetContent className="text-white w-full h-full bg-mobile-bg bg-cover bg-no-repeat flex flex-col justify-center items-center">
            <div className="flex flex-col h-auto w-auto justify-center items-center">
              <div className="h-auto flex flex-col gap-4 w-auto my-auto text-center font-inter text-2xl leading-loose tracking-wider font-medium">
                <Link href="/" className="h-14 flex flex-col justify-center">HOME</Link>
                <Link href="/team" className="h-14 flex flex-col justify-center">TEAM</Link>
                <Link href="/events" className="h-14 flex flex-col justify-center">EVENTS</Link>
                <Link href="/newsletter" className="h-14 flex flex-col justify-center">NEWSLETTER</Link>
              </div>
              <div className="w-auto mx-auto lg:mx-0 md:mx-0 flex gap-4 mb-4 fixed bottom-10">
                <Link
                  href="https://www.instagram.com/coders.dyp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="images/instagram_icon.svg"
                    width={48}
                    height={48}
                    alt=""
                    className="h-10 w-10 hover:cursor-pointer"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/codersdyp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="images/linkedin_icon.svg"
                    width={48}
                    height={48}
                    alt=""
                    className="h-10 w-10 hover:cursor-pointer"
                  />
                </Link>
                <Link
                  href="https://chat.whatsapp.com/Dy1BGZyP3cUFTgE7ioUWVo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="images/whatsapp_icon.svg"
                    width={48}
                    height={48}
                    alt=""
                    className="h-10 w-10 hover:cursor-pointer"
                  />
                </Link>
                <Link href="/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="images/youtube_icon.svg"
                    width={48}
                    height={48}
                    alt=""
                    className="h-10 w-10 hover:cursor-pointer border-[1.4px] border-[#E8E7EA] rounded-full"
                  />
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="w-96 my-auto hidden lg:block md:block">
        <ul className="lg:flex md:flex justify-between font-inter font-medium text-base hidden ">
          <Link href="/">
            <li>HOME</li>
          </Link>
          <Link href="team">
            <li>TEAM</li>
          </Link>
          <Link href="events">
            <li>EVENTS</li>
          </Link>
          <Link href="newsletter">
            <li>NEWSLETTER</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
