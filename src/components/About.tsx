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
    <section id="about" className="py-32 bg-brand-bg relative overflow-hidden border-t border-brand-border">
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col items-center">
          <span className="uppercase tracking-widest text-[12px] text-brand-tertiary mb-4 font-medium">Background</span>
          <h2 className="text-[48px] font-normal text-brand-primary tracking-tight mb-4 text-center">
            About Me
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-24">
          <p className="text-[20px] text-brand-secondary leading-[1.4] mb-8 font-normal">
            I'm <span className="text-brand-primary">Muhammad Zaryab Rafique</span>, a passionate technologist
            at the intersection of artificial intelligence and blockchain innovation. With years of experience building
            cutting-edge solutions, I transform complex challenges into elegant, scalable systems.
          </p>
          <p className="text-[20px] text-brand-tertiary leading-[1.4] font-normal italic">
            "From Smart Contracts to Smart Agents, I craft technology that thinks, connects, and scales."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="p-8 rounded-card bg-brand-bg border border-brand-border transition-colors duration-300 hover:bg-brand-surface"
            >
              <div className="w-12 h-12 mb-6 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center">
                <highlight.icon className="text-brand-secondary" size={24} />
              </div>
              <h3 className="text-[22px] font-medium text-brand-primary mb-3 tracking-normal">{highlight.title}</h3>
              <p className="text-[18px] text-brand-secondary leading-[1.3]">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
