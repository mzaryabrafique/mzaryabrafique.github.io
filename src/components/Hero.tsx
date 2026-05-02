import { useState, useEffect } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import imageMy from "../assets/cropped_circle_image.png"
import BookingModal from './BookingModal';

const roles = [
  'AI Developer',
  'Blockchain Engineer',
  'Full Stack Innovator',
  'Smart Contract Architect',
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-bg pt-20 pb-32">
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 text-center mt-12 md:mt-24">
        <div className="mb-12 inline-block">
          <div className="w-28 h-28 rounded-full border border-brand-border p-1 mx-auto bg-brand-surface">
            <div className="w-full h-full rounded-full bg-brand-bg flex items-center justify-center overflow-hidden">
              <img src={imageMy} className="w-full h-full object-cover" alt="Zaryab" />
            </div>
          </div>
        </div>

        <h1 className="text-[48px] md:text-[80px] leading-[1.0] tracking-tightest mb-8 text-brand-primary font-matter">
          Building the Future of
          <span className="block mt-2 text-brand-secondary">
            Intelligence & Trust
          </span>
        </h1>

        <p className="text-xl md:text-[24px] text-brand-secondary mb-12 tracking-tight">
          AI, Blockchain, and Web Innovation
        </p>

        <div className="h-16 flex items-center justify-center mb-16">
          <div className="text-[20px] md:text-[24px] font-normal text-brand-tertiary transition-opacity duration-500 uppercase tracking-widest">
            {roles[currentRole]}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-button text-brand-secondary font-medium rounded-button hover:bg-brand-button/80 transition-all duration-300"
          >
            <Calendar size={20} />
            Schedule Meeting
          </button>
          <a
            href="#projects"
            className="flex items-center justify-center px-8 py-4 bg-brand-surface border border-brand-border text-brand-secondary font-medium rounded-button hover:text-brand-primary transition-all duration-300"
          >
            Explore My Work
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-brand-tertiary hover:text-brand-primary transition-colors"
      >
        <ChevronDown size={32} />
      </a>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
}
