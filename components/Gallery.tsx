import Image from "next/image";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div className="h-screen w-full flex">
      <div className="flex flex-col justify-around items-center w-1/3">
        <Marquee gradient={true} gradientWidth={50} gradientColor="black" speed={100} direction="up" className="h-[100%] w-full">
          <Image className="mx-0 my-[-25px]" height={200} width={350} src="/images/img_gall_col_1_1.png" alt="Event 1" />
          <Image className="mx-0 my-[-25px]" height={200} width={350} src="/images/img_gall_col_1_2.png" alt="Event 2" />
          <Image className="mx-0 my-[-25px]" height={200} width={350} src="/images/img_gall_col_1_3.png" alt="Event 3" />
          <Image className="mx-0 my-[-25px]" height={200} width={350} src="/images/img_gall_col_1_4.png" alt="Event 4" />
          <Image className="mx-0 my-[-25px]" height={200} width={350} src="/images/img_gall_col_1_5.jpg" alt="Event 5" />
        </Marquee>
      </div>

      <div className="flex flex-col justify-around items-center w-1/3">
        <Marquee gradient={true} gradientWidth={100} gradientColor="black"  speed={100} direction="down" className="h-[100%] w-full">
          <Image className="mx-0 my-[-5px]" height={200} width={350} src="/images/img_gall_col_2_1.png" alt="Event 1" />
          <Image className="mx-0 my-[-5px]" height={200} width={350} src="/images/img_gall_col_2_2.png" alt="Event 2" />
          <Image className="mx-0 my-[-5px]" height={200} width={350} src="/images/img_gall_col_2_3.png" alt="Event 3" />
          <Image className="mx-0 my-[-5px]" height={200} width={350} src="/images/img_gall_col_2_4.png" alt="Event 4" />
        </Marquee>
      </div>

      <div className="flex flex-col justify-around items-center w-1/3">
        <Marquee gradient={true} gradientWidth={150} gradientColor="black"  speed={100} direction="up" className="h-[100%] w-full">
          <Image className="mx-0 my-[-5px]" height={200} width={350} src="/images/img_gall_col_3_2.png" alt="Event 1" />
          <Image className="mx-0 my-[-5px]" height={200} width={350} src="/images/img_gall_col_3_3.png" alt="Event 2" />
          <Image className="mx-0 my-[-5px]" height={200} width={350} src="/images/img_gall_col_3_4.png" alt="Event 3" />
          <Image className="mx-0 my-[-5px]" height={200} width={350} src="/images/img_gall_col_3_1.png" alt="Event 4" />
          <Image className="mx-0 my-[-5px]" height={200} width={350} src="/images/img_gall_col_3_5.jpg" alt="Event 5" />
          <Image className="mx-0 my-[-5px]" height={200} width={350} src="/images/img_gall_col_3_6.jpeg" alt="Event 6" />
        </Marquee>
      </div>
    </div>
  );
};

export default Gallery;
