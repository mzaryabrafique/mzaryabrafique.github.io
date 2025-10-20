import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Send, Mail, MapPin, Code2 } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/mzaryabrafique', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mzaryabrafique', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/zaryab_rafique', label: 'Twitter' },
  { icon: Send, href: 'https://t.me/zaryabrafique', label: 'Telegram' },
  { icon: Mail, href: 'mailto:muhammadzaryabrafique@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] border-t border-[#00F6FF]/20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00F6FF] rounded-full filter blur-[120px]"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F6FF] to-[#00C4CC] flex items-center justify-center">
                <Code2 className="text-[#0A0F1C]" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Muhammad Zaryab Rafique</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Building the Future with AI, Blockchain & Web Innovation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-[#00F6FF] transition-colors duration-300">
                <Mail size={18} className="text-[#00F6FF]" />
                <a href="mailto:muhammadzaryabrafique@gmail.com">muhammadzaryabrafique@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-[#00F6FF]" />
                <span>Pakistan</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#00F6FF] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#00F6FF] transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] border border-[#00F6FF]/20 hover:border-[#00F6FF] flex items-center justify-center hover:shadow-[0_0_20px_rgba(0,246,255,0.3)] transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-gray-400 group-hover:text-[#00F6FF] transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 border-t border-[#00F6FF]/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Muhammad Zaryab Rafique
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <span className="text-[#FFD700]">★</span>
              <span>for innovation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
