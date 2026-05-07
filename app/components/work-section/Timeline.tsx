"use client";
import React from "react";
import { useSectionInView } from "@/hooks/useSectionInView";
import TimelineItem from "./TimelineItem";
import { TimelineData } from "./TimelineData";
import Container from "../Container/Container";

export default function Timeline() {
  const { ref } = useSectionInView("experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="font-quiverleaf pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16 text-[#C1E899] scroll-mt-28"
    >
      <Container>

        {/* TITLE */}
        <h2 className="font-ekamai text-[40px] sm:text-[45px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8 md:mb-10">
          EXPERIENCE
        </h2>

        {/* TIMELINE CONTAINER */}
        <div
          className="
            w-full
            rounded-[20px]
            std-backdrop-blur
            backdrop-blur-md
            bg-linear-to-r
            from-[#d9d9d91f]
            to-[#7373731f]
            p-5 sm:p-6 md:p-8
            text-white
          "
        >

          {/* TIMELINE ITEMS */}
          <div className="flex flex-col gap-10 md:gap-12">

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

      </Container>
    </section>
  );
}