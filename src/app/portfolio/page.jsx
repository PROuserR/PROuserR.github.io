"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-red-400",
    title: "Instagram Clone",
    desc: "Experience the best of social media with this full-stack Instagram clone, powered by Django and React.",
    img: "https://images.pexels.com/photos/5426401/pexels-photo-5426401.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://github.com/PROuserR/Instagram-Clone-Frontend",
  },
  {
    id: 2,
    color: "from-red-400 to-red-500",
    title: "Lyrics-Finder",
    desc: "Find your next favortie lyrics without hassle or just see what's Hot from Hot Tracks list.",
    img: "https://images.pexels.com/photos/5118495/pexels-photo-5118495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/PROuserR/Lyrics-Finder",
  },
  {
    id: 3,
    color: "from-red-500 to-red-600",
    title: "Social Media Platform",
    desc: "Share your posts and stay on contact with others. ",
    img: "https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/PROuserR/Social-Media-Platform",
  },
  {
    id: 4,
    color: "from-red-600 to-red-700",
    title: "Time Managment Table",
    desc: "Manage your weekly routines and appointments with ease",
    img: "https://images.pexels.com/photos/6892902/pexels-photo-6892902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/PROuserR/TimeManagmentTable",
  },
  {
    id: 5,
    color: "from-red-700 to-red-800",
    title: "Smart Calculator",
    desc: "Let it do the hard work, from solving equations to image to text conversion...",
    img: "https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/PROuserR/Smart-Calculator",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex bg-red-300">
            <div className="h-screen w-screen" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen px-12 gap-x-24 flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl xl:text-7xl">
                    {item.title}
                  </h1>

                  <p className="w-80 md:w96 lg:w-[500px] lg:text-xl xl:text-2xl xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="w-fit">
                    <button className="p-2 text-xl md:p-4 md:text-md lg:p-8 lg:text-xl xl:text-2xl bg-white text-gray-600 font-semibold rounded-xl">
                      See More 🚀
                    </button>
                  </Link>
                </div>

                <div className="relative w-[720px] h-[480px]">
                  <Image
                    src={item.img}
                    alt="project cover"
                    className="shadow-2xl shadow-black object-cover"
                    fill
                  />
                </div>
              </div>
            ))}
            <div className="h-screen w-screen bg-red-800" />
          </motion.div>
        </div>
      </div>
      <div className="flex w-screen h-[125vh] gap-16 items-center justify-center text-center">
        <div className="flex flex-col absolute left-24 z-10 gap-y-12">
          <h1 className="text-6xl italic">Do you have a project?</h1>
          <Link href="/contact" className="text-4xl bg-gray-500 p-4 w-fit mx-auto rounded-2xl">Contact Me</Link>
        </div>

        <div className="relative w-full h-full  bg-gradient-to-r from-gray-300 to-black">
          <Image
            src="https://images.pexels.com/photos/6615234/pexels-photo-6615234.jpeg?auto=compress&cs=tinysrgb&w=3000&lazy=load"
            className="object-cover mix-blend-lighten"
            fill
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
