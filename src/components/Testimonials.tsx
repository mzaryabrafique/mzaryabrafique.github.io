import { motion } from 'framer-motion';
import { Star, Briefcase, ShoppingBag, Globe, Facebook, Twitter, Send, Linkedin, MessageSquare } from 'lucide-react';

interface Testimonial {
  platform: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  clientName?: string;
  feedback: string;
  rating: number;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    platform: 'Upwork',
    icon: Briefcase,
    clientName: 'Sarah Mitchell',
    feedback: 'Exceptional work! Delivered a complex web application ahead of schedule. Communication was clear and professional throughout the project.',
    rating: 5,
    gradient: 'from-[#14A800] to-[#108500]'
  },
  {
    platform: 'Fiverr',
    icon: ShoppingBag,
    clientName: 'David Chen',
    feedback: 'Outstanding developer! Fixed critical bugs and improved performance significantly. Will definitely hire again for future projects.',
    rating: 5,
    gradient: 'from-[#1DBF73] to-[#00B22D]'
  },
  {
    platform: 'Google',
    icon: Globe,
    clientName: 'Emma Rodriguez',
    feedback: 'Highly skilled and reliable. Transformed our outdated website into a modern, responsive platform. Exceeded all expectations!',
    rating: 5,
    gradient: 'from-[#4285F4] to-[#34A853]'
  },
  {
    platform: 'Facebook',
    icon: Facebook,
    clientName: 'Michael Thompson',
    feedback: 'Fantastic experience working together! Great attention to detail and delivered exactly what we needed. Highly recommend!',
    rating: 5,
    gradient: 'from-[#1877F2] to-[#0C63D4]'
  },
  {
    platform: 'Twitter (X)',
    icon: Twitter,
    clientName: 'Alex Johnson',
    feedback: 'Top-notch developer! Built a feature-rich dashboard with clean code. Very responsive and easy to work with.',
    rating: 5,
    gradient: 'from-[#1DA1F2] to-[#0C85D0]'
  },
  {
    platform: 'Telegram',
    icon: Send,
    clientName: 'Lisa Park',
    feedback: 'Professional and efficient! Completed the project with excellent quality. Great problem-solver and communicator.',
    rating: 5,
    gradient: 'from-[#0088CC] to-[#006699]'
  },
  {
    platform: 'LinkedIn',
    icon: Linkedin,
    clientName: 'Robert Williams',
    feedback: 'Impressive technical skills and business understanding. Delivered a scalable solution that perfectly fits our needs.',
    rating: 5,
    gradient: 'from-[#0A66C2] to-[#004182]'
  },
  {
    platform: 'Other Platforms',
    icon: MessageSquare,
    clientName: 'Jennifer Lee',
    feedback: 'Amazing work ethic and creativity! Brought fresh ideas to the table and executed them flawlessly. A true professional.',
    rating: 5,
    gradient: 'from-[#FFD700] to-[#FFA500]'
  }
];

const renderStars = (rating: number) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating
              ? 'fill-[#FFD700] text-[#FFD700]'
              : 'fill-gray-600 text-gray-600'
          }`}
        />
      ))}
    </div>
  );
};

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-24 bg-[#0A0F1C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00F6FF] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Clients Say About <span className="text-[#00F6FF]">My Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00F6FF] to-[#FFD700] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Trusted by clients across platforms worldwide, delivering excellence in every project
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative group p-6 rounded-xl bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] border border-[#00F6FF]/20 hover:border-[#00F6FF] hover:shadow-[0_0_30px_rgba(0,246,255,0.2)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F6FF]/0 to-[#00F6FF]/0 group-hover:from-[#00F6FF]/5 group-hover:to-transparent transition-all duration-300 rounded-xl"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <testimonial.icon size={24} className="text-white" />
                  </div>
                  <div>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <h3 className="font-bold text-white text-lg mb-1 group-hover:text-[#00F6FF] transition-colors duration-300">
                  {testimonial.platform}
                </h3>

                {testimonial.clientName && (
                  <p className="text-sm text-gray-400 mb-3">
                    {testimonial.clientName}
                  </p>
                )}

                <p className="text-gray-300 text-sm leading-relaxed">
                  "{testimonial.feedback}"
                </p>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Join hundreds of satisfied clients who trust my expertise
          </p>
        </motion.div>
      </div>
    </section>
  );
}
