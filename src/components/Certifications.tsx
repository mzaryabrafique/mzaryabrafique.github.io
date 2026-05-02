import { Award, GraduationCap } from 'lucide-react';

const certifications = [
  {
    title: 'Certified Blockchain Practitioner',
    issuer: 'The SecOps Group',
    icon: Award,
  },
  {
    title: 'IBM Blockchain Foundation Developer',
    issuer: 'Cognitive Class',
    icon: Award,
  },
  {
    title: 'Backend Development & APIs',
    issuer: 'freeCodeCamp',
    icon: Award,
  },
  {
    title: 'Blockchain Specialization',
    issuer: 'Coursera',
    icon: Award,
  },
];

const education = {
  degree: 'BS in Computer Science',
  institution: 'COMSATS University',
  icon: GraduationCap,
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 bg-brand-bg relative overflow-hidden border-t border-brand-border">
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col items-center">
          <span className="uppercase tracking-widest text-[12px] text-brand-tertiary mb-4 font-medium">Achievements</span>
          <h2 className="text-[48px] font-normal text-brand-primary tracking-tight mb-4 text-center">
            Certifications & Education
          </h2>
        </div>

        <div className="mb-16 flex justify-center">
          <div className="p-8 rounded-card bg-brand-surface border border-brand-border transition-colors duration-300 hover:bg-brand-bg max-w-md w-full">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center transition-transform duration-300">
                <education.icon className="text-brand-secondary" size={28} />
              </div>
              <div>
                <h3 className="text-[22px] font-medium text-brand-primary mb-1">
                  {education.degree}
                </h3>
                <p className="text-brand-secondary text-[16px]">{education.institution}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-[12px] bg-brand-surface border border-brand-border transition-colors duration-300 hover:bg-brand-bg"
            >
              <div className="flex items-center gap-5">
                <div
                  className="w-12 h-12 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center transition-transform duration-300 flex-shrink-0"
                >
                  <cert.icon className="text-brand-secondary" size={20} />
                </div>
                <div>
                  <h3 className="text-[18px] font-medium text-brand-primary mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-brand-tertiary text-[14px]">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
