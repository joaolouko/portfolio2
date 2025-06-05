import { useLanguage } from "../../hooks/useLanguage";
import { motion, AnimatePresence } from 'framer-motion';

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
        className="sticky top-0 bg-gray-800 bg-opacity-90 backdrop-blur-md z-50 shadow">
        <nav className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-400 cursor-default">John Pires</h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-indigo-500 transition-colors">{t('header.about')}</a></li>
            <li><a href="#skills" className="hover:text-indigo-500 transition-colors">{t('header.skills')}</a></li>
            <li><a href="#projects" className="hover:text-indigo-500 transition-colors">{t('header.projects')}</a></li>
            <li><a href="#contact" className="hover:text-indigo-500 transition-colors">{t('header.contact')}</a></li>
          </ul>
          <div className="space-x-2">
            <button
              className={`hover:cursor-pointer transition-colors ${currentLanguage === 'en' ? 'text-indigo-500' : ''} `}
              onClick={() => switchLanguage('en')}>EN</button>
            <button
              className={`hover:cursor-pointer transition-colors ${currentLanguage === 'pt' ? 'text-indigo-500' : ''} `}
              onClick={() => switchLanguage('pt')}>PT</button>
          </div>
        </nav>
      </motion.header>
    </AnimatePresence>

  )
}