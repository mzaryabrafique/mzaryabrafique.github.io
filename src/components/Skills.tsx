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
    <section className="py-24 bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#00F6FF] rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-[#00F6FF]">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00F6FF] to-[#FFD700] mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-[#00F6FF] to-[#00C4CC] text-[#0A0F1C] shadow-[0_0_20px_rgba(0,246,255,0.5)]'
                  : 'bg-[#0A0F1C] text-gray-400 border border-[#00F6FF]/20 hover:border-[#00F6FF] hover:text-[#00F6FF]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="min-h-[300px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="group p-4 rounded-lg bg-[#0A0F1C] border border-[#00F6FF]/20 hover:border-[#00F6FF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,246,255,0.2)] transform hover:-translate-y-1 text-center"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
                }}
              >
                <div className="text-white font-medium group-hover:text-[#00F6FF] transition-colors duration-300">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
