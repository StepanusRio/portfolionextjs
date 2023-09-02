"use client";
import { useActiveSessionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import Hero from "@/public/HeroImages.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSessionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.25,
            }}
          >
            <Image
              src={Hero}
              width={192}
              height={192}
              quality={92}
              priority={true}
              alt="Photos Profile"
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello every one!! I{"'"}m{" "}
        <span className="font-bold underline">Rio</span>, I{"'"}m a
        <span className="font-bold italic"> FullStack Web Developers </span>
        based on <span className="font-bold">Semarang, Indonesia</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          className="group cursor-pointer bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack dark:bg-white/10"
          download={true}
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white cursor-pointer p-4 flex items-center text-gray-700 gap-2 rounded-full outline-none focus:scale-[1.15rem] hover:scale-110 active:scale-[1.15rem] hover:text-[#0077B5] transition borderBlack dark:bg-white/10 dark:text-white/50"
          href="https://www.linkedin.com/in/stepanusriodefa/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white cursor-pointer p-4 flex items-center text-gray-700 gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15rem] hover:scale-110 active:scale-[1.15rem] hover:text-[#171515] transition borderBlack dark:bg-white/10 dark:text-white/50"
          href="https://github.com/StepanusRio"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
