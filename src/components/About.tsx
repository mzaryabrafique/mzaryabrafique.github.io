import { Brain, Blocks, Code2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Crafting intelligent systems with GPT integrations, ML automation, and agent-based workflows',
    },
    {
      icon: Blocks,
      title: 'Blockchain Engineering',
      description: 'Building decentralized solutions from smart contracts to Layer 2 rollups and identity systems',
    },
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Creating scalable web and mobile applications with modern frameworks and cloud architecture',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0F1C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-[#FFD700] rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#00F6FF]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00F6FF] to-[#FFD700] mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm <span className="text-[#00F6FF] font-semibold">Muhammad Zaryab Rafique</span>, a passionate technologist
            at the intersection of artificial intelligence and blockchain innovation. With years of experience building
            cutting-edge solutions, I transform complex challenges into elegant, scalable systems.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="text-[#FFD700] font-semibold">"From Smart Contracts to Smart Agents — I craft technology that thinks, connects, and scales."</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] border border-[#00F6FF]/20 hover:border-[#00F6FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,246,255,0.2)] transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 mb-6 rounded-lg bg-gradient-to-br from-[#00F6FF] to-[#00C4CC] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="text-[#0A0F1C]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
              <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
