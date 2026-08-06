import React from "react";
import { testimonials } from "@/data";
import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";

const Testimonials = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> my colleagues</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 ">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Testimonials;
