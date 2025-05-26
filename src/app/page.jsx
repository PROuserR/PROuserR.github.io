"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import useStore from "./store";

const Homepage = () => {
  const { t } = useTranslation();
  const { locale } = useStore();

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className={`h-full flex flex-col ${
          locale === "en" ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-y-4 lg:gap-y-0 px-4 sm:px-8 md:px-12 lg:px-20`}
      >
        {/* IMAGE CONTAINER */}
        <motion.div
          className="h-2/3 sm:h-4/5 lg:h-[90%] lg:w-1/2 relative"
          initial={{ y: -400, opacity: 0  }}
          transition={{ delay: 0.7, duration: 0.95 }}
          animate={{ y: 0, opacity: 1  }}
        >
          <Image
            src="/hero.png"
            alt=""
            fill
            className="object-contain hover:grayscale-[75%]"
          />
        </motion.div>
        {/* TEXT CONTAINER */}
        <div
          className={`h-2/3 text-center ${
            locale === "en" ? "lg:text-start" : "lg:text-end"
          } lg:h-full lg:w-1/2 flex flex-col gap-4 lg:gap-8 items-center justify-center`}
        >
          {/* TITLE */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold xl:mb-4"
            initial={{ x: 400, opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.95 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {t("heroH1")}
          </motion.h1>
          {/* DESC */}
          <motion.p
            className="md:text-2xl"
            initial={{ x: 400, opacity: 0  }}
            transition={{ delay: 0.7, duration: 0.95 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {t("heroH2")}
          </motion.p>
          {/* BUTTONS */}
          <div
            className={`flex w-full pb-8 ${
              locale === "en" ? "lg:flex-row" : "lg:flex-row-reverse"
            } md:pb-0n justify-center items-center md:justify-normal gap-4`}
          >
            <Link href="/projects">
              <motion.button
                className="p-4 rounded-lg ring-1 ring-black bg-red-950 text-white hover:opacity-75"
                initial={{ y: 400 }}
                transition={{ delay: 0.5, duration: 0.75 }}
                animate={{ y: 0 }}
              >
                {t("button1")}
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                className="p-4 rounded-lg ring-1 ring-black dark:ring-red-300 hover:opacity-75"
                initial={{ y: 400 }}
                transition={{ delay: 0.5, duration: 0.75 }}
                animate={{ y: 0 }}
              >
                {t("button2")}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
