import { useLanguage } from "../hooks/useLanguage";
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/variables.scss';

export default function Header() {
  const { switchLanguage, t, currentLanguage } = useLanguage();

  return (
    <AnimatePresence mode="wait">
      <motion.header
        key={currentLanguage}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 color-header-footer bg-opacity-90 backdrop-blur-md z-50 shadow">
        <nav className="container mx-auto flex flex-wrap justify-between items-center px-4 py-4">
          <h1 className="text-2xl font-bold color-primary cursor-default">John Dev</h1>
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li><a href="#about" className="color-primary-hover transition-colors">{t('header.about')}</a></li>
            <li><a href="#skills" className="color-primary-hover transition-colors">{t('header.skills')}</a></li>
            <li><a href="#projects" className="color-primary-hover transition-colors">{t('header.projects')}</a></li>
            <li><a href="#contact" className="color-primary-hover transition-colors">{t('header.contact')}</a></li>
          </ul>
          <div className="space-x-2 mt-4 md:mt-0">
            <button
              className={`hover:cursor-pointer transition-colors ${currentLanguage === 'en' ? 'color-primary' : ''} `}
              onClick={() => switchLanguage('en')}>EN</button>
            <button
              className={`hover:cursor-pointer transition-colors ${currentLanguage === 'pt' ? 'color-primary' : ''} `}
              onClick={() => switchLanguage('pt')}>PT</button>
          </div>
        </nav>
      </motion.header>
    </AnimatePresence>
  )
}