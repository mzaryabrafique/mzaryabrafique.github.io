import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Calendar } from 'lucide-react';
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0F1C]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,246,255,0.1)] border-b border-[#00F6FF]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F6FF] to-[#00C4CC] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="text-[#0A0F1C]" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  Zaryab<span className="text-[#00F6FF]">Portfolio</span>
                </h1>
                <p className="text-xs text-gray-400">AI & Blockchain Expert</p>
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
                  className="relative text-gray-300 hover:text-[#00F6FF] transition-colors duration-300 font-medium group"
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00F6FF] to-[#00C4CC] group-hover:w-full transition-all duration-300"
                  />
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.09, delay: navLinks.length * 0.1 }}
                onClick={() => setIsBookingModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00F6FF] to-[#00C4CC] text-[#0A0F1C] font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,246,255,0.5)] transition-all duration-300"
              >
                <Calendar size={18} />
                Book a Call
              </motion.button>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-[#00F6FF] hover:bg-[#00F6FF]/10 rounded-lg transition-colors duration-300"
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] shadow-[-8px_0_32px_rgba(0,246,255,0.2)] z-50 md:hidden overflow-y-auto border-l border-[#00F6FF]/20"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F6FF] to-[#00C4CC] flex items-center justify-center">
                      <Zap className="text-[#0A0F1C]" size={24} />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">
                        Dev<span className="text-[#00F6FF]">Portfolio</span>
                      </h2>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#00F6FF]/10 rounded-lg transition-colors duration-300"
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
                      className="w-full text-left px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-[#00F6FF]/10 transition-all duration-300 font-medium group flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F6FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </motion.button>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-[#00F6FF]/20 space-y-3">
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
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00F6FF] to-[#00C4CC] text-[#0A0F1C] font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,246,255,0.5)] transition-all duration-300"
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
                    className="w-full px-6 py-3 border-2 border-[#00F6FF] text-[#00F6FF] font-semibold rounded-lg hover:bg-[#00F6FF]/10 transition-all duration-300"
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
