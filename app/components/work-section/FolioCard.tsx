"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";
import { useInView } from "react-intersection-observer";

type FolioCardProps = {
  title: string;
  img: string;
  gitLink?: string;
  videoId?: string;
  owner?: string;
  about: string;
  stack: string[];
};

export default function FolioCard({
  title,
  img,
  gitLink,
  videoId,
  owner,
  about,
  stack,
}: FolioCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  const [open, setOpen] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <div
        ref={ref}
        className={`
          relative w-full rounded-[20px] backdrop-blur-xl bg-linear-to-r 
          from-white/10 to-white/5 flex flex-col gap-4 p-5 duration-700
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        `}
      >
        {/* Image */}
        <Image
          src={img || "/placeholder.png"}
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
            {/* Video Button */}
            {videoId && (
              <button
                onClick={() => setOpen(true)}
                className="relative z-10 rounded-full bg-icon-radial p-3 hover:bg-red cursor-pointer"
                aria-label="Watch Demo"
              >
                <Icon icon="line-md:play-filled" />
            </button>
            )}

            {/* GitHub Link */}
            {gitLink ? (
              <Link
                href={gitLink}
                target="_blank"
                aria-label="View GitHub Repo"
                className="rounded-full bg-icon-radial p-3 transition-opacity duration-200"
              >
                <Icon icon="mingcute:github-line" />
              </Link>
            ) : (
              <div
                className="rounded-full bg-icon-radial p-3 opacity-30"
                data-blobity-tooltip={`Privately owned by ${owner || "N/A"}`}
              >
                <Icon icon="mingcute:github-line" />
              </div>
            )}
          </div>
        </div>

        <p className="font-quiverleaf text-[1.1rem] md:text-[1.2rem] text-white/80 leading-relaxed tracking-wide">
          {about}
        </p>

        <div className="flex gap-2 flex-wrap">
          {stack?.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open && videoId && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-black p-4 rounded-2xl w-[90%] max-w-3xl relative">
            
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 text-white text-xl"
            >
              ✕
            </button>

            {/* Video */}
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={`${title} demo`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}