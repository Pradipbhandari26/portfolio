import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import { SectionHeader } from './About';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Experience" title="Professional journey & accomplishments" />

        <div className="mt-16 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-gray-700 to-transparent -translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                className={`relative grid md:grid-cols-2 gap-8 items-start ${
                  idx % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-teal-500 border-4 border-gray-900 z-10 shadow-[0_0_12px_rgba(20,184,166,0.5)]" />

                <div className={`${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                  <div className="p-6 rounded-2xl bg-gray-950 border border-gray-800 hover:border-teal-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 group text-left">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase size={18} className="text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base leading-tight mb-0.5">{exp.role}</h3>
                        <div className="text-teal-400 font-semibold text-sm">{exp.company}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-gray-600" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-gray-600" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`hidden md:block ${idx % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
