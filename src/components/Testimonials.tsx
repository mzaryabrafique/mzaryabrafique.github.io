import { motion } from 'framer-motion';
import { Star, Briefcase, ShoppingBag, Globe, Facebook, Twitter, Send, Linkedin, MessageSquare } from 'lucide-react';

interface Testimonial {
  platform: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  clientName?: string;
  feedback: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    platform: 'Upwork',
    icon: Briefcase,
    clientName: 'Sarah Mitchell',
    feedback: 'Exceptional work! Delivered a complex web application ahead of schedule. Communication was clear and professional throughout the project.',
    rating: 5,
  },
  {
    platform: 'Fiverr',
    icon: ShoppingBag,
    clientName: 'David Chen',
    feedback: 'Outstanding developer! Fixed critical bugs and improved performance significantly. Will definitely hire again for future projects.',
    rating: 5,
  },
  {
    platform: 'Google',
    icon: Globe,
    clientName: 'Emma Rodriguez',
    feedback: 'Highly skilled and reliable. Transformed our outdated website into a modern, responsive platform. Exceeded all expectations!',
    rating: 5,
  },
  {
    platform: 'Facebook',
    icon: Facebook,
    clientName: 'Michael Thompson',
    feedback: 'Fantastic experience working together! Great attention to detail and delivered exactly what we needed. Highly recommend!',
    rating: 5,
  },
  {
    platform: 'Twitter (X)',
    icon: Twitter,
    clientName: 'Alex Johnson',
    feedback: 'Top-notch developer! Built a feature-rich dashboard with clean code. Very responsive and easy to work with.',
    rating: 5,
  },
  {
    platform: 'Telegram',
    icon: Send,
    clientName: 'Lisa Park',
    feedback: 'Professional and efficient! Completed the project with excellent quality. Great problem-solver and communicator.',
    rating: 5,
  },
  {
    platform: 'LinkedIn',
    icon: Linkedin,
    clientName: 'Robert Williams',
    feedback: 'Impressive technical skills and business understanding. Delivered a scalable solution that perfectly fits our needs.',
    rating: 5,
  },
  {
    platform: 'Other Platforms',
    icon: MessageSquare,
    clientName: 'Jennifer Lee',
    feedback: 'Amazing work ethic and creativity! Brought fresh ideas to the table and executed them flawlessly. A true professional.',
    rating: 5,
  }
];

const renderStars = (rating: number) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-3 h-3 ${
            index < rating
              ? 'fill-brand-secondary text-brand-secondary'
              : 'fill-brand-bg text-brand-border'
          }`}
        />
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-brand-bg relative overflow-hidden border-t border-brand-border">
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col items-center">
          <span className="uppercase tracking-widest text-[12px] text-brand-tertiary mb-4 font-medium">Testimonials</span>
          <h2 className="text-[48px] font-normal text-brand-primary tracking-tight mb-4 text-center">
            Client Feedback
          </h2>
          <p className="text-brand-secondary text-[20px] max-w-2xl mx-auto text-center font-normal">
            Trusted by clients across platforms worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 rounded-card bg-brand-bg border border-brand-border hover:bg-brand-surface transition-colors duration-300"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-[6px] bg-brand-surface border border-brand-border flex items-center justify-center text-brand-secondary">
                    <testimonial.icon size={20} />
                  </div>
                  <div>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <p className="text-brand-secondary text-[16px] leading-[1.4] mb-6 italic">
                  "{testimonial.feedback}"
                </p>

                <div>
                  {testimonial.clientName && (
                    <p className="text-[14px] text-brand-primary font-medium mb-1">
                      {testimonial.clientName}
                    </p>
                  )}
                  <h3 className="font-normal text-brand-tertiary text-[12px] uppercase tracking-wide">
                    {testimonial.platform}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
