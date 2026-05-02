import { useState } from 'react';

const skillCategories = [
  {
    name: 'Languages',
    skills: ['Rust', 'Golang', 'Solidity', 'JavaScript', 'TypeScript', 'Python', 'Kotlin', 'Java', 'GraphQL', 'BashScript', 'C', 'C#'],
  },
  {
    name: 'Databases',
    skills: ['MongoDB', 'Firebase', 'CouchDB', 'PostgreSQL', 'MySQL', 'RoomDB', 'Supabase'],
  },
  {
    name: 'Frameworks',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express', 'Substrate', 'Cosmos', 'Hardhat', 'Foundry', 'IPFS', '.NET', 'React Native', 'Angular'],
  },
  {
    name: 'AI Tools',
    skills: ['OpenAI API', 'Gemini API', 'TensorFlow', 'Scikit-learn', 'Pandas', 'n8n', 'make.com', 'Agent Development Kit'],
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS EKS', 'Docker', 'GitHub Actions'],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-32 bg-brand-bg relative overflow-hidden border-t border-brand-border">
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col items-center">
          <span className="uppercase tracking-widest text-[12px] text-brand-tertiary mb-4 font-medium">Technologies</span>
          <h2 className="text-[48px] font-normal text-brand-primary tracking-tight mb-4 text-center">
            Skills & Stack
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-button font-medium transition-all duration-300 text-[16px] ${
                activeCategory === index
                  ? 'bg-brand-button text-brand-primary border border-transparent'
                  : 'bg-brand-surface text-brand-secondary border border-brand-border hover:text-brand-primary hover:border-brand-tertiary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="min-h-[300px] max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-[6px] bg-brand-surface border border-brand-border transition-colors duration-300 hover:bg-brand-bg flex items-center justify-center text-center"
                style={{
                  animation: `fadeInUp 0.3s ease-out ${index * 0.03}s both`,
                }}
              >
                <span className="text-brand-secondary font-medium tracking-wide">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
