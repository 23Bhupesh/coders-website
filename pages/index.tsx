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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-white pt-20 overflow-hidden">
      <div className=" h-screen w-full flex flex-col justify-center items-center">
        <p className="w-[67%] h-6 font-inter font-medium text-xl flex flex-col">
          Hello people!
        </p>
        <h1 className="w-[67%] h-72 font-inter font-bold text-8xl leading-tight">
          We&apos;re Student&apos;s welface club.
        </h1>

        <div className="flex gap-2">
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
          <Link href="/" target="_blank" rel="noopener noreferrer">
            <Image
              src="images/twitter_icon.svg"
              width={48}
              height={48}
              alt=""
              className="h-12 w-12 hover:cursor-pointer"
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
          <Link href="/" target="_blank" rel="noopener noreferrer">
            <Image
              src="images/spotify_icon.svg"
              width={48}
              height={48}
              alt=""
              className="h-12 w-12 hover:cursor-pointer"
            />
          </Link>
        </div>
      </div>

      {/* Scrolling Divisions */}
      {/* Parent Div */}

      {/* <div className="relative h-96 font-roboto"> */}
        {/* <div className="marquee bg-[#E7E7E7] h-24 w-[100vw]">
          <ul className="h-24 marquee-content flex items-center font-normal text-3xl list-disc justify-between m-auto text-[#212121] custom-disc-color">
              <li className="w-[180px] pl-">UI/UX</li>
              <li className="w-[180px] pl-">MARKETING</li>
              <li className="w-[180px] pl-">HACKATHON</li>
              <li className="w-[180px] pl-">APPLICATIONS</li>
              <li className="w-[180px] pl-">STARTUP IDEAS</li>
          </ul>
        </div> */}
        <div className="z-20">
          <MarqueeComponent_1 />
        </div>
        <div className="bg-[#212121] h-[104px] w-[110%]">
          <ul className="h-24 flex items-center font-normal text-3xl list-disc justify-between m-auto text-white custom-disc-color">
            <li className="pl-6">HIGHER STUDIES</li>
            <li className="pl-6">CREATIVE DESIGN</li>
            <li className="pl-6">TEAMS</li>
            <li className="pl-6">START-UPS</li>
          </ul>
        </div>
      {/* </div> */}

      {/* About us */}
      <div className="h-screen w-full text-white flex flex-col p-10">
        <p className="font-inter font-normal text-xl h-6 w-28 mx-5">ABOUT US</p>

        {/* Parent div */}
        <div className="flex">
          {/* Text */}
          <div className="w-1/2 flex flex-col gap-4 p-5">
            <div className="h-24 w-[90%] font-inter font-bold text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="h-56 w-[90%] font-inter font-bold text-2xl">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </div>

          {/* photo */}
          <div className="w-1/2 p-5">
            <Image
              height={400}
              width={600}
              src="images/img_group.svg"
              alt=""
              className=""
            />
          </div>
        </div>
        {/* Button */}
        <div className="mx-5">
          <button className="border-2 w-44 h-14 ">MEET THE TEAM</button>
        </div>
      </div>

      {/* recent Events */}
      <div>
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

        <div className="flex flex-row justify-evenly overflow-hidden h-screen">
          <GalleryImage
            images={imagesColumn1}
            animation="animate-scrollTopBottom"
          />
          <GalleryImage
            images={imagesColumn2}
            reverse
            animation="animate-scrollBottomTop"
          />
          <GalleryImage
            images={imagesColumn3}
            animation="animate-scrollTopBottom"
          />
        </div>
      </div>
    </div>
  );
}
