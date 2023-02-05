import React from "react";
import BlobHeader from "../assets/blob1.svg";
import BlobUnder from "../assets/blob2.svg";
import Bloby from "../assets/blob3.svg";
import userChart from "../assets/user-with-chart.svg";

export default function Home({ sectionRef }) {
  return (
    <section
      className="relative pt-44
     w-full"
      ref={sectionRef}
    >
      <img
        className="w-[900px] lg:w-[700px] absolute -z-10 -top-44 -left-[12rem] md:-top-[23rem] md:-left-[20rem]"
        src={BlobHeader}
        alt="blb"
      />
      <div className="w-full flex justify-end">
        <p className="md:w-[50%] lg:text-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facilis
          modi ex, perferendis architecto doloremque omnis exercitationem dolor
          deleniti esse officiis, recusandae voluptatibus quasi. Repellendus
          possimus minima dolores blanditiis minus.
        </p>
      </div>
      <div className="mt-20 flex justify-center md:justify-start  w-full">
        <div className="flex flex-col-reverse justify-center md:flex-col items-center gap-y-10">
          <p className="text-black font-light italic text-sm text-center">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          </p>
          <img className="w-[50%]" src={userChart} alt="user with chart" />
        </div>
      </div>
      <img
        className="w-[900px] lg:w-[700px] absolute -z-10 -bottom-44 -right-[12rem]"
        src={BlobUnder}
        alt="blb"
      />
      <img
        className="w-[50px] lg:w-[200px] absolute -z-10 bottom-16 right-7 md:bottom-[20rem] md:right-[10rem]"
        src={Bloby}
        alt="blb"
      />
      <img
        className="w-[50px] lg:w-[200px] absolute -z-10 -bottom-10 right-28 md:bottom-0 md:right-[24rem]"
        src={Bloby}
        alt="blb"
      />
    </section>
  );
}
