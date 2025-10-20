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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#0F1829] to-[#0A0F1C]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00F6FF] rounded-full filter blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full filter blur-[120px] animate-pulse delay-1000"></div>
        </div>

        <div className="absolute inset-0 grid-background"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00F6FF] to-[#FFD700] p-1 animate-float">
            <div className="w-full h-full rounded-full bg-[#0A0F1C] flex items-center justify-center text-4xl font-bold text-[#00F6FF]">
              <img src={imageMy} />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Building the Future of
          <span className="block mt-2 bg-gradient-to-r from-[#00F6FF] to-[#FFD700] bg-clip-text text-transparent">
            Intelligence & Trust
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          AI, Blockchain, and Web Innovation
        </p>

        <div className="h-16 flex items-center justify-center mb-12">
          <div className="text-2xl md:text-3xl font-semibold text-[#00F6FF] transition-all duration-500">
            {roles[currentRole]}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00F6FF] to-[#00C4CC] text-[#0A0F1C] font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,246,255,0.5)] transition-all duration-300 transform hover:scale-105"
          >
            <Calendar size={20} />
            Schedule Meeting
          </button>
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-[#00F6FF] text-[#00F6FF] font-semibold rounded-lg hover:bg-[#00F6FF] hover:text-[#0A0F1C] transition-all duration-300"
          >
            Explore My Work
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#00F6FF] animate-bounce"
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
