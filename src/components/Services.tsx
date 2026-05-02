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
  },
  {
    id: 'blockchain',
    icon: Blocks,
    title: 'Smart Contract Development',
    description: 'Secure and efficient smart contracts for multiple blockchain platforms including Ethereum, BSC, Solana, and custom blockchain networks.',
    features: ['Token Creation', 'DeFi Protocols', 'NFT Contracts', 'Security Audits'],
  },
  {
    id: 'dapp',
    icon: Code,
    title: 'dApp Development',
    description: 'End-to-end decentralized application development with seamless Web3 integration, wallet connectivity, and user-friendly interfaces.',
    features: ['Web3 Integration', 'Wallet Connect', 'IPFS Storage', 'Multichain Support'],
  },
  {
    id: 'web',
    icon: Workflow,
    title: 'Full Stack Development',
    description: 'Scalable web and mobile applications using modern frameworks, cloud architecture, and best practices for performance and security.',
    features: ['React/Next.js Apps', 'Mobile Apps', 'API Development', 'Cloud Deployment'],
  },
  {
    id: 'consulting',
    icon: Shield,
    title: 'Blockchain Consulting',
    description: 'Expert guidance on blockchain architecture, tokenomics, security best practices, and technology selection for your Web3 project.',
    features: ['Architecture Design', 'Security Review', 'Tokenomics', 'Tech Advisory'],
  },
  {
    id: 'integration',
    icon: Cpu,
    title: 'AI x Blockchain Integration',
    description: 'Cutting-edge solutions combining AI and blockchain technology for intelligent, decentralized systems with enhanced capabilities.',
    features: ['AI-Powered dApps', 'Smart Oracles', 'Predictive Analytics', 'Hybrid Systems'],
  },
];

export default function Services() {
  const navigate = useNavigate();
  return (
    <section id="services" className="py-32 bg-brand-bg relative overflow-hidden border-t border-brand-border">
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col items-center">
          <span className="uppercase tracking-widest text-[12px] text-brand-tertiary mb-4 font-medium">Expertise</span>
          <h2 className="text-[48px] font-normal text-brand-primary tracking-tight mb-4 text-center">
            Services & Capabilities
          </h2>
          <p className="text-brand-secondary text-[20px] max-w-2xl mx-auto text-center font-normal">
            Comprehensive solutions for AI, Blockchain, and Web Development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-card bg-brand-bg border border-brand-border flex flex-col relative overflow-hidden transition-colors duration-300 hover:bg-brand-surface group"
            >
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-12 h-12 mb-6 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center transition-transform duration-300">
                  <service.icon className="text-brand-secondary" size={24} />
                </div>

                <h3 className="text-[22px] font-medium text-brand-primary mb-3">
                  {service.title}
                </h3>

                <p className="text-brand-secondary mb-6 leading-[1.4] flex-1 text-[16px]">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-brand-tertiary"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-tertiary"></span>
                      <span className="text-[14px] uppercase tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/services/${service.id}`);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-surface border border-brand-border text-brand-secondary font-medium rounded-[6px] hover:text-brand-primary hover:bg-brand-surface transition-all duration-300 text-[14px]"
                >
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-[24px] text-brand-primary mb-8 font-normal tracking-tight">
            Ready to bring your vision to life?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/services/ai')}
              className="px-8 py-4 bg-brand-button text-brand-secondary font-medium rounded-button hover:bg-brand-button/80 transition-all duration-300"
            >
              View All Services & Request
            </button>
            <a
              href="#contact"
              className="px-8 py-4 bg-brand-surface border border-brand-border text-brand-secondary font-medium rounded-button hover:text-brand-primary transition-all duration-300 flex items-center justify-center"
            >
              Let's Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
