"use client";
import React from "react";
import { useSectionInView } from "@/hooks/useSectionInView"; 
import TimelineItem from "./TimelineItem";
import { TimelineData } from "./TimelineData";

export default function Timeline() {
  const { ref } = useSectionInView("experience"); 

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-[100dvh] flex flex-col gap-6 md:gap-5 pt-[110px] text-white"
    >
      {/* Title */}
      <h2
        className="
          font-ekamai 
          text-[45px] sm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl 
          leading-tight text-[#C1E899]
          -ml-[2px] sm:-ml-[4px] md:-ml-[6px]
        "
      >
        EXPERIENCE
      </h2>

      <div
        className="
          w-full
          rounded-[20px]
          std-backdrop-blur
          backdrop-blur-md
          bg-linear-to-r
          from-[#d9d9d91f]
          to-[#7373731f]
          p-6
          font-quiverleaf font-extrabold text-white 
          text-[clamp(1rem,2vw,1.2rem)]
        "
      >
        <div className="flex flex-col gap-12">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
