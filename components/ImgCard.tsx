import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ImgCardProps {
  img: string;
  name: string;
  domain: string;
  linkedin: string;
}

const ImgCard: React.FC<ImgCardProps> = (props) => {
  return (
    <div className="flex flex-col h-64 w-48 gap-2 text-white">
      <div className="relative">
        <Image src={props.img} width={200} height={200} alt="" className="rounded-2" />
        <Link
          href={props.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 right-2"
        >
          <Image
            height={16}
            width={16}
            src="/images/linkedin.svg"
            alt="LinkedIn"
          />
        </Link>
      </div>
      <div className="font-lemonmilk flex flex-col items-start">
        <h1 className="font-bold text-base">{props.name}</h1>
        <p className="font-medium text-sm">{props.domain}</p>
      </div>
    </div>
  );
};

export default ImgCard;
