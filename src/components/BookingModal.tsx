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
            className="fixed inset-0 bg-brand-bg/80 backdrop-blur-sm z-50 overflow-y-auto pt-10 pb-10"
            onClick={handleBackdropClick}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl mx-auto bg-brand-surface rounded-[12px] shadow-2xl border border-brand-border overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between p-6 border-b border-brand-border bg-brand-surface">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-[6px] bg-brand-bg border border-brand-border flex items-center justify-center">
                      <Calendar className="text-brand-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-medium text-brand-primary tracking-tight">
                        Book a Consultation
                      </h3>
                      <p className="text-[14px] text-brand-secondary">Schedule a meeting to discuss your project</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="w-10 h-10 flex items-center justify-center text-brand-secondary hover:text-brand-primary hover:bg-brand-bg rounded-[6px] transition-colors duration-300"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                <div className="p-6 bg-brand-bg">
                  <div className="bg-white rounded-card overflow-hidden border border-brand-border" style={{ minHeight: '630px' }}>
                    <div
                      className="calendly-inline-widget"
                      data-url="https://calendly.com/muhammadzaryabrafique/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=252525"
                      style={{ minWidth: '320px', height: '630px' }}
                    />
                  </div>
                </div>

                <div className="p-6 border-t border-brand-border bg-brand-surface">
                  <p className="text-[14px] text-brand-secondary text-center">
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
