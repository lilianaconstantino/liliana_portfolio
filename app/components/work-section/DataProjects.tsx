"use client";
import React, { useEffect, useState } from "react";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function DataProjects() {
  const { setSectionInView } = useView();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const dataProjects = [
    {
      title: "San Francisco Crime Data Analysis",
      gitLink: "https://github.com/lilianaconstantino/sf-crime-analysis",
      liveLink: "",
      problem:
        "Analyze crime trends across San Francisco to identify high-risk areas and seasonal patterns.",
      insight:
        "Theft-related crimes peak during summer months, especially in downtown areas with high foot traffic.",
      stack: ["Python", "Pandas", "SQL", "Tableau"],
      charts: [
        { src: "/heatchart.png", title: "Crime Activity Heatmap" },
        { src: "/bydistrict.png", title: "Crime by Police District" },
        { src: "/crime_over_time.png", title: "Crime Trends Over Time" },
      ],
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("data");
  }, [inView, setSectionInView]);

  return (
    <section
      ref={ref}
      id="data"
      className="font-quiverleaf flex flex-col gap-6 pt-[110px] text-[#C1E899]"
    >
      <h2 className="font-ekamai text-[45px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
        DATA PROJECTS
      </h2>

      <div className="flex flex-col gap-4">
        {dataProjects.map((project, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="rounded-[20px] bg-white/10 backdrop-blur-md p-5 transition-all duration-500"
            >
              {/* 🔹 Top Row */}
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70">
                    {project.stack.join(" • ")}
                  </p>
                  <p className="text-sm md:text-base text-white/70 mt-2 max-w-xl">
                    An exploratory data analysis project examining crime trends
                    across police districts using SQL, Python, and Tableau.
                  </p>
                </div>

                {/* Toggle Icon */}
                <div className="text-3xl">
                  <Icon icon={isOpen ? "mdi:minus" : "mdi:plus"} />
                </div>
              </div>

              {/* 🔥 Expanded Section */}
              {isOpen && (
                <div className="mt-5 flex flex-col gap-4 animate-fadeIn">
                  {/* Text Sections */}
                  <div className="text-white/90 space-y-3">
                    <p>
                      <span className="font-bold text-[#C1E899]">
                        Project Overview:
                      </span>{" "}
                      {project.problem}
                    </p>

                    <p>
                      <span className="font-bold text-[#C1E899]">
                        Tools & Technologies:
                      </span>{" "}
                      {project.stack.join(", ")}
                    </p>

                    <p>
                      <span className="font-bold text-[#C1E899]">
                        Key Insight:
                      </span>{" "}
                      {project.insight}
                    </p>
                  </div>

                  {/* 📊 Charts Section */}
                  <div className="mt-5 grid md:grid-cols-2 gap-4">
                    {project.charts.map((chart, i) => (
                      <div key={i}>
                        <p className="text-sm text-white/70 mb-1">
                          {chart.title}
                        </p>
                        <Image
                          src={chart.src}
                          alt={chart.title}
                          width={1200}
                          height={675}
                          className="rounded-xl w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* 🔗 Links */}
                  <div className="flex gap-3 mt-4">
                    {project.gitLink && (
                      <a
                        href={project.gitLink}
                        target="_blank"
                        className="px-4 py-2 border border-[#C1E899] rounded-lg hover:bg-[#C1E899] hover:text-black transition"
                      >
                        GitHub
                      </a>
                    )}

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="px-4 py-2 border border-[#C1E899] rounded-lg hover:bg-[#C1E899] hover:text-black transition"
                      >
                        Live Dashboard
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}