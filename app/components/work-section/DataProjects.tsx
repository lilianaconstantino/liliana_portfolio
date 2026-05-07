"use client";
import React, { useEffect, useState } from "react";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Container from "../Container/Container";

export default function DataProjects() {
  const { setSectionInView } = useView();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const dataProjects = [
    {
      title: "San Francisco Crime Data Analysis",
      gitLink:
        "https://github.com/lilianaconstantino/sf-crime-analysis",
      liveLink: "",
      overview:
        "An exploratory data analysis project examining crime trends across San Francisco using public datasets.",
      problem:
        "Identify high-risk areas and understand how crime patterns change over time.",
      approach:
        "Cleaned and analyzed crime data using Python and SQL, then visualized trends and geographic patterns in Tableau.",
      insights: [
        "Crime rates increased by 18% in certain districts over a 2-year period",
        "Theft-related incidents made up the majority of reported cases",
        "Crime activity peaked during summer months in high foot-traffic areas",
      ],
      stack: ["Python", "Pandas", "SQL", "Tableau"],
      charts: [
        {
          src: "/heatchart.png",
          title: "Crime Activity Heatmap",
          description:
            "This heatmap highlights areas with the highest concentration of reported crimes, with downtown regions showing the most activity.",
        },
        {
          src: "/crimebypolice.png",
          title: "Crime by Police District",
          description:
            "Certain districts consistently report higher crime rates, suggesting geographic concentration of incidents.",
        },
        {
          src: "/topcrimecategories.png",
          title: "Crime Trends Over Time",
          description:
            "Theft-related crimes dominate across all time periods, with noticeable spikes during summer months.",
        },
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
      className="font-quiverleaf pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16 text-[#C1E899] scroll-mt-28"
    >
      <Container>

        {/* TITLE */}
        <h2 className="font-ekamai text-[40px] sm:text-[45px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8 md:mb-10">
          DATA PROJECTS
        </h2>

        {/* PROJECT LIST */}
        <div className="flex flex-col gap-5 md:gap-6">
          {dataProjects.map((project, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-[20px] bg-white/10 backdrop-blur-md p-5 md:p-6 transition-all duration-500"
              >

                {/* TOP ROW */}
                <div
                  className="flex items-start justify-between gap-4 cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
                      {project.overview}
                    </p>

                    <p className="mt-2 text-sm sm:text-base md:text-lg text-white/60">
                      {project.stack.join(" • ")}
                    </p>
                  </div>

                  {/* TOGGLE ICON */}
                  <div className="text-3xl shrink-0">
                    <Icon
                      icon={isOpen ? "mdi:minus" : "mdi:plus"}
                    />
                  </div>
                </div>

                {/* EXPANDED SECTION */}
                {isOpen && (
                  <div className="mt-8 flex flex-col gap-8 animate-fadeIn">

                    {/* PROBLEM */}
                    <div>
                      <h4 className="font-semibold text-lg md:text-xl text-[#C1E899] mb-2">
                        Problem
                      </h4>

                      <p className="text-base md:text-lg text-white/90 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* APPROACH */}
                    <div>
                      <h4 className="font-semibold text-lg md:text-xl text-[#C1E899] mb-2">
                        Approach
                      </h4>

                      <p className="text-base md:text-lg text-white/90 leading-relaxed">
                        {project.approach}
                      </p>
                    </div>

                    {/* INSIGHTS */}
                    <div>
                      <h4 className="font-semibold text-lg md:text-xl text-[#C1E899] mb-2">
                        Key Insights
                      </h4>

                      <ul className="list-disc ml-5 text-base md:text-lg text-white/90 space-y-2">
                        {project.insights.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* TOOLS */}
                    <div>
                      <h4 className="font-semibold text-lg md:text-xl text-[#C1E899] mb-2">
                        Tools & Technologies
                      </h4>

                      <p className="text-base md:text-lg text-white/90">
                        {project.stack.join(", ")}
                      </p>
                    </div>

                    {/* CHARTS */}
                    <div className="flex flex-col gap-12">
                      {project.charts.map((chart, i) => (
                        <div key={i} className="text-center">

                          {/* TITLE */}
                          <p className="text-lg md:text-xl font-semibold text-white mb-4">
                            {chart.title}
                          </p>

                          {/* IMAGE */}
                          <Image
                            src={chart.src}
                            alt={chart.title}
                            width={1200}
                            height={675}
                            className="w-full max-w-3xl mx-auto h-auto object-contain rounded-xl"
                          />

                          {/* DESCRIPTION */}
                          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                            {chart.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* LINKS */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <a
                        href={project.gitLink}
                        target="_blank"
                        className="px-4 py-2 border border-[#C1E899] rounded-lg hover:bg-[#C1E899] hover:text-black transition"
                      >
                        GitHub
                      </a>

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

      </Container>
    </section>
  );
}