"use client";
import { useView } from "@/contexts/ViewContext";
import { Icon, loadIcons } from "@iconify/react/dist/iconify.js";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  loadIcons([
    "gg:close",
    "lucide:menu",
    "hugeicons:linkedin-01",
    "hugeicons:github",
    "akar-icons:x-fill",
  ]);
  const { sectionInView } = useView();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <>
     <div className="fixed max-w-[90%] xl:max-w-[1223px] w-full z-10 select-none">
      <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-linear-to-r from-[#d9d9d91f] to-[#7373731f] mt-4 sm:mt-8 std-backdrop-blur">
        <Image
        src="/lcm-cropped.svg"
        width={95}
        height={95}
        alt="logo"
        className="select-none"
      />

  <ul className="hidden sm:flex items-center gap-8 lg:gap-12">
  <li>
    <Link
      href="#home"
      className={`transition-colors duration-300 ${
        sectionInView === "home" ? "text-[#C1E899]" : "text-white"
      }`}
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      href="#work"
      className={`transition-colors duration-300 ${
        sectionInView === "work" ? "text-[#C1E899]" : "text-white"
      }`}
    >
      Projects
    </Link>
  </li>

  <li>
    <Link
      href="#experience"
      className={`transition-colors duration-300 ${
        sectionInView === "experience" ? "text-[#C1E899]" : "text-white"
      }`}
    >
      Experience
    </Link>
  </li>

  <li>
    <Link
      href="#about"
      className={`transition-colors duration-300 ${
        sectionInView === "about" ? "text-[#C1E899]" : "text-white"
      }`}
    >
      About
    </Link>
  </li>

  <li>
    <Link
      href="#contact"
      className={`transition-colors duration-300 ${
        sectionInView === "contact" ? "text-[#C1E899]" : "text-white"
      }`}
    >
      Contact
    </Link>
  </li>
</ul>
    <div className="gap-5 text-xl hidden sm:flex">
      <Link target="_blank" href="https://www.linkedin.com/in/liliana-constantino/">
        <Icon icon="hugeicons:linkedin-01" />
      </Link>
      <Link target="_blank" href="https://github.com/lilianaconstantino">
        <Icon icon="hugeicons:github" />
      </Link>
    </div>
  </div>
</div>

      <AnimatePresence>
        {menuOpen && <MobileMenu onMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </>
  );
}
