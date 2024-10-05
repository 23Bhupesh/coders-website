import Image from "next/image";
import React from "react";

interface RecentEventProps {
  eventImage: string;
  eventName: string;
  eventDate: string;
  eventDescription: string;
}

const RecentEvent: React.FC<RecentEventProps> = (props) =>{
  return (
    <div className="h-auto w-full my-16">
      <div className="lg:flex md:flex lg:h-80 md:h-80 h-auto lg:w-[80%] md:w-[90%] w-[90%] gap-10 mx-auto lg:border-0 md:border-0 border p-2 rounded-lg">
        <Image
          src={props.eventImage}
          height={320}
          width={490}
          alt="Event Image"
          className="rounded-lg lg:mx-0 md:mx-0 mx-auto"
        />
        <div className="h-[100%] lg:w-[50%] md:w-[50%] w-[100%] flex flex-col justify-between">
          <div className="">
            <h1 className="font-bold lg:text-4xl text-2xl tracking-wide font-halfmoon lg:mt-0 md:mt-0 mt-2">{props.eventName}</h1>
            <p className="lg:font-bold font-normal text-base mb-2">{props.eventDate}</p>
          </div>
          <p className="font-semibold lg:text-lg text-base text-justify font-moshitomono lg:leading-6">
            {props.eventDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentEvent;
