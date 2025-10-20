import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'ChainTrust AI',
    description: 'Institutional-grade AI risk and review engine for Web3 projects, combining machine learning with blockchain analytics.',
    tags: ['AI', 'Blockchain', 'Risk Analysis', 'Machine Learning'],
    gradient: 'from-[#00F6FF] to-[#00C4CC]',
    image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'PortfolioToken (BSC)',
    description: 'Tokenized portfolio management smart contract on Binance Smart Chain with automated rebalancing and yield optimization.',
    tags: ['Solidity', 'BSC', 'DeFi', 'Smart Contracts'],
    gradient: 'from-[#FFD700] to-[#FFA500]',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'NFT Marketplace',
    description: 'Ethereum-based NFT platform with wallet integration, minting tools, and decentralized storage via IPFS.',
    tags: ['Ethereum', 'NFT', 'IPFS', 'Web3'],
    gradient: 'from-[#00F6FF] to-[#FFD700]',
    image: 'https://images.pexels.com/photos/7567480/pexels-photo-7567480.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Crypto Funding dApp',
    description: 'Cross-chain deposit and rewards platform supporting BSC and MultiversX with secure multi-signature wallets.',
    tags: ['Multichain', 'BSC', 'MultiversX', 'DeFi'],
    gradient: 'from-[#00C4CC] to-[#00F6FF]',
    image: 'https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Rukuh - Prayer Times',
    description: 'Elegant mobile app built with Kotlin and Jetpack Compose, featuring real-time prayer notifications and Firebase integration.',
    tags: ['Kotlin', 'Firebase', 'Android', 'Mobile'],
    gradient: 'from-[#FFA500] to-[#FFD700]',
    image: 'https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'AI Agent Framework',
    description: 'Custom framework for building intelligent agents with GPT integration, workflow automation, and conversational AI capabilities.',
    tags: ['AI', 'GPT', 'Python', 'Automation'],
    gradient: 'from-[#00F6FF] to-[#00C4CC]',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0A0F1C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-[#00F6FF] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-[#FFD700] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-[#00F6FF]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00F6FF] to-[#FFD700] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my work where intelligence meets decentralization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] border border-[#00F6FF]/20 hover:border-[#00F6FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,246,255,0.2)] transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] to-transparent opacity-60"></div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00F6FF] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-[#00F6FF]/10 text-[#00F6FF] border border-[#00F6FF]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00F6FF]/10 text-[#00F6FF] hover:bg-[#00F6FF] hover:text-[#0A0F1C] transition-all duration-300 text-sm font-semibold">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-all duration-300 text-sm font-semibold">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
