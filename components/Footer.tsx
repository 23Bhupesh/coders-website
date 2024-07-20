import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-44 text-white mt-40">
      {/* want to collaborate */}

      <div className="flex">
        <div className="mx-auto flex items-center">
          <Image src="images/collab_left.svg" height={35} width={25} alt="" />
          <div className="h-6 w-52 flex items-center">
            <p className="font-inter font-normal text-xl align-middle mx-auto">
              Want to Collaborate?
            </p>
          </div>
          <Image src="images/collab_right.svg" height={35} width={25} alt="" />
        </div>
      </div>

      {/*let's chat*/}

      <div className="flex my-12">
        <p className="mx-auto font-inter font-semibold text-9xl">Let&apos;s Chat</p>
      </div>

      {/* contact us */}

      <div className="flex my-10">
        <button className="mx-auto border-2 rounded-full h-14 w-44 border-[#9747FF] font-inter font-normal text-base text-[#9747FF]">
          CONTACT US
        </button>
      </div>

      {/* side logo */}

      <div className="px-10">
        <div className="flex items-center gap-2 mt-2">
          <div className="">
            <Image src="images/logo_navbar.svg" height={52} width={50} alt="Logo" />
          </div>
          <div>
            <p className="font-inter text-xs font-medium">CODERS.DYP</p>
          </div>
        </div>
      </div>

      <div className="mt-6 border-[#E8E7EA] ">
        <hr />
      </div>

      {/* most active sentence */}

      <div className="flex p-10 justify-between">
        <div className="flex flex-col justify-between">
          <div className="h-14 w-80">
            <p className="font-inter font-normal text-xl leading-6">
              Coders.dyp is one of the most active clubs in whole Pune.
            </p>
          </div>
          {/* icons */}

          <div className="flex gap-2">
            <Link href="https://www.instagram.com/coders.dyp/" target="_blank" rel="noopener noreferrer">
              <Image src="images/instagram_icon.svg" width={48} height={48} alt="" className="h-12 w-12 hover:cursor-pointer" />
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <Image src="images/twitter_icon.svg" width={48} height={48} alt="" className="h-12 w-12 hover:cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/company/codersdyp/" target="_blank" rel="noopener noreferrer">
              <Image src="images/linkedin_icon.svg" width={48} height={48} alt="" className="h-12 w-12 hover:cursor-pointer" />
            </Link>
            <Link href="https://chat.whatsapp.com/Dy1BGZyP3cUFTgE7ioUWVo" target="_blank" rel="noopener noreferrer">
              <Image src="images/whatsapp_icon.svg" width={48} height={48} alt="" className="h-12 w-12 hover:cursor-pointer" />
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <Image src="images/youtube_icon.svg" width={48} height={48} alt="" className="h-12 w-12 hover:cursor-pointer border-[1.4px] border-[#E8E7EA] rounded-full" />
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <Image src="images/spotify_icon.svg" width={48} height={48} alt="" className="h-12 w-12 hover:cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* address */}
        <div className="text-right">
          <div className="h-20 w-96 font-inter font-normal text-xl leading-6">
            D. Y. Patil Educational Complex, Akurdi, Nigdi, Pimpri-Chinchwad,
            Maharashtra ,411035
          </div>
          <div className="font-inter font-normal text-xl leading-6 my-3">
            coders.club@dypiemr.com
          </div>
          <div className="font-inter font-normal text-xl leading-6 mt-2">
            +91-0000000000
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
