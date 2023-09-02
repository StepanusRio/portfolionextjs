"use client";
import { skills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>my skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skills.map((skill, index) => (
          <motion.li
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            variants={fadeInAnimationsVariants}
            className="border border-black/[0.1] bg-white rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            custom={index}
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
