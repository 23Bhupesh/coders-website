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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-white pt-20 overflow-hidden">
      <div className=" h-screen w-full flex flex-col justify-center lg:items-center md:items-center ">
        <p className="lg:w-[67%] md:w-[67%] w-auto lg:h-6 md:h-6 h-auto font-inter font-medium lg:text-xl md:text-xl text-lg flex flex-col lg:text-left md:text-left text-center lg:px-0 md:px-0 px-2">
          Hello people!
        </p>
        <h1 className="lg:w-[67%] md:w-[67%] w-full lg:h-72 md:h-72 h-auto font-inter font-bold lg:text-8xl md:text-7xl text-6xl lg:text-left md:text-left text-center lg:px-0 md:px-0 px-2 leading-tight">
          We&apos;re Student&apos;s welface club.
        </h1>

        <div className="flex lg:gap-4 md:gap-4 gap-2 lg:mx-0 md:mx-0 mx-auto">
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
      <div className="h-screen w-full text-white flex flex-col p-10 mt-10">
        <p className="font-inter font-normal text-xl h-6 w-28 lg:mx-5 md:mx-5 mx-0 mb-3">ABOUT US</p>

        {/* Parent div */}
        <div className="lg:flex md:flex flex-row-reverse">
          {/* photo */}
          <div className="w-full lg:w-1/2 md:w-1/2 p-2">
            <Image
              height={400}
              width={600}
              src="images/img_group.svg"
              alt=""
              className=""
            />
          </div>
          {/* Text */}
          <div className="lg:w-1/2 md:w-1/2 w-auto flex flex-col gap-4 mt-5 text-justify">
            <div className="lg:h-24 lg:w-[90%] md:w-[90%] h-auto w-auto font-inter font-bold lg:text-2xl text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="h-56 lg:w-[90%] md:w-[90%] w-auto font-inter font-bold lg:text-2xl text-base">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="mx-5 ">
          <button className="border-2 w-auto px-5 h-14 hidden lg:block md:block ">MEET THE TEAM</button>
        </div>
      </div>

      {/* recent Events */}
      <div className="h-auto w-full">
        <h1 className="mx-auto my-20 h-9 w-auto font-roboto font-bold text-4xl text-center tracking-wider">
          RECENT EVENTS
        </h1>
        <RecentEvent />
        <RecentEvent />
      </div>

      {/* Gallery */}
      <div>
        <h1 className="mx-auto my-20 h-9 w-auto font-roboto font-bold text-4xl text-center tracking-wider">
          GALLERY
        </h1>

        <div className="w-full flex flex-row items-center lg:mx-0 md:mx-0 mx-auto justify-evenly overflow-hidden h-screen px-5">
          <div className="lg:visible mg:visible hidden">
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
          <div className="lg:visible mg:visible hidden">
            <GalleryImage
              images={imagesColumn3}
              animation="animate-scrollTopBottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
