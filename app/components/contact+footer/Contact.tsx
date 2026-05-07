"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { toast } from "react-hot-toast";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Contact() {
  const { ref } = useSectionInView("contact");

  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading("Sending message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast.dismiss();

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          userName: "",
          userEmail: "",
          userMessage: "",
        });
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Network error. Try again later.");
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="
        min-h-[100dvh]
        pt-24
        pb-10
        text-[#C1E899]
        scroll-mt-28
      "
    >
      <div className="w-full max-w-[90%] xl:max-w-[1223px] mx-auto px-6 flex flex-col gap-8">

        {/* TITLE */}
        <h2 className="pt-10 font-ekamai text-[45px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
          CONTACT ME
        </h2>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* LEFT SIDE — FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            {/* NAME */}
            <div>
              <label
                htmlFor="userName"
                className="text-white mb-2 block"
              >
                Name
              </label>

              <input
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
                className="
                  w-full
                  border border-white/20
                  rounded-xl
                  px-4 py-3
                  bg-white/5
                  text-white
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#C1E899]
                  transition-all
                "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="userEmail"
                className="text-white mb-2 block"
              >
                Email
              </label>

              <input
                id="userEmail"
                name="userEmail"
                type="email"
                value={formData.userEmail}
                onChange={handleChange}
                required
                className="
                  w-full
                  border border-white/20
                  rounded-xl
                  px-4 py-3
                  bg-white/5
                  text-white
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#C1E899]
                  transition-all
                "
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="userMessage"
                className="text-white mb-2 block"
              >
                Message
              </label>

              <textarea
                id="userMessage"
                name="userMessage"
                rows={5}
                value={formData.userMessage}
                onChange={handleChange}
                required
                className="
                  w-full
                  border border-white/20
                  rounded-xl
                  px-4 py-3
                  bg-white/5
                  text-white
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#C1E899]
                  transition-all
                  resize-none
                "
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                mt-2
                bg-[#C1E899]
                hover:bg-[#71A95A]
                text-[#1B1B1B]
                rounded-xl
                py-3 px-6
                font-bold
                transition-all duration-300
                hover:scale-[1.02]
              "
            >
              Send Message
            </button>
          </form>

          {/* RIGHT SIDE — INFO */}
          <div className="flex flex-col justify-start text-white gap-8">

            {/* INTRO */}
            <div>
              <h3 className="font-bold text-[1.5rem] text-[#C1E899] mb-3">
                Let&apos;s Connect
              </h3>

              <p className="text-gray-300 text-[1.05rem] leading-relaxed">
                Feel free to reach out for collaborations, opportunities,
                or just a friendly conversation about tech, data, or design.
              </p>
            </div>

            {/* CONTACT DETAILS */}
            <div className="space-y-4">

              {/* EMAIL */}
              <p className="text-[1.05rem]">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:constantinolilianam@gmail.com"
                  className="text-[#C1E899] hover:underline"
                >
                  constantinolilianam@gmail.com
                </a>
              </p>

              {/* LOCATION */}
              <p className="text-[1.05rem]">
                <strong>Location:</strong> California, USA
              </p>

              {/* SOCIALS */}
              <div className="flex items-center gap-5 pt-2">

                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/liliana-constantino/"
                  className="
                    text-[#C1E899]
                    hover:text-white
                    transition-all duration-300
                    hover:scale-110
                  "
                  aria-label="LinkedIn"
                >
                  <Icon
                    icon="hugeicons:linkedin-01"
                    className="text-3xl"
                  />
                </Link>

                <Link
                  target="_blank"
                  href="https://github.com/lilianaconstantino"
                  className="
                    text-[#C1E899]
                    hover:text-white
                    transition-all duration-300
                    hover:scale-110
                  "
                  aria-label="GitHub"
                >
                  <Icon
                    icon="hugeicons:github"
                    className="text-3xl"
                  />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}