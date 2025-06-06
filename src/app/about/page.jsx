"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import useStore from "../store";

const AboutPage = () => {
  const containerRef = useRef();
  const {locale} = useStore();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const { t } = useTranslation();
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className={`lg:flex h-full overflow-scroll ${locale === "en" ? "lg:flex-row lg:text-start" : "lg:flex-row-reverse lg:text-end"}`} ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-4xl">{t("biography")}</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-2xl">{t("subBiography")}</p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic text-xl">{t("subBiographyComment")}</span>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              {t("skills")}
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-xl cursor-pointer bg-red-950 text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-xl cursor-pointer bg-red-950 text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-xl cursor-pointer bg-red-950 text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-xl cursor-pointer bg-red-950 text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-xl cursor-pointer bg-red-950 text-white hover:bg-white hover:text-black">
                Bootstrap
              </div>
              <div className="rounded  p-2 text-xl cursor-pointer bg-red-950 text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-xl cursor-pointer bg-red-950 text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-xl cursor-pointer bg-red-950 text-white hover:bg-white hover:text-black">
                Zustand
              </div>
              <div className="rounded  p-2 text-xl cursor-pointer bg-red-950 text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-xl cursor-pointer bg-red-950 text-white hover:bg-white hover:text-black">
                React Query/ Tanstack
              </div>
              <div className="rounded  p-2 text-xl cursor-pointer bg-red-950 text-white hover:bg-white hover:text-black">
                HTML/CSS
              </div>
              <div className="rounded  p-2 text-xl cursor-pointer bg-red-950 text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded  p-2 text-xl cursor-pointer bg-red-950 text-white hover:bg-white hover:text-black">
                Django
              </div>
              <div className="rounded  p-2 text-xl cursor-pointer bg-red-950 text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-xl cursor-pointer bg-red-950 text-white hover:bg-white hover:text-black">
                Bash
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-24 xl:pb-36"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              {t("experience")}
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-fit">
                {/* LEFT */}
                <div className="w-full">
                  {/* JOB TITLE */}
                  <div className="bg-white dark:text-red-900 p-3 w-fit font-semibold rounded-b-lg rounded-s-lg">
                    {t("juniorFrontendDeveloper")}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-xl italic">
                    {t("juniorFrontendDeveloperDesc")}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-xl font-semibold">2024 - 2025</div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded dark:text-red-900 bg-white text-xl font-semibold w-fit">
                    ArachnoTech
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/2 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
