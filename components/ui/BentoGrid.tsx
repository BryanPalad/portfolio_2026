"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const email = "paladbryanj@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-slate-200 bg-white text-slate-900 dark:border-transparent dark:bg-[linear-gradient(90deg,#04071d_0%,#0c0e23_100%)] dark:text-white",
        className
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-slate-600 dark:text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && (
            <div className="cursor-grab">
              <GlobeDemo />
            </div>
          )}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["React JS", "Next JS", "Typescript"].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-slate-100 px-3 py-2 text-center text-xs text-slate-700 opacity-70 dark:bg-[#10132E] dark:text-white lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
                <span className="rounded-lg bg-slate-100 px-3 py-4 text-center dark:bg-[#10132E]" />
              </div>

              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="rounded-lg bg-slate-100 px-3 py-4 text-center dark:bg-[#10132E]" />
                {["Vue JS", "Jest", "MySQL"].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-slate-100 px-3 py-2 text-center text-xs text-slate-700 opacity-70 dark:bg-[#10132E] dark:text-white lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
