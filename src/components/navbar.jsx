"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { changeLanguage } from "i18next";
import { Birthstone } from "next/font/google";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const BirthstoneFont = Birthstone({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setLang(
      typeof localStorage.getItem("lang") === "undefined"
        ? "en"
        : localStorage.getItem("lang")
    );
  }, [lang]);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const toggleDarkMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    document.documentElement.classList.toggle("dark");
  };

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
    setLang(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <div className="h-full w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 text-2xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3">
        <span
          className={`mx-auto text-5xl ${BirthstoneFont.className} hover:blur-[1px]`}
        >
          Rami Alshaar
        </span>
      </div>
      {/* SOCIAL */}
      <div className="hidden justify-end md:flex gap-4 w-1/3">
        <Link href="https://github.com/PROuserR/">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/rami-alshaar-5ab808187/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <motion.button
          onClick={toggleDarkMode}
          whileHover={{ opacity: 0.5, scale: 1.25, rotate: 15 }}
        >
          {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
        </motion.button>
        <select
          className="bg-transparent"
          onChange={handleLanguageChange}
          value={lang}
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-red-950 text-red-200 flex flex-col items-center justify-center gap-6 text-4xl z-40"
          >
            <motion.button
              className="absolute left-4 top-6"
              onClick={toggleDarkMode}
              whileTap={{ opacity: 0.5, scale: 1.25, rotate: 15 }}
            >
              {theme === "light" ? (
                <MdLightMode className="w-10 h-10" />
              ) : (
                <MdDarkMode className="w-10 h-10" />
              )}
            </motion.button>
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                key={link.title}
                className="p-4"
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
            <select
              className="bg-transparent w-16"
              onChange={handleLanguageChange}
              value={lang}
            >
              <option value="en">En</option>
              <option value="ar">Ar</option>
            </select>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
