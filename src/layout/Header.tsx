import { useLanguage } from "../hooks/useLanguage";
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/variables.scss';
import { useState } from 'react';

export default function Header() {
  const { switchLanguage, t, currentLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <motion.header
        key={currentLanguage}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-lg z-50 shadow-lg shadow-purple-500/10 border-b border-white/10"
      >
        <nav className="container mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 py-4">
          {/* Logo with Gradient */}
          <motion.h1 
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent cursor-default"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            João Pires Dev
          </motion.h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            {[
              { key: 'about', href: '#about' },
              { key: 'skills', href: '#skills' },
              { key: 'projects', href: '#projects' },
              { key: 'contact', href: '#contact' }
            ].map(({ key, href }) => (
              <motion.li 
                key={key}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={href} 
                  className="relative text-gray-300 hover:text-white transition-colors group"
                >
                  {t(`header.${key}`)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <div className="flex bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20">
              <button
                className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                  currentLanguage === 'en'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => switchLanguage('en')}
              >
                EN
              </button>
              <button
                className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                  currentLanguage === 'pt'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => switchLanguage('pt')}
              >
                PT
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-2 p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10 bg-gradient-to-b from-slate-900/95 to-purple-900/95 backdrop-blur-lg"
            >
              <ul className="flex flex-col space-y-2 p-4">
                {[
                  { key: 'about', href: '#about' },
                  { key: 'skills', href: '#skills' },
                  { key: 'projects', href: '#projects' },
                  { key: 'contact', href: '#contact' }
                ].map(({ key, href }) => (
                  <motion.li
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={href}
                      className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t(`header.${key}`)}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}