import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import { useView } from "@/contexts/ViewContext";
import "intersection-observer";
import { useInView } from "react-intersection-observer";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "spacio",
      gitLink: "https://github.com/lilianaconstantino/spacio.git",
      liveLink: "https://spacio.pages.dev/home/",
      about:
        "Spacio integrates Google’s Workspace, allowing users to view the rooms' calendars and book rooms directly. Once a room is booked, the reservation appears on both the user's Google Calendar and the room’s calendar.",
      stack: ["react.js", "Apps Script", "JavaScript", "Google Calendar API"],
      img: "/spacioImg.png",
    },
    {
      title: "Stripe Report",
      gitLink: "https://github.com/lilianaconstantino/Stripe_Report_UI.git",
      liveLink: "https://nijasit.bellsuniversity.edu.ng/",
      about:
        "Built an interactive UI for a reporting dashboard with React.js to streamline and consolidate financial records through a downloadable CSV template.",
      stack: ["react.js", "javascript", "stripe.js", "node.js"],
      img: "/stripe_report-uiImg.png",
    },
    // {
    //   title: "3rd Project Coming Soon",
    //   gitLink: "#",
    //   liveLink: "#",
    //   about: "A placeholder for your upcoming portfolio project!",
    //   stack: ["react.js"],
    //   img: "/placeholder.png",
    // },
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
      className="font-quiverleaf flex flex-col gap-6 md:gap-5 pt-[110px] text-[#C1E899]"
    >
      <h2 className="font-ekamai text-[45px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
        PROJECTS
      </h2>

      {/* ★ 3-Card Responsive Grid ★ */}
      <div
        className="
          grid
          gap-6
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {works.map((work, index) => (
          <FolioCard
            key={index}
            img={work.img}
            title={work.title}
            gitLink={work.gitLink}
            liveLink={work.liveLink}
            about={work.about}
            stack={work.stack}
          />
        ))}
      </div>
    </section>
  );
}