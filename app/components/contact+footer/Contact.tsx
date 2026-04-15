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
        setFormData({ userName: "", userEmail: "", userMessage: "" });
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
    className="min-h-[100dvh] flex flex-col gap-6 md:gap-10 pt-[110px] text-[#E8E899]"
  >

      <h2 className="font-ekamai text-[45px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#C1E899]">
        CONTACT ME
      </h2>

      {/* ✅ Side-by-side layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="userName"
              className="font-quiverleaf text-white mb-1 block"
            >
              Name
            </label>
            <input
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C1E899]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="userEmail"
              className="font-quiverleaf text-white mb-1 block"
            >
              Email
            </label>
            <input
              id="userEmail"
              name="userEmail"
              type="email"
              value={formData.userEmail}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C1E899]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="userMessage"
              className="font-quiverleaf text-white mb-1 block"
            >
              Message
            </label>
            <textarea
              id="userMessage"
              name="userMessage"
              rows={4}
              value={formData.userMessage}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C1E899]"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#C1E899] hover:bg-[#71A95A] text-[#1B1B1B] rounded py-2 px-4 font-bold transition-all duration-200"
          >
            Send
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center text-white space-y-6">
          <div>
            <h3 className="font-quiverleaf font-bold text-2xl text-[1.2rem] text-[#C1E899] mb-2">
              Let&apos;s Connect
            </h3>
            <p className="font-quiverleaf font-bold text-gray-300 text-[1.2rem]">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>

          <div className="space-y-2">
            {/* Email */}
            <p className="font-quiverleaf text- white sm:text-[1.2rem]">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:constantinolilianam@gmail.com"
                className="text-[#C1E899] text-[1.2rem] hover:underline"
              >
                constantinolilianam@gmail.com
              </a>
            </p>

            {/* Location */}
            <p className="font-quiverleaf text- white text-[1.2rem]">
              <strong>Location:</strong> California, USA
            </p>

            {/* Social Icons */}
            <div className="text-[#C1E899] flex items-center gap-5 mt-4">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/liliana-constantino/"
                className="text-[#C1E899] hover:text-white transition-transform duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Icon icon="hugeicons:linkedin-01" className="text-3xl" />
              </Link>

              <Link
                target="_blank"
                href="https://github.com/lilianaconstantino"
                className="text-[#C1E899] hover:text-white transition-transform duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Icon icon="hugeicons:github" className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
