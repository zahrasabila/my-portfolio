import React from "react";
import Container from "../layouts/Container";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const techStack = [
  {
    name: "NextJs",
    icon: <RiNextjsFill size={40} />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill size={40} className="text-[#38BDF8]" />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript size={40} className="text-[#3178C6]" />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript size={40} className="text-[#F0DB4F]" />,
  },
  {
    name: "ReactJS",
    icon: <FaReact size={40} className="text-[#00D8FF] " />,
  },
  {
    name: "Figma",
    icon: <FaFigma size={40} className="text-[#A259FF] " />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={40} className="text-[#0277BD]" />,
  },
];

export default function Stack() {
  return (
    <div className="h-full">
      <Container className="space-y-4 h-full">
        <div>
          <h2 className="uppercase">Tech Stack</h2>
          <p className="font-vietnam font-light text-sm">Currently using</p>
        </div>
        <Marquee
          className="py-2 overflow-hidden mx-auto max-w-56 sm:max-w-xs"
          gradientWidth={50}
          gradientColor="rgba(255, 255, 255, 0.7)"
          speed={25}
          //   gradient
          autoFill
          pauseOnHover
          pauseOnClick
        >
          {techStack.map((item) => (
            <div
              className="bg-white shadow-md rounded-xl w-16 h-16 mx-1 flex items-center justify-center"
              key={item.name}
            >
              {item.icon}
            </div>
          ))}
        </Marquee>
        <div>
          <Image
            src="/images/tech_stack.svg"
            width={250}
            height={350}
            alt="tech stack used"
            className="mx-auto"
          />
        </div>
      </Container>
    </div>
  );
}
