import ReactRealEstate from "@/public/reactrealestateportfolio.stepanusriodefa.my.id.png";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";

function formatDate(date = new Date()) {
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });
  return [year, month, day].join("-");
}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experienceData = [
  {
    title: "Cloud Computing Bangkit Academy 2023",
    location: "Bandung | Online",
    description:
      "Learn about Cloud Infrastructure, Solution, and Implementing Cloud Computing for Industry",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
    // date: `${formatDate(new Date(2023, 2, 16))}`,
  },
  {
    title: "Deputy II Dian Nuswantoro Computer Club",
    location: "Semarang",
    description:
      "Learn how to Lead Organization in University and Growth together with each other",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
    // date: `${formatDate(new Date(2022, 8, 1))}`,
  },
] as const;

export const projectsData = [
  {
    title: "Real Este React Project (Dummy Project)",
    description: "Implementing React for Front-End",
    tags: [
      "React",
      "Real Este",
      "Tailwind",
      "NodeJs",
      "TypeScript",
      "JavaScript",
    ],
    imageUrl: ReactRealEstate,
  },
] as const;

export const skills = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "PHP",
  "Laravel",
  "JavaScript",
  "Node.Js",
  "React",
  "Next.Js",
  "Hapi",
  "ExpressJs",
  "Git",
  "Docker",
  "MongoDb",
  "MySQL",
];
