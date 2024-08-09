import { useEffect } from "react";
import gsap from "gsap";

const colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];
const wrap = gsap.utils.wrap(-100, 400);

const BoxScroller: React.FC = () => {
  useEffect(() => {
    // Initially colorize each box and position in a row
    gsap.set(".box", {
      backgroundColor: (i: number) => colors[i % colors.length],
      y: (i: number) => -(i * 50),
    });

    gsap.to(".box", {
      duration: 5,
      ease: "none",
      y: "+=500", // move each box 500px to top
      modifiers: {
        y: gsap.utils.unitize(wrap), // force y value to wrap when it reaches -100
      },
      repeat: -1,
    });

    // Toggle overflow
    const overflow = document.querySelector("#overflow") as HTMLInputElement;
    overflow.addEventListener("change", applyOverflow);

    function applyOverflow() {
      if (overflow.checked) {
        gsap.set(".wrapper", { overflow: "visible" });
      } else {
        gsap.set(".wrapper", { overflow: "hidden" });
      }
    }

    return () => {
      overflow.removeEventListener("change", applyOverflow);
    };
  }, []);

  return (
    <div className="text-center my-5">
      <div className="nav">
        <label className="text-white text-lg">
          <input type="checkbox" name="overflow" id="overflow" value="1" /> Show overflow
        </label>
      </div>
      <div className="wrapper h-[400px] w-[50px] relative mx-auto bg-gray-300 overflow-hidden">
        <div className="boxes relative -bottom-[50px]">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="box h-[50px] w-[50px] absolute text-[25px] leading-[50px] text-center"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxScroller;
