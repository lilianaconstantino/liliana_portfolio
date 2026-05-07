"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useView } from "@/contexts/ViewContext";

export default function Hero() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("home");
  }, [inView, setSectionInView]);

  return (
    <section
      ref={ref}
      id="home"
      className="
        min-h-[100dvh]
        flex items-center
        pt-24
        text-white
      "
    >
      <div
        className="
          w-full
          max-w-[90%]
          xl:max-w-[1223px]
          mx-auto
          px-6
          flex
          flex-col-reverse
          lg:flex-row
          items-center
          justify-between
          gap-14
          lg:gap-20
        "
      >
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center">

          <motion.h1
            className="leading-tight font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span
              className="
                font-ekamai
                text-[#C1E899]
                leading-[0.95]
                block
                text-[clamp(3rem,7vw,6rem)]
              "
            >
              Liliana
            </span>

            <span
              className="
                font-ekamai
                text-[#C1E899]
                leading-[0.95]
                block
                text-[clamp(3rem,7vw,6rem)]
              "
            >
              Constantino
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mt-8"
          >
            <p
              className="
                font-extrabold
                text-[#FCE0CE]
                text-[clamp(1.2rem,2vw,1.7rem)]
              "
            >
              Data-Focused Developer
            </p>

            <p
              className="
                text-[#FCE0CE]
                text-[clamp(1rem,1.4vw,1.2rem)]
                mt-2
                leading-relaxed
                max-w-xl
              "
            >
              Building data-driven solutions with SQL, Python,
              and modern web technologies.
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className="
            relative
            w-[280px]
            h-[360px]
            sm:w-[320px]
            sm:h-[420px]
            md:w-[380px]
            md:h-[480px]
            xl:w-[430px]
            xl:h-[540px]
            shrink-0
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <Image
            src="/devfestfav.jpg"
            priority
            fill
            alt="Liliana's profile picture"
            className="
              object-cover
              rounded-[28px]
              shadow-2xl
              border-4 border-[#FFBBB4]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}