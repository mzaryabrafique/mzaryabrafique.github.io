import { useState } from 'react';
import { Mail, Linkedin, Github, Twitter, Send, Calendar } from 'lucide-react';
import BookingModal from './BookingModal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/mzaryabrafique',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mzaryabrafique',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/zaryab_rafique',
    },
     {
      icon: Send,
      label: 'Telegram',
      href: 'https://t.me/zaryabrafique',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:muhammadzaryabrafique@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-32 bg-brand-bg relative overflow-hidden border-t border-brand-border">
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col items-center">
          <span className="uppercase tracking-widest text-[12px] text-brand-tertiary mb-4 font-medium">Contact</span>
          <h2 className="text-[48px] font-normal text-brand-primary tracking-tight mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-brand-secondary text-[20px] max-w-2xl mx-auto mb-8 text-center font-normal">
            Let's build the next AI x Blockchain innovation together
          </p>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-button text-brand-secondary font-medium rounded-button hover:bg-brand-button/80 transition-all duration-300"
          >
            <Calendar size={20} />
            Book a Consultation
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div>
            <h3 className="text-[24px] font-medium text-brand-primary mb-6 tracking-tight">Connect With Me</h3>
            <p className="text-brand-secondary mb-8 leading-[1.5] text-[16px]">
              I'm always interested in discussing new projects, creative ideas, or opportunities to build innovative solutions at the intersection of AI and blockchain technology.
            </p>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 rounded-[8px] bg-brand-surface border border-brand-border hover:bg-brand-bg hover:border-brand-tertiary transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-[6px] bg-brand-bg border border-brand-border flex items-center justify-center transition-transform duration-300">
                    <link.icon className="text-brand-secondary group-hover:text-brand-primary transition-colors" size={20} />
                  </div>
                  <span className="text-brand-secondary font-medium group-hover:text-brand-primary transition-colors duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-brand-primary font-medium mb-2 text-[14px]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-[6px] bg-brand-surface border border-brand-border focus:border-brand-tertiary focus:ring-0 text-brand-primary placeholder:text-brand-tertiary outline-none transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-brand-primary font-medium mb-2 text-[14px]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-[6px] bg-brand-surface border border-brand-border focus:border-brand-tertiary focus:ring-0 text-brand-primary placeholder:text-brand-tertiary outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-brand-primary font-medium mb-2 text-[14px]">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-[6px] bg-brand-surface border border-brand-border focus:border-brand-tertiary focus:ring-0 text-brand-primary placeholder:text-brand-tertiary outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-button text-brand-secondary font-medium rounded-button hover:bg-brand-button/80 hover:text-brand-primary transition-all duration-300"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
}
