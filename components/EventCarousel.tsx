import Image from "next/image";
import Marquee from "react-fast-marquee";
import DataCarouselImg from "../public/DataCarouselImg.js";

const EventCarousel = () => {
  console.log(DataCarouselImg)
  return (
    <div className="w-[100%] h-auto bg-[#ffffff] flex">
      <Marquee gradient={false} speed={200} pauseOnHover={true} className="flex items-center h-[100%]">
        <ul className=" flex items-center">
        {DataCarouselImg.map((e: any, index: number) => (
          <Image key={index} height={e.height} width={e.width} src={e.src} alt={e.alt} className=""/>
        ))}
        </ul>
      </Marquee>
      </div>
  );
};

export default EventCarousel;
