import React from "react";
import Team2023Data from "../(components)/Team2023Data";
import ImgCard from "../(components)/ImgCard";
import FacultyData from "../(components)/FacultyData";
import FoundingTeamData from "../(components)/FoundingTeamData";

const index = () => {
  return (
    <div className="font-lemonmilk text-white">
      {/* headline div */}
      <div className="h-screen w-full flex justify-center items-center">
        <p className=" w-[74%] h-64 leading-tight text-center flex justify-center items-center font-bold text-8xl ">
          PEOPLE HOW LEAD OUR COMMUNITY
        </p>
      </div>

      {/* Our_Megaminds div */}
      <div className="h-screen w-full">
        {/* font */}
        <div className="w-[46%] h-24 flex justify-center items-center mx-auto">
          <p className="font-bold text-6xl flex justify-center">
            OUR MEGAMINDS
          </p>
        </div>

        {/* images */}
        <div className="flex justify-center gap-7 my-10 items-center">
          <div className="flex flex-col gap-2">
            <img src="images/harsh_img.svg" alt="" className="h-64 w-64" />
            <div className="flex flex-col items-center h-4">
              <p className="font-bold text-base my-1">Harsh Bhattad</p>
              <a href="">
                <img src="images/linkedin.svg" alt="" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img src="images/preteek_img.svg" alt="" className="h-80 w-80" />
            <div className="flex flex-col items-center h-4">
              <p className="font-bold text-base my-1">Prateek Meshram</p>
              <a href="">
                <img src="images/linkedin.svg" alt="" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img src="images/devarshi_img.svg" alt="" className="h-64 w-64" />
            <div className="flex flex-col items-center h-4">
              <p className="font-bold text-base my-1">Devarshi Mahajan</p>
              <a href="">
                <img src="images/linkedin.svg" alt="" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty coordinators division */}
      <div className="w-full my-10">
        <div className="flex justify-center my-10">
          <img src="images/heading_left_design.svg" alt="" className="mx-4" />
          <p className="font-bold text-6xl flex justify-center">
            faculty coordinators
          </p>
          <img src="images/heading_right_design.svg" alt="" className="mx-4" />
        </div>

        {/* faculty images */}
        <div className="flex justify-center gap-4 mt-20 mb-28">
          {FacultyData.map((e) => (
            <ImgCard
              img={e.img}
              name={e.name}
              domain={e.domain}
              linkedin={e.linkedin}
            />
          ))}
        </div>
      </div>

      {/* Team 2023 division*/}
      <div className="flex justify-center my-20">
        <img src="images/heading_left_design.svg" alt="" className="mx-4" />
        <p className="font-bold text-6xl flex justify-center">our team 2023</p>
        <img src="images/heading_right_design.svg" alt="" className="mx-4" />
      </div>

      {/* Team Images */}
      <div className="my-28">
        {/* row_1 */}
        {/* <div className="flex gap-5 justify-center mb-10">
            {ImgCardData.slice(0, 5).map((e) => (
              <ImgCard
                img={e.img}
                name={e.name}
                domain={e.domain}
                linkedin={e.linkedin}
              />
            ))}
          </div> */}

        {/* row_2 */}
        {/* <div className="flex gap-5 justify-center mb-10">
            {ImgCardData.slice(5, 10).map((e) => (
              <ImgCard
                img={e.img}
                name={e.name}
                domain={e.domain}
                linkedin={e.linkedin}
              />
            ))}
          </div> */}

        {/* row_3 */}
        {/* <div className="flex gap-5 justify-center mb-10">
            {ImgCardData.slice(10, 15).map((e) => (
              <ImgCard
                img={e.img}
                name={e.name}
                domain={e.domain}
                linkedin={e.linkedin}
              />
            ))}
          </div> */}

        {/* row_4 */}
        {/* <div className="flex gap-5 justify-center mb-10">
            {ImgCardData.slice(15, 20).map((e) => (
              <ImgCard
                img={e.img}
                name={e.name}
                domain={e.domain}
                linkedin={e.linkedin}
              />
            ))}
          </div> */}

        {/* row_5 */}
        {/* <div className="flex gap-5 justify-center mb-10">
            {ImgCardData.slice(20, 25).map((e) => (
              <ImgCard
                img={e.img}
                name={e.name}
                domain={e.domain}
                linkedin={e.linkedin}
              />
            ))}
          </div> */}

        {/* row_6 */}
        {/* <div className="flex gap-5 justify-center mb-10">
            {ImgCardData.slice(25, 29).map((e) => (
              <ImgCard
                img={e.img}
                name={e.name}
                domain={e.domain}
                linkedin={e.linkedin}
              />
            ))}
          </div> */}
        {Array.from({ length: 6 }, (_, rowIndex) => (
          <div className="flex justify-center gap-4 mb-10" key={rowIndex}>
            {Team2023Data.slice(rowIndex * 5 + 0, rowIndex * 5 + 5).map(
              (person, index) => (
                <ImgCard
                  key={index}
                  img={person.img}
                  name={person.name}
                  domain={person.domain}
                  linkedin={person.linkedin}
                />
              )
            )}
          </div>
        ))}
      </div>

      {/* Founding Team division */}
      <div className="flex justify-center my-28 ">
        <img src="images/heading_left_design.svg" alt="" className="mx-4" />
        <p className="font-bold text-6xl flex justify-center ">founding team</p>
        <img src="images/heading_right_design.svg" alt="" className="mx-4" />
      </div>
      <div className="my-20">
      {Array.from({ length: 6 }, (_, rowIndex) => (
          <div className="flex justify-center gap-4 mb-10" key={rowIndex}>
            {Team2023Data.slice(rowIndex * 5 + 0, rowIndex * 5 + 5).map(
              (person, index) => (
                <ImgCard
                  key={index}
                  img={person.img}
                  name={person.name}
                  domain={person.domain}
                  linkedin={person.linkedin}
                />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
