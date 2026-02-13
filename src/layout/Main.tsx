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
  SiDotnet,
  SiI18Next
} from "react-icons/si";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import FotoPerfil from "../img/perfil.jpeg";
import { useEffect, useState } from "react";
import "../styles/variables.scss";

import projetoImperio from "../img/projetos/imperio.png";
import projetoPortfolio from "../img/projetos/portfolio.png";
import projetoPortfoliov1 from "../img/projetos/portfoliov1.png";



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
      name: "Império do xis",
      web: "https://imperio-xis.vercel.app/",
      image: projetoImperio,
      technologies: [
        { icon: <FaReact size={24} />, name: "React" },
        { icon: <SiTailwindcss size={24} />, name: "TailwindCSS" },
      ]
    },
    {
      name: "Portfolio",
      link: "https://github.com/joaolouko/portfolio2",
      image: projetoPortfolio,
      technologies: [
        { icon: <FaReact size={24} />, name: "React" },
        { icon: <SiTailwindcss size={24} />, name: "TailwindCSS" },
        { icon: <SiI18Next size={24} />, name: "I18N" },
      ]
    },
    {
      name: "Portfolio V1",
      link: "https://github.com/joaolouko/portfolio",
      web: "https://portoliov1-johndev.netlify.app/",
      image: projetoPortfoliov1,
      technologies: [
        { icon: <FaReact size={24} />, name: "React" },
        { icon: <SiTailwindcss size={24} />, name: "TailwindCSS" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={currentLanguage}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4 sm:px-6 py-12 max-w-5xl"
      >
        {/* Hero Section with Gradient Background */}
        <section className="flex flex-col items-center mb-20 relative">
          {/* Gradient Background Decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-3xl -z-10"></div>

          {/* Profile Image with Gradient Border */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <img
              src={FotoPerfil}
              alt="Foto de perfil"
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full ring-4 ring-white/10"
            />
          </div>

          {/* Animated Title */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            >
              {phrases[index]}
            </motion.h1>
          </AnimatePresence>

          <motion.p
            className="text-center text-lg text-gray-300 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t("main.title")}
          </motion.p>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          className="mb-20 scroll-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t("main.aboutMe")}
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h2>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl"
            variants={itemVariants}
          >
            <p className="text-gray-300 leading-relaxed text-justify text-lg">
              {t("main.aboutMeText")}
            </p>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="mb-20 scroll-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-8 relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t("main.skillsTitle")}
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </h2>
          </motion.div>
          <motion.ul
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
          >
            {[
              { name: "C# / .NET", icon: <SiDotnet size={32} color="#512BD4" />, gradient: "from-purple-500/20 to-purple-600/20" },
              { name: "Flutter / Dart", icon: <SiFlutter size={32} color="#02569B" />, gradient: "from-blue-500/20 to-blue-600/20" },
              { name: "PostgreSQL", icon: <SiPostgresql size={32} color="#336791" />, gradient: "from-blue-600/20 to-indigo-600/20" },
              { name: "SQLite", icon: <SiSqlite size={32} color="#003B57" />, gradient: "from-slate-500/20 to-slate-600/20" },
              { name: "TypeScript", icon: <SiTypescript size={32} color="#3178C6" />, gradient: "from-blue-500/20 to-blue-700/20" },
              { name: "Tailwind CSS", icon: <SiTailwindcss size={32} color="#38BDF8" />, gradient: "from-cyan-500/20 to-cyan-600/20" },
              { name: "React / React Native", icon: <FaReact size={32} color="#61DAFB" />, gradient: "from-cyan-400/20 to-blue-500/20" },
              { name: "JavaScript", icon: <SiJavascript size={32} color="#f7df1e" />, gradient: "from-yellow-500/20 to-yellow-600/20" },
              { name: "Node.js / Express", icon: <FaNodeJs size={32} color="#68A063" />, gradient: "from-green-500/20 to-green-600/20" },
              { name: "MongoDB", icon: <SiMongodb size={32} color="#47A248" />, gradient: "from-green-600/20 to-emerald-600/20" },
              { name: "MySQL", icon: <SiMysql size={32} color="#00758F" />, gradient: "from-teal-500/20 to-teal-600/20" },
              { name: "Git / GitHub", icon: <FaGitAlt size={32} color="#F05032" />, gradient: "from-orange-500/20 to-red-500/20" },
            ].map(({ name, icon, gradient }, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex flex-col items-center justify-center gap-3 bg-gradient-to-br ${gradient} backdrop-blur-sm rounded-xl py-6 px-4 border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden`}
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <span className="relative z-10 text-sm text-center font-medium text-white/90 group-hover:text-white transition-colors">
                  {name}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Projects Section - COM IMAGENS */}
        <motion.section
          id="projects"
          className="mb-20 scroll-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-8 relative inline-block">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {t("main.projectsTitle")}
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            </h2>
          </motion.div>
          <div className="space-y-6">
            {projects.map(({ name, technologies, link, web, image }) => (
              <motion.div
                key={name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                {/* Gradient Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                  {/* Grid Layout condicional: com ou sem imagem */}
                  <div className={`grid ${image ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-6`}>
                    {/* Imagem do Projeto - só mostra se existir */}
                    {image && (
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                        <img
                          src={image}
                          alt={`Preview do projeto ${name}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay com gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>
                    )}

                    {/* Conteúdo do Projeto */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                          {name}
                        </h3>
                        {technologies && (
                          <div className="flex flex-wrap gap-3 mb-6">
                            {technologies.map(({ icon, name: techName }, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                              >
                                <span className="text-purple-400">{icon}</span>
                                <span className="text-sm text-gray-300 font-medium">{techName}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        {link && (
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                          >
                            <FaGithub size={20} />
                            <span>GitHub</span>
                          </a>
                        )}
                        {web && (
                          <a
                            href={web}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                          >
                            <FaGlobe size={20} />
                            <span>Web</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="mb-16 scroll-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-8 relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t("main.contactTitle")}
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </h2>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl"
            variants={itemVariants}
          >
            <p className="mb-6 text-gray-300 text-justify text-lg leading-relaxed">
              {t("main.contactText")}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <span className="font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text min-w-fit">Email:</span>
                <a
                  href="mailto:joaopiresmachadonunes@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors break-all"
                >
                  joaopiresmachadonunes@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="font-semibold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text min-w-fit">LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/jo%C3%A3o-pires-088452211/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors break-all"
                >
                  linkedin.com/in/joão-pires
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="font-semibold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text min-w-fit">GitHub:</span>
                <a
                  href="https://github.com/joaolouko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors break-all"
                >
                  github.com/joaolouko
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.section>
      </motion.main>
    </AnimatePresence>
  );
}