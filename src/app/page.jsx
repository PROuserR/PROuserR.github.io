"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";


const Homepage = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20">
        {/* IMAGE CONTAINER */}
        <motion.div
          className="h-1/3 lg:h-full lg:w-1/2 relative"
          initial={{ y: -400 }}
          transition={{ delay: 0.7, duration: 0.95 }}
          animate={{ y: 0 }}
        >
          <Image
            src="/hero.png"
            alt=""
            fill
            className="object-contain hover:blur-[1px]"
          />
        </motion.div>
        {/* TEXT CONTAINER */}
        <div className="h-2/3 lg:h-full lg:w-1/2 flex flex-col gap-4 lg:gap-8 items-center justify-center">
          {/* TITLE */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold xl:mb-4"
            initial={{ x: 400 }}
            transition={{ delay: 0.7, duration: 0.95 }}
            animate={{ x: 0 }}
          >
            {t("heroH1")}
          </motion.h1>
          {/* DESC */}
          <motion.p
            className="md:text-2xl"
            initial={{ x: 400 }}
            transition={{ delay: 0.7, duration: 0.95 }}
            animate={{ x: 0 }}
          >
            {t("heroH2")}
          </motion.p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
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
