import React from "react";

const Navbar = () => {
  return (
    <div className="text-white w-full h-20 flex justify-between px-10">
      <div className="flex items-center gap-2 mt-2">
        <div className="">
          <img src="images/logo_navbar.svg" alt="Logo" />
        </div>
        <div>
          <p className="font-inter text-xs font-medium">CODERS.DYP</p>
        </div>
      </div>

      <div className="w-96 my-auto">
        <ul className="flex justify-between font-inter font-medium text-base">
          <a href="/">
            <li>HOME</li>
          </a>
          <a href="team">
            <li>TEAM</li>
          </a>
          <a href="events">
            <li>EVENTS</li>
          </a>
          <a href="newsletter">
            <li>NEWSLETTER</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
