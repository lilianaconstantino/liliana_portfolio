"use client";
import React from "react";
import { Syne } from "next/font/google";
import { useSectionInView } from "@/hooks/useSectionInView";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";
import Container from "../Container/Container";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { ref } = useSectionInView("about", 0.2);

  return (
    <section
      id="about"
      ref={ref}
      className="font-quiverleaf pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16 text-[#C1E899] scroll-mt-28"
    >
      <Container>

        {/* TITLE */}
        <AnimatedTitle
          wordSpace="mr-[14px]"
          charSpace="mr-[0.001em]"
          style={{ color: "#C1E899" }}
          className="font-ekamai text-[40px] sm:text-[45px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8 md:mb-10"
        >
          ABOUT
        </AnimatedTitle>

        {/* MAIN CONTENT */}
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-10 lg:gap-12">

          {/* TEXT SECTION */}
          <div className="flex-1 flex flex-col gap-5 md:gap-6">

            <AnimatedBody className="text-[#FCE0CE] text-[1rem] sm:text-[1.05rem] md:text-[1.1rem] leading-relaxed">
              I’m Liliana Constantino, a data-focused developer with a background in web development and data analytics.
              I enjoy working with data to uncover insights, solve problems, and build thoughtful, user-centered solutions.
            </AnimatedBody>

            <AnimatedBody className="text-[#FCE0CE] text-[1rem] sm:text-[1.05rem] md:text-[1.1rem] leading-relaxed">
              I was first introduced to coding through a data analytics fellowship, where I worked with real-world datasets to identify trends and communicate insights.
              That experience sparked my interest in data and pushed me to continue developing my technical skills.
            </AnimatedBody>

            <AnimatedBody className="text-[#FCE0CE] text-[1rem] sm:text-[1.05rem] md:text-[1.1rem] leading-relaxed">
              Since then, I’ve gained hands-on experience through a web development internship at a nonprofit, where I built applications and strengthened my foundation in problem-solving, collaboration, and writing clean, maintainable code.
              More recently, I’ve been focusing on SQL, Python, and data analysis as I work toward transitioning into a technical role in data.
            </AnimatedBody>

            <AnimatedBody className="text-[#FCE0CE] text-[1rem] sm:text-[1.05rem] md:text-[1.1rem] leading-relaxed">
              Outside of tech, I enjoy going to the gym regularly and love traveling and experiencing new places.
              These parts of my life keep me grounded, curious, and constantly learning, which I bring into my work as well.
            </AnimatedBody>

            <AnimatedBody className="text-[#FCE0CE] text-[1rem] sm:text-[1.05rem] md:text-[1.1rem] leading-relaxed">
              I’m especially motivated to contribute to greater representation of Latinas in tech and hope to grow into a role where I can build data systems that support informed decision-making and create meaningful impact.
            </AnimatedBody>

          </div>

          {/* IMAGE SECTION */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">

            <div className="grid grid-cols-2 gap-4 w-full max-w-[460px]">

              {/* BIG IMAGE */}
              <img
                src="/capri2.JPG"
                alt="Liliana 1"
                className="col-span-2 h-[220px] sm:h-[250px] md:h-[280px] w-full object-cover rounded-2xl shadow-lg border border-white/10 transition-transform duration-300 hover:scale-[1.03]"
              />

              {/* SMALL IMAGES */}
              <img
                src="/barcelonaPark.jpeg"
                alt="Liliana 2"
                className="h-[150px] sm:h-[170px] md:h-[190px] w-full object-cover rounded-2xl shadow-lg border border-white/10 transition-transform duration-300 hover:scale-[1.03]"
              />

              <img
                src="/italy.JPG"
                alt="Liliana 3"
                className="h-[150px] sm:h-[170px] md:h-[190px] w-full object-cover rounded-2xl shadow-lg border border-white/10 transition-transform duration-300 hover:scale-[1.03]"
              />

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}