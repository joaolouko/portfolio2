import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from "../../hooks/useLanguage";

export default function Main() {
    const { currentLanguage, t } = useLanguage();

    const projects = [
        {
            name: 'Sistema de Reserva de Salas IFC',
            description: 'Um Projeto feito com TCC, utilizando React, Node.js e MongoDB.',
            link: 'https://github.com/joaolouko/app',
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
    ];

    return (
        <AnimatePresence>
            <motion.main
                key={currentLanguage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="container mx-auto px-6 py-12 max-w-4xl">
                <section id="about" className="mb-16 scroll-mt-20">
                    <h2 className="text-4xl font-bold mb-4 border-b-4 border-indigo-500 inline-block pb-1">{t('main.aboutMe')}</h2>
                    <p className="text-gray-300 leading-relaxed">
                        I'm a passionate developer specializing in building modern web applications with React, TypeScript, and Node.js. I enjoy crafting clean, efficient, and scalable code. This portfolio showcases some of my skills and projects.
                    </p>
                </section>

                <section id="skills" className="mb-16 scroll-mt-20">
                    <h2 className="text-4xl font-bold mb-6 border-b-4 border-indigo-500 inline-block pb-1">Skills</h2>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {skills.map((skill) => (
                            <li
                                key={skill}
                                className="bg-gray-800 rounded-lg text-center py-3 text-indigo-400 font-semibold shadow-md hover:bg-indigo-500 hover:text-gray-900 transition-colors cursor-default"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </section>

                <section id="projects" className="mb-16 scroll-mt-20">
                    <h2 className="text-4xl font-bold mb-6 border-b-4 border-indigo-500 inline-block pb-1">Projects</h2>
                    <div className="space-y-8">
                        {projects.map(({ name, description, link }) => (
                            <div
                                key={name}
                                className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-indigo-500 transition-shadow"
                            >
                                <h3 className="text-2xl font-semibold text-indigo-400 mb-2">{name}</h3>
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
                    <h2 className="text-4xl font-bold mb-6 border-b-4 border-indigo-500 inline-block pb-1">Contact</h2>
                    <p className="mb-4 text-gray-300">
                        Feel free to reach out to me via email or connect on LinkedIn.
                    </p>
                    <ul className="space-y-2 text-indigo-400 font-semibold">
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