import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import GalleryImage from "@/components/GalleryImage";
import {
  imagesColumn1,
  imagesColumn2,
  imagesColumn3,
} from "../public/DataGalleryImage";
import MarqueeComponent_1 from "@/components/MarqueeComponent_1";
import RecentEvent from "@/components/RecentEvent";
import MarqueeComponent_2 from "@/components/MarqueeComponent_2";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-white pt-20 overflow-hidden">
        <div className="lg:h-screen md:h-screen h-auto w-full flex flex-col justify-center items-center lg:mt-0 md:mt-0 mt-20">
          <p className="lg:w-[67%] md:w-[67%] w-[91%] lg:h-6 md:h-6 h-auto font-inter font-medium lg:text-xl md:text-xl text-lg flex flex-col text-left lg:px-0 md:px-0 px-2 mb-0 text-[#909090]">
            Hello people!
          </p>
          <h1 className="lg:w-[67%] md:w-[67%] w-[91%] lg:h-72 md:h-72 h-auto font-inter font-bold lg:text-8xl md:text-7xl text-5xl leading-normal text-left lg:px-0 md:px-0 px-2 ">
            We&apos;re Student&apos;s welface club.
          </h1>

          <div className="flex lg:gap-4 md:gap-4 gap-2 lg:my-0 md:my-0 my-4 lg:mx-0 md:mx-0 mx-auto">
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
                className="h-12 w-12 hover:cursor-pointer"
              />
            </Link>
            {/* <Link href="/" target="_blank" rel="noopener noreferrer">
            <Image
              src="images/twitter_icon.svg"
              width={48}
              height={48}
              alt=""
              className="h-12 w-12 hover:cursor-pointer"
            />
          </Link> */}
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
                className="h-12 w-12 hover:cursor-pointer"
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
                className="h-12 w-12 hover:cursor-pointer"
              />
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <Image
                src="images/youtube_icon.svg"
                width={48}
                height={48}
                alt=""
                className="h-12 w-12 hover:cursor-pointer border-[1.4px] border-[#E8E7EA] rounded-full"
              />
            </Link>
            {/* <Link href="/" target="_blank" rel="noopener noreferrer">
            <Image
              src="images/spotify_icon.svg"
              width={48}
              height={48}
              alt=""
              className="h-12 w-12 hover:cursor-pointer"
            />
          </Link> */}
          </div>
        </div>

        {/* Scrolling Divisions */}
        <div className="">
          <div className="mt-20 -left-6">
            <MarqueeComponent_1 />
          </div>
          <div className="w-full -z-10 relative bottom-[80px] -left-6">
            <MarqueeComponent_2 />
          </div>
        </div>

        {/* About us */}
        <div className="lg:h-screen md:h-screen h-auto w-full text-white flex flex-col lg:p-10 md:p-10 p-5 lg:mt-10 md:mt-10 mt-2">
          <p className="font-inter font-normal lg:text-xl md:text-xl text-xs text-[#B0AEAE] h-6 w-28 mx-0 lg:mb-3 md:mb-3 mb-0">
            ABOUT US
          </p>

          {/* Parent div */}
          <div className="lg:flex md:flex flex-row-reverse">
            {/* photo */}
            <div className="w-full lg:w-1/2 md:w-1/2 lg:p-2 md:p-2 p-0">
              <Image
                height={400}
                width={600}
                src="images/img_group.svg"
                alt=""
                className="mx-auto"
              />
            </div>
            {/* Text */}
            <div className="lg:w-1/2 md:w-1/2 w-auto flex flex-col gap-4 mt-5 text-justify">
              <div className="lg:h-24 lg:w-[90%] md:w-[90%] h-auto w-auto font-inter font-bold lg:text-2xl text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="lg:h-56 md:h-auto h-auto lg:mb-0 md:mb-0 mb-5 lg:w-[90%] md:w-[90%] w-auto font-inter font-bold lg:text-2xl text-base">
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="lg:mx-0 md:mx-0 mx-auto lg:py-0 md:py-0 py-4">
            <Link href="/team">
              <button className="border-2 font-inter font-semibold rounded-md w-auto px-2 lg:h-14 md:h-10 h-8 ">
                MEET THE TEAM
              </button>
            </Link>
          </div>
        </div>

        {/* recent Events */}
        <div className="h-auto w-full">
          <h1 className="mx-auto mb-20 mt-5 h-9 w-auto font-inter font-bold text-4xl text-center tracking-wider">
            RECENT EVENTS
          </h1>
          <RecentEvent />
          <RecentEvent />
          <div className="flex px-5">
            <Link href="/events" className="lg:w-auto md:w-auto w-full mx-auto">
              <button className="mx-auto border-2 h-10 lg:w-32 md:w-32 w-full rounded-md font-lemonmilk font-normal text-base">
                SEE MORE
              </button>
            </Link>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h1 className="mx-auto my-20 h-9 w-auto font-roboto font-bold text-4xl text-center tracking-wider">
            GALLERY
          </h1>

          <div className="w-full flex flex-row items-center lg:mx-0 md:mx-0 mx-auto justify-evenly overflow-hidden h-screen px-5">
            <div className="lg:block md:block hidden">
              <GalleryImage
                images={imagesColumn1}
                animation="animate-scrollTopBottom"
              />
            </div>
            <GalleryImage
              images={imagesColumn2}
              reverse
              animation="animate-scrollBottomTop"
            />
            <div className="lg:block md:block hidden">
              <GalleryImage
                images={imagesColumn3}
                animation="animate-scrollTopBottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
