import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Calendar } from 'lucide-react';
import BookingModal from './BookingModal';

const navLinks = [
  { name: 'About', path: '/', hash: '#about' },
  { name: 'Services', path: '/', hash: '#services' },
  { name: 'Projects', path: '/', hash: '#projects' },
  { name: 'Contact', path: '/', hash: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (path: string, hash: string) => {
    if (path === '/' && hash) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-brand-bg/95 backdrop-blur-sm border-b border-brand-border'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => navigate('/')}
            >
              <div className="w-10 h-10 rounded-[6px] bg-brand-surface border border-brand-border flex items-center justify-center transition-transform duration-300">
                <Code2 className="text-brand-secondary" size={20} />
              </div>
              <div>
                <h1 className="text-[20px] font-medium text-brand-primary tracking-tight">
                  Muhammad Zaryab Rafique
                </h1>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.path, link.hash)}
                  className="relative text-brand-tertiary hover:text-brand-primary transition-colors duration-300 font-normal text-[16px] group"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.09, delay: navLinks.length * 0.1 }}
                onClick={() => setIsBookingModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-[18px] py-[10px] bg-brand-button text-brand-secondary font-medium rounded-button hover:bg-brand-button/80 transition-all duration-300 text-[16px]"
              >
                <Calendar size={18} />
                Book a Call
              </motion.button>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-brand-secondary hover:bg-brand-surface rounded-lg transition-colors duration-300 border border-transparent hover:border-brand-border"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-brand-bg/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-brand-bg border-l border-brand-border z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[6px] bg-brand-surface border border-brand-border flex items-center justify-center">
                      <Code2 className="text-brand-secondary" size={20} />
                    </div>
                    <div>
                      <h2 className="text-[18px] font-medium text-brand-primary tracking-tight">
                        Muhammad Zaryab Rafique
                      </h2>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center text-brand-tertiary hover:text-brand-primary hover:bg-brand-surface rounded-lg transition-colors duration-300"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => handleNavClick(link.path, link.hash)}
                      className="w-full text-left px-4 py-3 rounded-lg text-brand-tertiary hover:text-brand-primary hover:bg-brand-surface transition-all duration-300 font-normal flex items-center gap-3"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-brand-border space-y-3">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    onClick={() => {
                      setIsOpen(false);
                      setIsBookingModalOpen(true);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-button text-brand-secondary font-medium rounded-button hover:bg-brand-button/80 transition-all duration-300"
                  >
                    <Calendar size={18} />
                    Book a Call
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.35 }}
                    onClick={() => {
                      handleNavClick('/', '#contact');
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 border border-brand-border bg-brand-surface text-brand-secondary font-medium rounded-button hover:text-brand-primary transition-all duration-300"
                  >
                    Get In Touch
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
}
