import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineer Specializing in Full Stack Development, AI & Blockchain',
    company: 'Freelancing',
    period: 'Present',
    description: 'Software Engineer specializing in Full Stack Development, AI & Blockchain, focused on building innovative, scalable, and intelligent applications across Web3 and automation ecosystems.',
    achievements: [
      'Full-Stack Web Apps: Build the backend and frontend.',
      'AI & Web3 Automation: Workflow bots, data pipelines, and smart automations.',
      'SaaS & MVP Development: From idea validation to a working product in weeks, not months.',
      'Smart Contract Development, Token Launches, gas cost reduction, & Custom Crypto Bots, automate business logic, and save valuable time.',
      'NFT Marketplace Creation opens doors to new revenue streams and digital communities.',
      'Wallet Integration & Tokenization seamless onboarding that boosts adoption.',
      'Bridge Development & Multi-Network Integrations, break silos and reach new blockchain ecosystems.',
      'EVM & Non-EVM Expertise (Ethereum, Polygon, BNB Chain, Solana, Stellar), your project, anywhere you want it to grow.',
      'Layer 1 Blockchain Development Expertise (Substrate, Cosmos, Rust, Golang), launch your own secure & scalable blockchain network.',
    ],
  },
  {
    role: 'Blockchain Developer',
    company: 'InvoZone',
    period: 'March 2022 - October 2025',
    description: 'Leading development of multichain dApps, NFT platforms, Layer 2 rollups, and decentralized identity systems. Architecting smart contracts and Web3 integrations.',
    achievements: [
      'Built institutional-grade blockchain solutions',
      'Developed cross-chain protocols and bridges',
      'Implemented Layer 2 scaling solutions',
    ],
  },
  {
    role: 'Mobile App Developer',
    company: 'Sruplex',
    period: '2021 - 2022',
    description: 'Specialized in Kotlin and Firebase app development with focus on NFT integrations and real-time features. Created elegant mobile experiences with Jetpack Compose.',
    achievements: [
      'Launched multiple production mobile apps',
      'Integrated NFT functionality in mobile platforms',
      'Built real-time notification systems',
    ],
  },
  {
    role: 'Android Developer',
    company: 'COMSATS Software House',
    period: '2019 - 2020',
    description: 'Developed internal applications and conducted workshops for students. Focused on mobile app architecture and best practices.',
    achievements: [
      'Created training materials for development teams',
      'Built internal tools for campus management',
      'Mentored junior developers',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-brand-bg relative overflow-hidden border-t border-brand-border">
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col items-center">
          <span className="uppercase tracking-widest text-[12px] text-brand-tertiary mb-4 font-medium">Timeline</span>
          <h2 className="text-[48px] font-normal text-brand-primary tracking-tight mb-4 text-center">
            Work Experience
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-brand-border hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:pl-24">
              <div className="hidden md:flex absolute left-[8px] top-0 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center">
                  <Briefcase className="text-brand-secondary" size={20} />
                </div>
              </div>

              <div className="p-8 rounded-card bg-brand-bg border border-brand-border transition-colors duration-300 hover:bg-brand-surface relative">
                <div className="mb-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[22px] font-medium text-brand-primary mb-2 leading-[1.3]">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-brand-secondary font-medium">
                      <span>{exp.company}</span>
                      <span className="text-brand-tertiary">•</span>
                      <span className="text-brand-tertiary">{exp.period}</span>
                    </div>
                  </div>
                  <div className="md:hidden w-10 h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center mb-4">
                     <Briefcase className="text-brand-secondary" size={18} />
                  </div>
                </div>

                <p className="text-[16px] text-brand-secondary mb-6 leading-[1.5]">{exp.description}</p>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start gap-3 text-brand-tertiary text-[15px] leading-[1.4]"
                    >
                      <span className="text-brand-secondary mt-1 text-[12px]">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
