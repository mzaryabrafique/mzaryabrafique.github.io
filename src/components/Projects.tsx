import { ExternalLink, Github } from 'lucide-react';
import mapRepute from "../assets/projects/MapRepute-main.png"
import chainTrustAI from "../assets/projects/chaintrustai.png"
import distributorPro from "../assets/projects/distibutorpro.png"
import nftMarkteplace from "../assets/projects/nft-marketplace.png"

const projects = [
   {
    title: 'MapRepute',
    description: 'Unlock AI-powered insights from your Google Maps reviews. Analyze sentiment, track competitors, and enhance your local presence.',
    tags: ['AI', 'React', 'Google Map', 'Gemini'],
    demoLink: "https://maprepute.vercel.app",
    github: "#",
    image: mapRepute,
  },
  {
    title: 'ChainTrust AI',
    description: 'Institutional-grade AI risk and review engine for Web3 projects, combining machine learning with blockchain analytics.',
    tags: ['AI', 'Blockchain', 'Risk Analysis'],
    image: chainTrustAI,
  },
  {
    title: 'DistributorPro',
    description: 'Distributor Management System is a complete web + mobile solution. The Android app lets order bookers log in, add shops, and create bookings.',
    tags: ['Node.js', 'React', 'PostgreSQL'],
    image: distributorPro,
  },
  {
    title: 'NFT Marketplace',
    description: 'Ethereum-based NFT platform with wallet integration, minting tools, and decentralized storage via IPFS.',
    tags: ['Ethereum', 'NFT', 'IPFS', 'Web3'],
    image: nftMarkteplace,
  },
  {
    title: 'Crypto Funding dApp',
    description: 'Cross-chain deposit and rewards platform supporting BSC and MultiversX with secure multi-signature wallets.',
    tags: ['Multichain', 'BSC', 'DeFi'],
    image: 'https://images.unsplash.com/photo-1620207418302-439b387441b0?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Rukuh - Prayer Times',
    description: 'Elegant mobile app built with Kotlin and Jetpack Compose, featuring real-time prayer notifications and Firebase integration.',
    tags: ['Kotlin', 'Firebase', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'AI Agent Framework',
    description: 'Custom framework for building intelligent agents with GPT integration, workflow automation, and conversational AI capabilities.',
    tags: ['AI', 'GPT', 'Python'],
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-brand-bg relative overflow-hidden border-t border-brand-border">
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col items-center">
          <span className="uppercase tracking-widest text-[12px] text-brand-tertiary mb-4 font-medium">Work</span>
          <h2 className="text-[48px] font-normal text-brand-primary tracking-tight mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-brand-secondary text-[20px] max-w-2xl mx-auto text-center font-normal">
            Explore my work where intelligence meets decentralization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-card bg-brand-bg border border-brand-border transition-colors duration-300 overflow-hidden flex flex-col hover:bg-brand-surface"
            >
              <div className="relative h-56 overflow-hidden bg-brand-surface border-b border-brand-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity hover:mix-blend-normal"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-[22px] font-medium text-brand-primary mb-3">
                  {project.title}
                </h3>

                <p className="text-brand-secondary mb-6 leading-[1.4] text-[16px] flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-[11px] font-medium uppercase tracking-wider rounded-[4px] bg-brand-bg border border-brand-border text-brand-tertiary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-[6px] bg-brand-surface border border-brand-border text-brand-secondary hover:text-brand-primary transition-all duration-300 text-[14px] font-medium">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-[6px] bg-brand-surface border border-brand-border text-brand-secondary hover:text-brand-primary transition-all duration-300 text-[14px] font-medium">
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
