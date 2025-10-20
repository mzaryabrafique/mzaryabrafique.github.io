import { Award, GraduationCap } from 'lucide-react';

const certifications = [
  {
    title: 'Certified Blockchain Practitioner',
    issuer: 'The SecOps Group',
    icon: Award,
    color: 'from-[#00F6FF] to-[#00C4CC]',
  },
  {
    title: 'IBM Blockchain Foundation Developer',
    issuer: 'Cognitive Class',
    icon: Award,
    color: 'from-[#FFD700] to-[#FFA500]',
  },
  {
    title: 'Backend Development & APIs',
    issuer: 'freeCodeCamp',
    icon: Award,
    color: 'from-[#00C4CC] to-[#00F6FF]',
  },
  {
    title: 'Blockchain Specialization',
    issuer: 'Coursera',
    icon: Award,
    color: 'from-[#FFA500] to-[#FFD700]',
  },
];

const education = {
  degree: 'BS in Computer Science',
  institution: 'COMSATS University',
  icon: GraduationCap,
};

export default function Certifications() {
  return (
    <section className="py-24 bg-[#0A0F1C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[#00F6FF] rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="text-[#00F6FF]">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00F6FF] to-[#FFD700] mx-auto"></div>
        </div>

        <div className="mb-16 flex justify-center">
          <div className="group p-8 rounded-xl bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] border-2 border-[#FFD700] hover:border-[#00F6FF] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,215,0,0.3)] transform hover:-translate-y-2 max-w-md w-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <education.icon className="text-[#0A0F1C]" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300">
                  {education.degree}
                </h3>
                <p className="text-[#FFD700] font-semibold">{education.institution}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] border border-[#00F6FF]/20 hover:border-[#00F6FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,246,255,0.2)] transform hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                >
                  <cert.icon className="text-[#0A0F1C]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00F6FF] transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
