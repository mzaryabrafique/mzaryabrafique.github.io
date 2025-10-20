import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.style.overflow = 'unset';
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={handleBackdropClick}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl mx-auto mt-8 mb-8 bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] rounded-2xl shadow-[0_8px_64px_rgba(0,246,255,0.3)] border border-[#00F6FF]/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between p-6 border-b border-[#00F6FF]/20 bg-[#0A0F1C]/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F6FF] to-[#00C4CC] flex items-center justify-center">
                      <Calendar className="text-[#0A0F1C]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        Book a <span className="text-[#00F6FF]">Consultation</span>
                      </h3>
                      <p className="text-sm text-gray-400">Schedule a meeting to discuss your project</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#00F6FF]/10 rounded-lg transition-colors duration-300"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <div className="p-6">
                  <div className="bg-white rounded-xl overflow-hidden" style={{ minHeight: '630px' }}>
                    <div
                      className="calendly-inline-widget"
                      data-url="https://calendly.com/muhammadzaryabrafique/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=00f6ff"
                      style={{ minWidth: '320px', height: '630px' }}
                    />
                  </div>
                </div>

                <div className="p-6 border-t border-[#00F6FF]/20 bg-[#0A0F1C]/50 backdrop-blur-sm">
                  <p className="text-sm text-gray-400 text-center">
                    Select a convenient time slot and I'll get back to you with confirmation details
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
