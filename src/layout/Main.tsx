import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from "../hooks/useLanguage";
import FotoPerfil from "../img/perfil.jpeg";
import { useEffect, useState } from "react";
import '../styles/variables.scss'; // Importando o arquivo SCSS para aplicar as variáveis

export default function Main() {
    const { currentLanguage, t } = useLanguage();
    const phrases = [t("main.role1"), t("main.role2"), t("main.role3")]; // defina no seu arquivo de tradução
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 2000); // troca a cada 3 segundos

        return () => clearInterval(interval);
    }, [phrases.length]);

    const projects = [
        {
            name: 'Sistema de Reserva de Salas IFC',
            description: 'Um Projeto feito como TCC, utilizando React, Node.js e MongoDB.',
            link: 'https://github.com/joaolouko/rooms-reservations',
        },
        {
            name: 'Project Two',
            description: 'Another project showcasing API integration.',
            link: 'https://github.com/username/project-two',
        },
        {
            name: 'Project Three',
            description: 'Fullstack app with Node.js and React.',
            link: 'https://github.com/username/project-three',
        },
    ];

    const skills = [
        'JavaScript / TypeScript',
        'React / React Native',
        'Node.js / Express',
        'Tailwind CSS',
        'Git / Github',
        'MongoDB',
        'MySQL',
        'PostgreSQL',
    ];

    return (
        <AnimatePresence mode="wait">
            <motion.main
                key={currentLanguage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="container mx-auto px-6 py-12 max-w-4xl">

                <section className="flex flex-col items-center">
                    <img
                        src={FotoPerfil}
                        alt="Foto de perfil"
                        className="w-50 h-50 object-cover rounded-full"
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



                    <p>{t("main.title")}</p>
                </section>
                <section id="about" className="mb-16 scroll-mt-20">
                    <h2 className="text-4xl font-bold mb-4 border-b-4 color-secondary-border inline-block pb-1">{t('main.aboutMe')}</h2>
                    <p className="text-gray-300 leading-relaxed">
                        {t("main.aboutMeText")}
                    </p>
                </section>

                <section id="skills" className="mb-16 scroll-mt-20">
                    <h2 className="text-4xl font-bold mb-6 border-b-4 color-secondary-border inline-block pb-1">Skills</h2>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {skills.map((skill) => (
                            <li
                                key={skill}
                                className="color-header-footer rounded-lg text-center py-3 color-primary font-semibold shadow-md color-secondary-hover hover:text-gray-900 transition-colors cursor-default"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </section>

                <section id="projects" className="mb-16 scroll-mt-20">
                    <h2 className="text-4xl font-bold mb-6 border-b-4 color-secondary-border inline-block pb-1">Projects</h2>
                    <div className="space-y-8">
                        {projects.map(({ name, description, link }) => (
                            <div
                                key={name}
                                className="color-header-footer rounded-lg p-6 shadow-lg hover:shadow-indigo-500 transition-shadow"
                            >
                                <h3 className="text-2xl font-semibold color-secondary mb-2">{name}</h3>
                                <p className="text-gray-300 mb-4">{description}</p>
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-indigo-600 hover:text-indigo-400 font-semibold"
                                >
                                    <span className="flex items-center gap-2">
                                        <FaGithub /> View on GitHub &rarr;
                                    </span>

                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="mb-16 scroll-mt-20">
                    <h2 className="text-4xl font-bold mb-6 border-b-4 color-secondary-border inline-block pb-1">Contact</h2>
                    <p className="mb-4 text-gray-300">
                        Feel free to reach out to me via email or connect on LinkedIn.
                    </p>
                    <ul className="space-y-2 color-secondary font-semibold">
                        <li>
                            Email: <a href="mailto:your.email@example.com" className="hover:underline">your.email@example.com</a>
                        </li>
                        <li>
                            LinkedIn:{' '}
                            <a
                                href="https://linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                linkedin.com/in/yourprofile
                            </a>
                        </li>
                        <li>
                            GitHub:{' '}
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                github.com/yourusername
                            </a>
                        </li>
                    </ul>
                </section>
            </motion.main>
        </AnimatePresence>

    )
}