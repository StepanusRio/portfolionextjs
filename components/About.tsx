"use client";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello, I am a <span className="font-bold">student </span>at{" "}
        <span className="font-bold">Dian Nuswantoro University</span> And I{"'"}
        ve passion for creating beautiful, functional, and user-friendly
        websites. I have a strong background in both front-end and back-end
        development and have experience working with a variety of technologies,
        including <span className="font-semibold italic">HTML</span>,{" "}
        <span className="font-semibold italic">CSS</span>,{" "}
        <span className="font-semibold italic">JavaScript</span>, and{" "}
        <span className="font-semibold italic">PHP</span>.
      </p>
      <p>
        After graduating from{" "}
        <span className="font-bold italic">Bangkit Academy 2023</span>, I have
        studied the most used tools and Technologies for web development like{" "}
        <span className="font-semibold underline">Docker</span>,{" "}
        <span className="font-semibold underline">GCP</span>, etc. And also
        learn a lot of Soft Skills that can be used in the Industry
      </p>
    </motion.section>
  );
}
