"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-purple-300 to-purple-400",
    title: "Instagram Clone",
    desc: "Experience the best of social media with this full-stack Instagram clone, powered by Django and React.",
    img: "https://images.pexels.com/photos/5426401/pexels-photo-5426401.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://github.com/PROuserR/Instagram-Clone-Frontend",
  },
  {
    id: 2,
    color: "from-purple-400 to-purple-500",
    title: "Lyrics-Finder",
    desc: "Find your next favortie lyrics without hassle or just see what's Hot from Hot Tracks list.",
    img: "https://images.pexels.com/photos/5118495/pexels-photo-5118495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/PROuserR/Lyrics-Finder",
  },
  {
    id: 3,
    color: "from-purple-500 to-purple-600",
    title: "Social Media Platform",
    desc: "Share your posts and stay on contact with others. ",
    img: "https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/PROuserR/Social-Media-Platform",
  },
  {
    id: 4,
    color: "from-purple-600 to-purple-700",
    title: "Time Managment Table",
    desc: "Manage your weekly routines and appointments with ease",
    img: "https://images.pexels.com/photos/6892902/pexels-photo-6892902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/PROuserR/TimeManagmentTable",
  },
  {
    id: 5,
    color: "from-purple-700 to-purple-800",
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
          <motion.div style={{ x }} className="flex bg-purple-300">
            <div className="h-screen w-screen" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen px-12 gap-x-24 flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-7xl">
                    {item.title}
                  </h1>

                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:text-2xl xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="w-fit">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg xl:text-xl bg-white text-gray-600 font-semibold rounded-xl">
                      See More 🚀
                    </button>
                  </Link>
                </div>

                <div className="relative w-[720px] h-[480px]">
                  <Image src={item.img} alt="project cover" fill />
                </div>
              </div>
            ))}
            <div className="h-screen w-screen bg-purple-800" />

          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-2xl">
                Front-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
