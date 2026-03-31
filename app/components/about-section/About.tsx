"use client";
import React from "react";
import { Syne } from "next/font/google";
import { useSectionInView } from "@/hooks/useSectionInView"; 
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { ref } = useSectionInView("about", 0.2);

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-[100dvh] flex flex-col gap-6 md:gap-10 pt-[110px] text-[#E8E899]"
    >
      <AnimatedTitle
        wordSpace="mr-[14px]"
        charSpace="mr-[0.001em]"
        style={{ color: "#C1E899" }}
        className="
          font-ekamai 
          text-[45px] smm:text-[40px] 
          md:text-5xl lg:text-6xl xl:text-7xl 
          leading-tight text-[#C1E899]
        "
      >
        ABOUT
      </AnimatedTitle>

      <div className="max-w-5xl mx-auto space-y-6">
        <AnimatedBody className="font-quiverleaf font-semibold text-[#FCE0CE] text-xl sm:text-2xl lg:text-3xl leading-relaxed">
          Hello! I’m Liliana, and I’m passionate about making a difference through technology,
          education, and by expanding the representation of Latinos in fields where we are underrepresented.
        </AnimatedBody>

        <AnimatedBody className="font-quiverleaf font-semibold text-[#FCE0CE] text-xl sm:text-2xl lg:text-3xl leading-relaxed">
          My journey into tech began when I decided to pivot from a pre-law path to a technical career
          to challenge myself and prove that I could thrive in a constantly evolving field.
        </AnimatedBody>

        <AnimatedBody className="font-quiverleaf font-semibold text-[#FCE0CE] text-xl sm:text-2xl lg:text-3xl leading-relaxed">
          I was first introduced to coding during a data analytics fellowship, where I analyzed trends
          and patterns to uncover insights. After this experience, I continued exploring technical roles
          and began a year-long web development internship at a nonprofit organization. Both roles
          challenged me to think critically, solve problems creatively, and strengthen my technical skills.
        </AnimatedBody>

        <AnimatedBody className="font-quiverleaf font-semibold text-[#FCE0CE] text-xl sm:text-2xl lg:text-3xl leading-relaxed">
          As I continue to grow, my goal is not only to expand my technical expertise but also to help
          increase the representation of Latinas in tech.
        </AnimatedBody>
      </div>
    </section>
  );
}
