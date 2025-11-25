"use client";

import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiPostgresql,
  SiPostman,
  SiSelenium,
  SiCypress,
  SiDjango,
  SiKotlin,
  SiIntellijidea,
  SiAndroidstudio,
  SiGooglecolab,
  SiJupyter,
  SiClickup,
  SiJirasoftware,
} from "react-icons/si";

import { useEffect, useState } from "react";

const skills = [
  { icon: <VscVscode className="text-blue-500" />, name: "VS Code" },
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-400" />, name: "CSS" },
  { icon: <SiIntellijidea className="text-purple-500" />, name: "IntelliJ IDEA" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiGithub className="text-white" />, name: "GitHub" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiJirasoftware className="text-blue-400" />, name: "Jira" },
  { icon: <SiKotlin className="text-purple-400" />, name: "Kotlin" },
  { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
  { icon: <SiAndroidstudio className="text-green-400" />, name: "Android Studio" },
  { icon: <SiGooglecolab className="text-yellow-500" />, name: "Google Colab" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <SiJupyter className="text-orange-400" />, name: "Jupyter Notebook" },
  { icon: <SiDjango className="text-green-700" />, name: "Django" },
  { icon: <FaDatabase className="text-gray-400" />, name: "Database" },
  { icon: <SiSelenium className="text-green-500" />, name: "Selenium" },
  { icon: <SiPostgresql className="text-blue-500" />, name: "PostgreSQL" },
  { icon: <SiCypress className="text-green-400" />, name: "Cypress" },
  { icon: <FaDatabase className="text-blue-400" />, name: "SQL" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "TailwindCSS" },
  { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
  { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
  { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
  { icon: <SiClickup className="text-pink-500" />, name: "ClickUp" },
  { icon: <FaPython className="text-yellow-400" />, name: "Python" },
];

export default function AboutAndSkills() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skills.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const radius = 200;

  return (
    <section
      id="about"
      className="min-h-screen bg-transparent flex flex-col items-center justify-center px-6 text-white -mt-20"
    >
      <h2 className="text-5xl font-bold mb-12">Know Me</h2>

      {/* Flex container for About + Skills side by side */}
      <div className="flex flex-col  md:flex-row gap-30 items-center justify-center w-full">
        
        {/* About Section */}
        <div className="max-w-lg mb-30 bg-white text-black p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-bold">Education</h3>
          <p className="mt-2">
            <span className="font-semibold">Software Engineering</span> @
            AkiraChix
          </p>
          <p className="mt-2 text-gray-600 text-sm">
            AkiraChix built the strong foundation of my software engineering
            journey and remains the base of my skills and growth.
          </p>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-5">My Skills</h1>
          <motion.div
            className="relative w-[500px] h-[500px] flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          >
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * 2 * Math.PI;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="text-3xl">{skill.icon}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center Active Icon */}
          <motion.div
            key={activeIndex}
            className="absolute flex ml-6 flex-col items-center mt-65 justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">{skills[activeIndex].icon}</div>
            <p className="text-xl font-semibold">{skills[activeIndex].name}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
