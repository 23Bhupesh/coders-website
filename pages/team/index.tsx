import React from "react";
import Team2023Data from "../../Team2023Data";
import FacultyData from "../../FacultyData";
// import FoundingTeamData from "../(components)/FoundingTeamData";
import Image from "next/image";
import Link from "next/link";
import ImgCard from "@/components/ImgCard";

const index = () => {
  return (
    <div className="font-lemonmilk text-white">
      {/* headline div */}
      <div className="h-screen w-full flex justify-center items-center">
        <p className=" w-[75%] h-64 leading-tight text-center flex justify-center items-center font-bold text-8xl ">
          PEOPLE WHO LEAD OUR COMMUNITY
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
            <Image
              height={256}
              width={256}
              src="images/harsh_img.svg"
              alt=""
              className="h-64 w-64"
            />
            <div className="flex flex-col items-center h-4">
              <p className="font-bold text-base my-1">Harsh Bhattad</p>
              <Link href="">
                <Image
                  src="images/linkedin.svg"
                  height={20}
                  width={20}
                  alt=""
                  className="h-5 w-5"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="images/preteek_img.svg"
              height={320}
              width={320}
              alt=""
              className="h-80 w-80"
            />
            <div className="flex flex-col items-center h-4">
              <p className="font-bold text-base my-1">Prateek Meshram</p>
              <Link href="">
                <Image
                  src="images/linkedin.svg"
                  height={20}
                  width={20}
                  alt=""
                  className="h-5 w-5"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="images/devarshi_img.svg"
              height={256}
              width={256}
              alt=""
              className="h-64 w-64"
            />
            <div className="flex flex-col items-center h-4">
              <p className="font-bold text-base my-1">Devarshi Mahajan</p>
              <Link href="">
                <Image
                  src="images/linkedin.svg"
                  height={20}
                  width={20}
                  alt=""
                  className="h-5 w-5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty coordinators division */}
      <div className="w-full my-10">
        <div className="flex justify-center my-10">
          <Image
            height={78}
            width={59}
            src="images/heading_left_design.svg"
            alt=""
            className="mx-4"
          />
          <p className="font-bold text-6xl flex justify-center">
            faculty coordinators
          </p>
          <Image
            height={78}
            width={59}
            src="images/heading_right_design.svg"
            alt=""
            className="mx-4"
          />
        </div>

        {/* faculty images */}
        {Array.from({ length: 6 }, (_, rowIndex) => (
          <div className="flex justify-center gap-4 " key={rowIndex}>
            {FacultyData.slice(rowIndex * 5 + 0, rowIndex * 5 + 5).map(
              (person : any, index : number) => (
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

      {/* Team 2023 division*/}
      <div className="flex justify-center mt-28">
        <Image
          height={78}
          width={59}
          src="images/heading_left_design.svg"
          alt=""
          className="mx-4"
        />
        <p className="font-bold text-6xl flex justify-center">our team 2023</p>
        <Image
          height={78}
          width={59}
          src="images/heading_right_design.svg"
          alt=""
          className="mx-4"
        />
      </div>

      {/* Team Images */}
      <div className="my-10">
        {/* row_1 */}
        {/* <div className="flex gap-5 justify-center mb-10">
            {ImgCardData.slice(0, 5).map((e : any) => (
              <ImageCard
                img={e.img}
                name={e.name}
                domain={e.domain}
                linkedin={e.linkedin}
              />
            ))}
          </div> */}

        {/* row_2 */}
        {/* <div className="flex gap-5 justify-center mb-10">
            {ImgCardData.slice(5, 10).map((e : any) => (
              <ImageCard
                img={e.img}
                name={e.name}
                domain={e.domain}
                linkedin={e.linkedin}
              />
            ))}
          </div> */}

        {/* row_3 */}
        {/* <div className="flex gap-5 justify-center mb-10">
            {ImgCardData.slice(10, 15).map((e : any) => (
              <ImageCard
                img={e.img}
                name={e.name}
                domain={e.domain}
                linkedin={e.linkedin}
              />
            ))}
          </div> */}

        {/* row_4 */}
        {/* <div className="flex gap-5 justify-center mb-10">
            {ImgCardData.slice(15, 20).map((e : any) => (
              <ImageCard
                img={e.img}
                name={e.name}
                domain={e.domain}
                linkedin={e.linkedin}
              />
            ))}
          </div> */}

        {/* row_5 */}
        {/* <div className="flex gap-5 justify-center mb-10">
            {ImgCardData.slice(20, 25).map((e : any) => (
              <ImageCard
                img={e.img}
                name={e.name}
                domain={e.domain}
                linkedin={e.linkedin}
              />
            ))}
          </div> */}

        {/* row_6 */}
        {/* <div className="flex gap-5 justify-center mb-10">
            {ImgCardData.slice(25, 29).map((e : any) => (
              <ImageCard
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
              (person : any, index: number) => (
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
      <div className="flex justify-center mt-28 ">
        <Image
          height={78}
          width={59}
          src="images/heading_left_design.svg"
          alt=""
          className="mx-4"
        />
        <p className="font-bold text-6xl flex justify-center ">founding team</p>
        <Image
          height={78}
          width={59}
          src="images/heading_right_design.svg"
          alt=""
          className="mx-4"
        />
      </div>
      <div className="mt-10 mb-28">
        {Array.from({ length: 6 }, (_, rowIndex) => (
          <div className="flex justify-center gap-4 mb-10" key={rowIndex}>
            {Team2023Data.slice(rowIndex * 5 + 0, rowIndex * 5 + 5).map(
              (person : any, index : number) => (
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
