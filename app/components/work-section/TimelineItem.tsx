"use client";
import Image from "next/image";
import React from "react";
import styles from "./TimelineItem.module.css";
import "intersection-observer";
import { useInView } from "react-intersection-observer";

export default function TimelineItem({
  companyImg,
  jobTitle,
  company,
  jobType,
  duration,
  stuffIDid,
}: {
  companyImg: string;
  jobTitle: string;
  company: string;
  jobType: string;
  duration: string;
  stuffIDid: string[];
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-60px 0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`relative duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
        <div className="grid grid-cols-5 sm:flex items-start gap-4 pl-1 sm:pl-4">
          <Image
            src={companyImg}
            width={65}
            height={65}
            alt="company-image"
            className="col-span-1"
          />

          {/* Text Section */}
          <div className={`${styles.timeline} col-span-4`}>
            <div className="leading-tight">
              <h1 className="font-quiverleaf text-white text-2xl sm:text-[2rem] font-bold">
                {jobTitle}
              </h1>

              <p className="font-quiverleaf text-white text-2xl sm:text-[1.3rem] font-bold my-2 sm:my-3">
                {company} | {jobType}
              </p>
            </div>

            <p className="font-quiverleaf text-white text-2xl sm:text-[1.3rem] my-3">
              {duration}
            </p>

            <ul className="space-y-2 text-white/80">
              {stuffIDid.map((stuff, index) => (
                <li key={index}>{stuff}</li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  );
}
