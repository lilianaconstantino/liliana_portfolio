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
]);

  const { sectionInView } = useView();
  const [menuOpen, setMenuOpen] = useState(false);
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
      document.body.style.overflow = "hidden";

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", handleScroll);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";

      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const navItems = [
    ["home", "Home"],
    ["data", "Data Projects"],
    ["work", "Web Projects"],
    ["experience", "Experience"],
    ["about", "About"],
    ["contact", "Contact"],
  ];

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div
          ref={headerRef}
          className="
            mx-auto
            max-w-[90%]
            xl:max-w-[1223px]
            px-4 sm:px-6
            py-3 sm:py-4
            mt-3 sm:mt-6
            rounded-2xl
            bg-linear-to-r
            from-[#d9d9d91f]
            to-[#7373731f]
            std-backdrop-blur
            border border-white/10
          "
        >
          <div className="flex items-center justify-between">
            
            {/* LOGO */}
            <Link href="#home">
              <Image
                src="/lcm-cropped.svg"
                width={95}
                height={95}
                alt="logo"
                className="select-none w-[70px] sm:w-[95px] h-auto"
              />
            </Link>

            {/* DESKTOP NAV */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-12">
              {navItems.map(([id, label]) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    className={`
                      transition-all duration-300
                      hover:text-[#C1E899]
                      ${
                        sectionInView === id
                          ? "text-[#C1E899]"
                          : "text-white"
                      }
                    `}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-5">
              
              {/* DESKTOP SOCIALS */}
              <div className="hidden md:flex items-center gap-5 text-xl text-white">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/liliana-constantino/"
                  className="hover:text-[#C1E899] transition duration-300 hover:scale-110"
                >
                  <Icon icon="hugeicons:linkedin-01" />
                </Link>

                <Link
                  target="_blank"
                  href="https://github.com/lilianaconstantino"
                  className="hover:text-[#C1E899] transition duration-300 hover:scale-110"
                >
                  <Icon icon="hugeicons:github" />
                </Link>
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                className="
                  md:hidden
                  text-white
                  text-3xl
                  transition-transform duration-300
                  hover:scale-110
                "
                onClick={() => setMenuOpen(true)}
                aria-label="Open Menu"
              >
                <Icon icon="lucide:menu" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu onMenuOpen={setMenuOpen} />
        )}
      </AnimatePresence>
    </>
  );
}