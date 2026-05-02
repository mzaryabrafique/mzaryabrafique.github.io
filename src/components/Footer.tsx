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
    <footer className="bg-brand-bg border-t border-brand-border">
      <div className="max-w-[1500px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-[6px] bg-brand-surface border border-brand-border flex items-center justify-center">
                <Code2 className="text-brand-secondary" size={20} />
              </div>
              <h3 className="text-[20px] font-medium text-brand-primary tracking-tight">Muhammad Zaryab Rafique</h3>
            </div>
            <p className="text-brand-secondary mb-8 leading-[1.5] max-w-md text-[15px]">
              Building the Future with AI, Blockchain & Web Innovation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-secondary hover:text-brand-primary transition-colors duration-300">
                <Mail size={16} />
                <a href="mailto:muhammadzaryabrafique@gmail.com" className="text-[14px]">muhammadzaryabrafique@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-brand-secondary">
                <MapPin size={16} />
                <span className="text-[14px]">Pakistan</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[16px] font-medium text-brand-primary mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-secondary text-[14px] hover:text-brand-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-tertiary group-hover:bg-brand-primary transition-colors duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[16px] font-medium text-brand-primary mb-6 tracking-tight">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-[6px] bg-brand-surface border border-brand-border flex items-center justify-center hover:bg-brand-bg transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-brand-secondary group-hover:text-brand-primary transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-tertiary text-[14px] text-center md:text-left">
            © {new Date().getFullYear()} Muhammad Zaryab Rafique
          </p>
        </div>
      </div>
    </footer>
  );
}

