import React from "react";
import { LuGraduationCap } from "react-icons/lu";

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

export const experience = [
  {
    title: "Cloud Computing Bangkit Academy 2023",
    location: "Bandung | Online",
    description:
      "Learn about Cloud Infrastructure, Solution, and Implementing Cloud Computing for Industry",
    icon: React.createElement(LuGraduationCap),
    date: "February - July 2023",
  },
];

export const project = [
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
    imageUrl: "",
  },
];

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
