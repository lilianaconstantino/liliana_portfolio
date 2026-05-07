import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import { useView } from "@/contexts/ViewContext";
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Container from "../Container/Container";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Spacio",
      gitLink: "https://github.com/lilianaconstantino/spacio.git",
      videoId: "mllE4x71St4",
      about:
        "Spacio integrates Google Workspace, allowing users to view room calendars and book rooms directly. Once a room is booked, the reservation appears on both the user's Google Calendar and the room calendar.",
      stack: [
        "react.js",
        "Apps Script",
        "JavaScript",
        "Google Calendar API",
      ],
      img: "/spacioImg.png",
    },

    {
      title: "Stripe Report",
      gitLink:
        "https://github.com/lilianaconstantino/Stripe_Report_UI.git",
      about:
        "Built an interactive UI for a reporting dashboard with React.js to streamline and consolidate financial records through a downloadable CSV template.",
      stack: ["react.js", "javascript", "stripe.js", "node.js"],
      img: "/stripe_report-uiImg.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      ref={ref}
      id="work"
      className="font-quiverleaf pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16 text-[#C1E899] scroll-mt-28"
    >
      <Container>

        {/* TITLE */}
        <h2 className="font-ekamai text-[40px] sm:text-[45px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8 md:mb-10">
          WEB PROJECTS
        </h2>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {works.map((work, index) => (
            <FolioCard
              key={index}
              img={work.img}
              title={work.title}
              gitLink={work.gitLink}
              videoId={work.videoId}
              about={work.about}
              stack={work.stack}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}