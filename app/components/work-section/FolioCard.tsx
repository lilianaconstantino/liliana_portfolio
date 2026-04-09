"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "./Tag";
import { useInView } from "react-intersection-observer";

type FolioCardProps = {
  title: string;
  img: string;
  gitLink?: string;
  liveLink: string;
  owner?: string;
  about: string;
  stack: string[];
};

export default function FolioCard({
  title,
  img,
  gitLink,
  liveLink,
  owner,
  about,
  stack,
}: FolioCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`
        w-full rounded-[20px] backdrop-blur-xl bg-linear-to-r 
        from-white/10 to-white/5 flex flex-col gap-4 p-5 duration-700
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      <Image
        src={img}
        alt={`${title} screenshot`}
        width={1200}
        height={675}
        className="rounded-[15px] w-full h-[210px] object-cover"
      />

      <div className="flex items-center justify-between">
        <h2 className="font-ekamai text-2xl sm:text-3xl xl:text-4xl font-bold text-[#C1E899]">
          {title}
        </h2>

        <div className="flex gap-3 text-2xl sm:text-3xl">
          <Link
            href={liveLink}
            className="rounded-full bg-icon-radial p-3 hover:bg-red"
            target="_blank"
          >
            <Icon icon="line-md:external-link-rounded" />
          </Link>

          <Link
            href={gitLink ? gitLink : "#"}
            target="_blank"
            aria-label="View GitHub Repo"
            className="rounded-full bg-icon-radial p-3 transition-opacity duration-200"
            {...(!gitLink && {
              "data-blobity-tooltip": `Privately owned by ${owner}`,
            })}
          >
            <Icon
              icon="mingcute:github-line"
              className={`${!gitLink ? "opacity-30" : ""}`}
            />
          </Link>
        </div>
      </div>

      <p className="font-quiverleaf text-[1.1rem] md:text-[1.2rem] text-white/80 leading-relaxed tracking-wide">
        {about}
      </p>

      <div className="flex gap-2 flex-wrap">
        {stack.map((tech, index) => (
          <Tag key={index}>{tech}</Tag>
        ))}
      </div>
    </div>
  );
}