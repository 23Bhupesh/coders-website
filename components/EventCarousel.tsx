import Image from "next/image";
import Marquee from "react-fast-marquee";

const EventCarousel = () => {
  return (
    <div className="w-[100%] h-auto bg-[#ffffff] flex">
      <Marquee gradient={false} speed={100} pauseOnHover={true} className="flex items-center h-[100%]">
        <ul className=" flex items-center">
        <Image height={200} width={300} src="/images/img_event_01.png" alt="Event 1" />
        <Image height={200} width={300} src="/images/img_event_02.png" alt="Event 2" />
        <Image height={200} width={300} src="/images/img_event_03.png" alt="Event 3" />
        <Image height={200} width={300} src="/images/img_event_04.png" alt="Event 4" />
        <Image height={200} width={300} src="/images/img_event_02.png" alt="Event 2" />
        <Image height={200} width={300} src="/images/img_event_03.png" alt="Event 3" />
        <Image height={200} width={300} src="/images/img_event_04.png" alt="Event 4" />
        <Image height={200} width={300} src="/images/img_event_02.png" alt="Event 2" />
        <Image height={200} width={300} src="/images/img_event_03.png" alt="Event 3" />
        <Image height={200} width={300} src="/images/img_event_04.png" alt="Event 4" />
        <Image height={200} width={300} src="/images/img_event_02.png" alt="Event 2" />
        <Image height={200} width={300} src="/images/img_event_03.png" alt="Event 3" />
        <Image height={200} width={300} src="/images/img_event_04.png" alt="Event 4" />
        <Image height={200} width={300} src="/images/img_event_05.png" alt="Event 5" />
        </ul>
      </Marquee>
      </div>
  );
};

export default EventCarousel;
