
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="w-full h-screen pt-20">
      <div className="text-white flex flex-col items-center">
        <div className="flex flex-col text-center my-16">
          <div className="w-8 h-3 font-normal text-xl font-leckerli">The</div>
          <div className="p-0 w-72 h-24 font-lato font-semibold text-8xl">
            ECHO
          </div>
          <div className="w-auto h-5 font-lemonmilk font-normal text-sm tracking-extra-widest mx-auto">
            WEEKLY NEWSLETTER
          </div>
        </div>

        <div className="my-10 mb-40 flex gap-5 h-40 w-auto justify-between">
          <div className="h-44 w-[418px] font-lemonmilk font-thin text-6xl leading-snug">
            NEWSLETTER SIGNUP
          </div>
          <div className="flex items-end">
            <form action="">
              <input
                name=""
                id=""
                placeholder="Email address"
                className="w-96 h-6 border-b-2 border-white bg-transparent text-white"
              ></input>
            </form>
          </div>
          <div className="flex items-end">
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
  );
};

export default index;
