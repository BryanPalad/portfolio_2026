import React from "react";
import { SpotlightNew } from "./ui/SpotlightNew";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import BryanPalad from "@/public/heroImg/BryanPalad2.png";

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <SpotlightNew />
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <Image priority={true} src={BryanPalad} alt="Bryan Palad" className="w-[150px] md:w-[200px] rounded-full bg-white shadow-xl"/>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Designs into Interactive User Interfaces"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m{" "}
            <span className="text-purple font-semibold">Bryan</span>, a Software
            Developer / Front-End Engineer based in Philippines.
          </p>

          <Link href="#projects">
            <MagicButton
              title="Show my projects"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
