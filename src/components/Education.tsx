import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react';
import { education, references } from '../data/portfolioData';
import { SectionHeader } from './About';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Education & References" title="Academic background & testimonials" />

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-teal-400" />
              Education
            </h3>
            {education.map((edu) => (
              <div
                key={edu.id}
                className="relative p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-teal-500/30 transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-t-2xl" />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={22} className="text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">{edu.degree}</h4>
                    <div className="text-teal-400 font-semibold text-sm mb-3">{edu.institution}</div>

                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20">
              <h4 className="text-white font-semibold text-sm mb-3">Continuous Learning</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Dedicated daily time to expanding knowledge of digital marketing, web technologies, and IT trends. Staying current with industry tools like Ahrefs, SEMrush, Google Analytics 4, and modern web frameworks.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <Star size={20} className="text-teal-400" />
              References
            </h3>
            <div className="space-y-4">
              {references.map((ref) => (
                <div
                  key={ref.name}
                  className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-teal-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {ref.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{ref.name}</div>
                      <div className="text-teal-400 text-xs font-medium mb-3">{ref.company}</div>
                      <div className="space-y-1">
                        <a
                          href={`mailto:${ref.email}`}
                          className="block text-gray-400 hover:text-teal-400 text-xs transition-colors"
                        >
                          {ref.email}
                        </a>
                        <div className="text-gray-400 text-xs">{ref.phone}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { label: 'Languages Spoken', value: '3', sub: 'English, Hindi, Nepali' },
                { label: 'Countries Worked', value: '2', sub: 'Nepal & Australia' },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-gray-900 border border-gray-800 text-center">
                  <div className="text-2xl font-extrabold text-teal-400 mb-1">{item.value}</div>
                  <div className="text-white text-xs font-semibold mb-0.5">{item.label}</div>
                  <div className="text-gray-500 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
