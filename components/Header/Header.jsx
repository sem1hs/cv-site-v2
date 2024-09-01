"use client";
import React, { useEffect, useState } from "react";
import HeaderItem from "./HeaderItem";
import clsx from "clsx";

import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import SocialItem from "./SocialItem";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const headerList = [
  {
    title: "Anasayfa",
    href: "/",
  },
  {
    title: "Hakkımda",
    href: "/about",
  },
  {
    title: "Projelerim",
    href: "/projects",
  },
  {
    title: "İletişim",
    href: "/contact",
  },
];
const socialList = [
  {
    icon: (
      <FaTwitter
        className="text-gray-300 hover:text-purple-800 transition-all"
        size={20}
      />
    ),
    href: "https://x.com/semihshngl",
  },
  {
    icon: (
      <FaLinkedin
        className="text-gray-300 hover:text-purple-800 transition-all"
        size={20}
      />
    ),
    href: "https://www.linkedin.com/in/semih-sahinoglu-2b7834289/",
  },
  {
    icon: (
      <FaGithub
        className="text-gray-300 hover:text-purple-800 transition-all"
        size={20}
      />
    ),
    href: "https://github.com/sem1hs",
  },
];
const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const setStickyNav = () => {
    if (window.scrollY >= 50) setSticky(true);
    else setSticky(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", setStickyNav);

    return () => window.removeEventListener("scroll", setStickyNav);
  }, []);

  const handleClick = (e) => {
    setIsOpen((open) => !open);
  };

  return (
    <header
      className={clsx(
        "sticky top-0 left-0 z-30 px-6 md:px-2 py-8 md:py-12 transition-all",
        {
          "!py-6 md:py-8 bg-[#070707]": sticky,
        }
      )}
    >
      <nav
        className={"max-w-screen-xl mx-auto flex items-center justify-between"}
      >
        <div>
          {/* Logo */}
          <p className="text-gray-300 text-xs md:text-base">Semih Sahinoglu</p>
        </div>
        <ul className="md:flex hidden items-center gap-12">
          {headerList.map((val, i) => (
            <HeaderItem key={i} info={val} />
          ))}
        </ul>
        <ul className="md:flex hidden items-center gap-8">
          {socialList.map((val, i) => (
            <SocialItem key={i} info={val} />
          ))}
        </ul>
        <button
          className="fixed right-5 z-50 cursor-pointer block md:hidden"
          onClick={handleClick}
        >
          {isOpen && <IoMdClose size={24} className="text-white" />}
          {!isOpen && <IoIosMenu size={24} className="text-white" />}
        </button>
        <nav
          onClick={handleClick}
          className={clsx(
            "fixed grid grid-rows-2 gap-y-8 top-0 -right-96 py-12 px-8 w-2/4 h-screen bg-[#070707] transition-all duration-700  md:hidden ",
            { "!right-0 ": isOpen }
          )}
        >
          <ul className="flex flex-col items-center justify-between gap-4 mb-4">
            {headerList.map((val, i) => (
              <HeaderItem key={i} info={val} />
            ))}
          </ul>
          <ul className="flex flex-col items-center justify-between gap-4">
            {socialList.map((val, i) => (
              <SocialItem key={i} info={val} />
            ))}
          </ul>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
