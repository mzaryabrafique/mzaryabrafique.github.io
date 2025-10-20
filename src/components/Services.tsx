import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, Blocks, Code, Workflow, Shield, Cpu, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'ai',
    icon: Bot,
    title: 'AI Development',
    description: 'Custom AI solutions including intelligent chatbots, GPT integrations, automation workflows, and machine learning systems tailored to your business needs.',
    features: ['Chatbot Development', 'GPT Integration', 'ML Model Training', 'Intelligent Agents'],
    gradient: 'from-[#00F6FF] to-[#00C4CC]',
  },
  {
    id: 'blockchain',
    icon: Blocks,
    title: 'Smart Contract Development',
    description: 'Secure and efficient smart contracts for multiple blockchain platforms including Ethereum, BSC, Solana, and custom blockchain networks.',
    features: ['Token Creation', 'DeFi Protocols', 'NFT Contracts', 'Security Audits'],
    gradient: 'from-[#FFD700] to-[#FFA500]',
  },
  {
    id: 'dapp',
    icon: Code,
    title: 'dApp Development',
    description: 'End-to-end decentralized application development with seamless Web3 integration, wallet connectivity, and user-friendly interfaces.',
    features: ['Web3 Integration', 'Wallet Connect', 'IPFS Storage', 'Multichain Support'],
    gradient: 'from-[#00C4CC] to-[#00F6FF]',
  },
  {
    id: 'web',
    icon: Workflow,
    title: 'Full Stack Development',
    description: 'Scalable web and mobile applications using modern frameworks, cloud architecture, and best practices for performance and security.',
    features: ['React/Next.js Apps', 'Mobile Apps', 'API Development', 'Cloud Deployment'],
    gradient: 'from-[#FFA500] to-[#FFD700]',
  },
  {
    id: 'consulting',
    icon: Shield,
    title: 'Blockchain Consulting',
    description: 'Expert guidance on blockchain architecture, tokenomics, security best practices, and technology selection for your Web3 project.',
    features: ['Architecture Design', 'Security Review', 'Tokenomics', 'Tech Advisory'],
    gradient: 'from-[#00F6FF] to-[#FFD700]',
  },
  {
    id: 'integration',
    icon: Cpu,
    title: 'AI x Blockchain Integration',
    description: 'Cutting-edge solutions combining AI and blockchain technology for intelligent, decentralized systems with enhanced capabilities.',
    features: ['AI-Powered dApps', 'Smart Oracles', 'Predictive Analytics', 'Hybrid Systems'],
    gradient: 'from-[#FFD700] to-[#00F6FF]',
  },
];

export default function Services() {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00F6FF] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services & <span className="text-[#00F6FF]">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00F6FF] to-[#FFD700] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive solutions for AI, Blockchain, and Web Development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="group p-8 rounded-xl bg-gradient-to-br from-[#0A0F1C] to-[#0F1829] border border-[#00F6FF]/20 hover:border-[#00F6FF] hover:shadow-[0_0_30px_rgba(0,246,255,0.2)] flex flex-col relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F6FF]/0 to-[#00F6FF]/0 group-hover:from-[#00F6FF]/5 group-hover:to-transparent transition-all duration-300"></div>

              <div className="relative z-10 flex-1 flex flex-col">
                <div className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-[#0A0F1C]" size={32} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00F6FF] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F6FF]"></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/services/${service.id}`);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00F6FF] to-[#00C4CC] text-[#0A0F1C] font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,246,255,0.6)] transition-all duration-300 group/button"
                >
                  <span>View Details</span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={18} className="group-hover/button:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-8">
            Ready to bring your vision to life?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/services/ai')}
              className="px-8 py-4 bg-gradient-to-r from-[#00F6FF] to-[#00C4CC] text-[#0A0F1C] font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,246,255,0.5)] transition-all duration-300 transform hover:scale-105"
            >
              View All Services & Request
            </button>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-[#00F6FF] text-[#00F6FF] font-semibold rounded-lg hover:bg-[#00F6FF] hover:text-[#0A0F1C] transition-all duration-300"
            >
              Let's Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
