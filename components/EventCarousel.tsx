import Image from "next/image";
import { useEffect, useRef } from "react";

const EventCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollWidth = carousel.scrollWidth / 2;
      let currentScroll = 0;
      const scrollSpeed = 2; // Adjust this value for different speeds

      const scroll = () => {
        currentScroll += scrollSpeed;
        if (currentScroll >= scrollWidth) {
          currentScroll = 0;
        }
        carousel.scrollLeft = currentScroll;
        requestAnimationFrame(scroll);
      };

      scroll();
    }
  }, []);

  return (
    <div className="relative overflow-hidden lg:h-64 md:h-64 h-auto my-10">
      <div
        ref={carouselRef}
        className="flex gap-3 whitespace-nowrap animate-scroll"
        style={{ width: "200%" }}
      >
        <Image height={200} width={300} src="/images/img_event_01.png" alt="Event 1" />
        <Image height={200} width={300} src="/images/img_event_02.png" alt="Event 2" />
        <Image height={200} width={300} src="/images/img_event_03.png" alt="Event 3" />
        <Image height={200} width={300} src="/images/img_event_04.png" alt="Event 4" />
        <Image height={200} width={300} src="/images/img_event_05.png" alt="Event 5" />
        <Image height={200} width={300} src="/images/img_event_01.png" alt="Event 1" />
        <Image height={200} width={300} src="/images/img_event_02.png" alt="Event 2" />
        <Image height={200} width={300} src="/images/img_event_03.png" alt="Event 3" />
        <Image height={200} width={300} src="/images/img_event_04.png" alt="Event 4" />
        <Image height={200} width={300} src="/images/img_event_05.png" alt="Event 5" />
      </div>
    </div>
  );
};

export default EventCarousel;
