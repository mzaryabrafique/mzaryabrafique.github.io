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
      color: 'hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mzaryabrafique',
      color: 'hover:text-[#0077B5]',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/zaryab_rafique',
      color: 'hover:text-[#1DA1F2]',
    },
     {
      icon: Send,
      label: 'Telegram',
      href: 'https://t.me/zaryabrafique',
      color: 'hover:text-[#1DA1F2]',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:muhammadzaryabrafique@gmail.com',
      color: 'hover:text-[#FFD700]',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-[#00F6FF] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-[#FFD700] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-[#00F6FF]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00F6FF] to-[#FFD700] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            Let's build the next AI x Blockchain innovation together
          </p>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00F6FF] to-[#00C4CC] text-[#0A0F1C] font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,246,255,0.5)] transition-all duration-300 transform hover:scale-105"
          >
            <Calendar size={20} />
            Book a Consultation
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in discussing new projects, creative ideas, or opportunities to build innovative solutions at the intersection of AI and blockchain technology.
            </p>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-lg bg-[#0A0F1C] border border-[#00F6FF]/20 hover:border-[#00F6FF] transition-all duration-300 group ${link.color}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00F6FF] to-[#00C4CC] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="text-[#0A0F1C]" size={24} />
                  </div>
                  <span className="text-white font-semibold group-hover:text-[#00F6FF] transition-colors duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0F1C] border-2 border-[#00F6FF]/20 focus:border-[#00F6FF] text-white placeholder-gray-500 outline-none transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0F1C] border-2 border-[#00F6FF]/20 focus:border-[#00F6FF] text-white placeholder-gray-500 outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0F1C] border-2 border-[#00F6FF]/20 focus:border-[#00F6FF] text-white placeholder-gray-500 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00F6FF] to-[#00C4CC] text-[#0A0F1C] font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,246,255,0.5)] transition-all duration-300 transform hover:scale-105"
              >
                <Send size={20} />
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
