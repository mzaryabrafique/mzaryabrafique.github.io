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
    <section className="py-24 bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#FFD700] rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-[#00F6FF]">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00F6FF] to-[#FFD700] mx-auto"></div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-[#00F6FF] via-[#00C4CC] to-[#FFD700]"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 pl-20">
              <div className="absolute left-0 top-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00F6FF] to-[#00C4CC] flex items-center justify-center shadow-[0_0_20px_rgba(0,246,255,0.5)]">
                  <Briefcase className="text-[#0A0F1C]" size={24} />
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] border border-[#00F6FF]/20 hover:border-[#00F6FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,246,255,0.2)]">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-[#00F6FF] font-semibold">
                    <span>{exp.company}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start gap-2 text-gray-400"
                    >
                      <span className="text-[#00F6FF] mt-1.5">▹</span>
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
