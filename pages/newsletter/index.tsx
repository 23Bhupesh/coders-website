import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen pt-20">
        <div className="text-white flex flex-col items-center">
          <div className="flex flex-col text-center my-16 mx-auto">
            <div className="w-8 h-3 font-normal text-xl font-leckerli">The</div>
            <div className="p-0 w-72 h-24 font-lato font-semibold text-8xl">
              ECHO
            </div>
            <div className="w-auto h-5 font-lemonmilk font-normal text-sm tracking-extra-widest mx-auto">
              WEEKLY NEWSLETTER
            </div>
          </div>

          <div className="my-10 mb-40 lg:flex md:flex lg:gap-5 md:gap-5 h-40 w-auto lg:justify-between md:justify-around justify-center">
            <div className="lg:h-40 md:h-40 h-28 lg:w-[29%] md:w-[29%] w-[75%] mx-auto lg:mx-0 md:mx-0 font-lemonmilk font-thin lg:text-6xl md:text-6xl text-4xl lg:leading-normal md:leading-normal lg:text-left md:text-left text-center">
              NEWSLETTER SIGNUP
            </div>
            <div className="flex justify-center items-end mx-auto">
              <form action="">
                <input
                  name=""
                  id=""
                  placeholder="Email address"
                  className="lg:w-96 md:w-80 w-64 lg:mx-0 md:mx-0 mx-auto h-6 border-b-2 bg-transparent text-white"
                ></input>
              </form>
            </div>
            <div className="flex justify-center lg:my-0 md:my-0 my-5 items-end">
              <button className="h-14 w-20 rounded-sm border-2">
                <Image
                  height={14}
                  width={32}
                  src="images/arrow_button.svg"
                  alt="Next"
                  className="m-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
