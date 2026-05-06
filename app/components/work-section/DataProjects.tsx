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
      { src: "/heatchart.png", 
        title: "Crime Activity Heatmap",
        description: "This heatmap highlights areas with the highest concentration of reported crimes, with downtown regions showing the most activity.",
      },
      { src: "/crimebypolice.png", 
        title: "Crime by Police District",
        description: "Certain districts consistently report higher crime rates, suggesting geographic concentration of incidents.",
      },
      { src: "/topcrimecategories.png", 
        title: "Crime Trends Over Time",
        description: "Theft-related crimes dominate across all time periods, with noticeable spikes during summer months.",
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
      className="min-h-[100dvh] pt-24 pb-10 text-[#C1E899] scroll-mt-24"
    >
    <div className="w-full max-w-[90%] xl:max-w-[1223px] mx-auto px-6 flex flex-col gap-6 md:gap-5">

    <h2 className="pt-10 font-ekamai text-[45px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
      DATA PROJECTS
    </h2>
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
                  <p className="md:text-lg text-white/70">
                    {project.overview}
                  </p>
                  <p className="md:text-lg text-white/70">
                    {project.stack.join(" • ")}
                  </p>
                </div>

                {/* Toggle Icon */}
                <div className="text-3xl">
                  <Icon icon={isOpen ? "mdi:minus" : "mdi:plus"} />
                </div>
              </div>

              {/* 🔥 Expanded Section */}
           {isOpen && (
  <div className="mt-6 flex flex-col gap-6 animate-fadeIn">

    {/* 🎯 Problem */}
    <div>
      <h4 className="font-semibold md:text-lg text-[#C1E899]">Problem</h4>
      <p className="text-base md:text-lg text-white/90">{project.problem}</p>
    </div>

    {/* ⚙️ Approach */}
    <div>
      <h4 className="font-semibold md:text-lg text-[#C1E899]">Approach</h4>
      <p className="text-base md:text-lg text-white/90">{project.approach}</p>
    </div>

    {/* 💡 Key Insights */}
    <div>
      <h4 className="font-semibold md:text-lg text-[#C1E899]">Key Insights</h4>
      <ul className="list-disc ml-5 text-base md:text-lg text-white/90 mt-2 space-y-1">
        {project.insights.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>

    {/* 🛠 Tools */}
    <div>
      <h4 className="font-semibold md:text-lg text-[#C1E899]">Tools & Technologies</h4>
      <p className="text-base md:text-lg text-white/90 mt-1">{project.stack.join(", ")}</p>
    </div>

    {/* 📊 Charts */}
    <div className="flex flex-col gap-10">
    {project.charts.map((chart, i) => (
      <div key={i} className="text-center">
      
      {/* Title */}
      <p className="text-lg md:text-xl font-semibold text-white mb-3">
        {chart.title}
      </p>

      {/* Image */}
      <Image
        src={chart.src}
        alt={chart.title}
        width={1200}
        height={675}
        className="w-[80%] max-w-2xl mx-auto h-auto object-contain"
      />

      {/* Description */}
      <p className="mt-3 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
        {chart.description}
      </p>

    </div>
  ))}
</div>

    {/* 🔗 Links */}
    <div className="flex gap-3 mt-2">
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
    </section>
  );
}