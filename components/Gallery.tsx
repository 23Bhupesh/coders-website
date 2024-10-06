import Image from "next/image";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div className="h-screen w-full flex">
      <div className="lg:flex md:flex flex-col justify-around items-center w-1/3 lg:visible md:visible hidden">
        <Marquee gradient={true} gradientWidth={50} gradientColor="black" speed={110} direction="up" className="h-[100%] w-full">
          <Image   height={200} width={350} src="/images/img_gall_col_1_1.png" alt="Event 1" />
          <Image   height={200} width={350} src="/images/img_gall_col_1_2.png" alt="Event 2" />
          <Image   height={200} width={350} src="/images/img_gall_col_1_3.png" alt="Event 3" />
          <Image   height={200} width={350} src="/images/img_gall_col_1_4.png" alt="Event 4" />
          <Image   height={200} width={350} src="/images/img_gall_col_1_5.jpg" alt="Event 5" />
        </Marquee>
      </div>

      <div className="lg:flex md:flex flex-col justify-around items-center w-1/3 lg:visible md:visible hidden">
        <Marquee gradient={true} gradientWidth={50} gradientColor="black"  speed={100} direction="down" className="h-[100%] w-full">
          <Image   height={200} width={350} src="/images/img_gall_col_2_1.png" alt="Event 1" />
          <Image   height={200} width={350} src="/images/img_gall_col_2_2.png" alt="Event 2" />
          <Image   height={200} width={350} src="/images/img_gall_col_2_3.png" alt="Event 3" />
          <Image   height={200} width={350} src="/images/img_gall_col_2_4.png" alt="Event 4" />
        </Marquee>
      </div>

      <div className="flex flex-col justify-around items-center lg:w-1/3 md:w-1/3 w-full">
        <Marquee gradient={true} gradientWidth={50} gradientColor="black"  speed={120} direction="up" className="h-[100%] w-full">
          <Image   height={200} width={350} src="/images/img_gall_col_3_2.png" alt="Event 1" />
          <Image   height={200} width={350} src="/images/img_gall_col_3_3.png" alt="Event 2" />
          <Image   height={200} width={350} src="/images/img_gall_col_3_4.png" alt="Event 3" />
          <Image   height={200} width={350} src="/images/img_gall_col_3_1.png" alt="Event 4" />
          <Image   height={200} width={350} src="/images/img_gall_col_3_5.jpg" alt="Event 5" />
          <Image   height={200} width={350} src="/images/img_gall_col_3_6.jpeg" alt="Event 6" />
        </Marquee>
      </div>
    </div>
  );
};

export default Gallery;
