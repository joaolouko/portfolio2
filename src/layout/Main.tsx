import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGlobe
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiFlutter,
  SiSqlite,
  SiDotnet
} from "react-icons/si";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import FotoPerfil from "../img/perfil.jpeg";
import { useEffect, useState } from "react";
import "../styles/variables.scss";

export default function Main() {
  const { currentLanguage, t } = useLanguage();
  const phrases = [t("main.role1"), t("main.role2"), t("main.role3")];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const projects = [
    {
      name: "Sistema de Reserva de Salas IFC",
      description: t("main.project1"),
      link: "https://github.com/joaolouko/rooms-reservations",
    },
    {
      name: "BillstoPay",
      description: t("main.project2"),
      link: "https://github.com/joaolouko/billstopay",
    },
    {
      name: "Portfolio",
      description: t("main.project3"),
      link: "https://github.com/joaolouko/portfolio2",
    },
    {
      name: "Portfolio V1",
      description: t("main.project4"),
      link: "https://github.com/joaolouko/portfolio",
      web: "https://portoliov1-johndev.netlify.app/"
    }
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={currentLanguage}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl"
      >
        <section className="flex flex-col items-center">
          <img
            src={FotoPerfil}
            alt="Foto de perfil"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full"
          />
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mt-4 text-4xl text-white text-center font-bold mb-10"
            >
              {phrases[index]}
            </motion.h1>
          </AnimatePresence>

          <p className="text-justify">{t("main.title")}</p>
        </section>

        <section id="about" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold mb-4 border-b-4 color-secondary-border inline-block pb-1">
            {t("main.aboutMe")}
          </h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            {t("main.aboutMeText")}
          </p>
        </section>

        <section id="skills" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold mb-6 border-b-4 color-secondary-border inline-block pb-1">
            {t("main.skillsTitle")}
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { name: "C# / .NET", icon: <SiDotnet size={32} color="#512BD4" /> },
              { name: "Flutter / Dart", icon: <SiFlutter size={32} color="#02569B" /> },
              { name: "PostgreSQL", icon: <SiPostgresql size={32} color="#336791" /> },
              { name: "SQLite", icon: <SiSqlite size={32} color="#003B57" /> },
              { name: "TypeScript", icon: <SiTypescript size={32} color="#3178C6" /> },
              { name: "Tailwind CSS", icon: <SiTailwindcss size={32} color="#38BDF8" /> },
              { name: "React / React Native", icon: <FaReact size={32} color="#61DAFB" /> },
              { name: "JavaScript", icon: <SiJavascript size={32} color="#f7df1e" /> },
              { name: "Node.js / Express", icon: <FaNodeJs size={32} color="#68A063" /> },
              { name: "MongoDB", icon: <SiMongodb size={32} color="#47A248" /> },
              { name: "MySQL", icon: <SiMysql size={32} color="#00758F" /> },
              { name: "Git / GitHub", icon: <FaGitAlt size={32} color="#F05032" /> },
            ].map(({ name, icon }, i) => (
              <li
                key={i}
                className="flex flex-col items-center justify-center gap-2 bg-white/10 rounded-xl py-5 px-4 text-white font-semibold shadow-md hover:bg-white/20 transition-colors duration-200 cursor-default"
              >
                {icon}
                <span className="text-sm text-center">{name}</span>
              </li>
            ))}
          </ul>
        </section>


        <section id="projects" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold mb-6 border-b-4 color-secondary-border inline-block pb-1">
            {t("main.projectsTitle")}
          </h2>
          <div className="space-y-8">
            {projects.map(({ name, description, link, web }) => (
              <div
                key={name}
                className="color-header-footer rounded-lg p-6 shadow-lg shadow-secondary transition-shadow"
              >
                <h3 className="text-2xl font-semibold color-secondary mb-2">{name}</h3>
                <p className="text-gray-300 mb-4 text-justify">{description}</p>
                <div className="flex justify-between max-w-60">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block link-secondary hover:text-indigo-400 font-semibold mr-2"
                  >
                    <span className="flex items-center gap-2">
                      <FaGithub />&rarr; GitHub
                    </span>
                  </a>
                  {web && (
                    <a
                      href={web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block link-secondary hover:text-indigo-400 font-semibold"
                    >
                      <span className="flex items-center gap-2">
                        <FaGlobe />&rarr; Web
                      </span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold mb-6 border-b-4 color-secondary-border inline-block pb-1">
            {t("main.contactTitle")}
          </h2>
          <p className="mb-4 text-gray-300 text-justify">{t("main.contactText")}</p>
          <ul className="space-y-2 color-secondary font-semibold">
            <li>
              Email:{" "}
              <a
                href="mailto:joaopiresmachadonunes@gmail.com"
                className="hover:underline"
              >
                joaopiresmachadonunes@gmail.com
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-pires-088452211/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/joão-pires
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/joaolouko"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/joaolouko
              </a>
            </li>
          </ul>
        </section>
      </motion.main>
    </AnimatePresence>
  );
}
