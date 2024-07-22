
import EventCarousel from "@/components/EventCarousel";
import RecentEvent from "@/components/RecentEvent";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="text-white pt-20 w-full">
      <div className="h-auto w-full">
        {/* <div className="h-auto w-[90%] mx-auto relative flex flex-col items-center">
          <Image
            height={560}
            width={1300}
            src="/images/img_event_head.svg"
            alt="Image"
          />
          <div className="absolute bottom-5 h-auto w-auto font-lemonmilk font-bold">
            <p className="text-right text-xl tracking-wider">
              A timeline worth watching
            </p>
            <h1 className="text-7xl">Our Coders Chronicles</h1>
          </div>
        </div> */}
        <div className="w-full h-auto">
          <h1 className="mx-auto my-10 mb-10 h-9 w-auto font-lemonmilk font-bold lg:text-5xl md:text-4xl text-2xl text-center tracking-wider">
            RECENT EVENTS
          </h1>
        </div>
        <RecentEvent />
        <RecentEvent />
        <RecentEvent />
        <RecentEvent />
      </div>
      {/* More events */}
      <div>
        <EventCarousel />
      </div>
      {/* statement */}
      <div className="w-full h-auto flex items-center">
        <p className="w-auto mx-auto font-lemonmilk font-bold text-xl text-center tracking-normal">“One of my most productive days was throwing away 1000 lines of code”</p>
      </div>
    </div>
  );
};

export default index;
