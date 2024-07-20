import React, { useEffect } from 'react';

const coords = { x: 0, y: 0 };
const colors = ["#ffffff"];

const CircleAnimation = () => {
  useEffect(() => {
    const circles = document.querySelectorAll<HTMLElement>(".circle");

    circles.forEach((circle, index) => {
      (circle as any).x = 0;
      (circle as any).y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e: MouseEvent) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        (circle as any).x = x;
        (circle as any).y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += ((nextCircle as any).x - x) * 0.6;
        y += ((nextCircle as any).y - y) * 0.6;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className='circle bg-black'></div>
      ))}
    </div>
  );
};

export default CircleAnimation;
