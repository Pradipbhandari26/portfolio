import { User, Globe, Phone, Mail, MapPin, Monitor } from 'lucide-react';
import { personalInfo, languages } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="About Me" title="Passionate about technology & digital growth" />

        <div className="grid md:grid-cols-2 gap-12 items-start mt-16">
          <div>
            <div className="relative inline-block mb-8">
              <div className="w-52 h-52 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 p-0.5">
                <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Pradip Bhandari"
                    className="w-full h-full object-cover rounded-2xl opacity-80"
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center shadow-lg">
                <Monitor size={20} className="text-white" />
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm mb-6">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: Mail, label: 'Email', value: personalInfo.email },
                { icon: Phone, label: 'Phone', value: personalInfo.phone },
                { icon: MapPin, label: 'Location', value: personalInfo.location },
                { icon: Globe, label: 'Website', value: personalInfo.website },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-teal-400" />
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs block">{label}</span>
                    <span className="text-gray-200 font-medium">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
                <User size={18} className="text-teal-400" />
                Profile Highlights
              </h3>
              <div className="space-y-3">
                {[
                  { title: '6+ Years Experience', desc: 'Across web development, digital marketing, and IT support roles' },
                  { title: '400% Traffic Growth', desc: 'Proven SEO strategies that deliver measurable results for clients' },
                  { title: 'Full-Stack Capabilities', desc: 'From server administration to front-end design and digital campaigns' },
                  { title: 'Multi-Industry Exposure', desc: 'Worked with ecommerce, transport, and IT service companies' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-800 hover:border-teal-500/30 transition-all duration-300 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0 group-hover:shadow-[0_0_8px_rgba(20,184,166,0.8)] transition-shadow" />
                    <div>
                      <div className="text-white font-medium text-sm mb-0.5">{item.title}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-5">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-gray-300 text-sm font-medium">{lang.name}</span>
                      <span className="text-teal-400 text-xs font-medium">{lang.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 transition-all duration-700"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="text-center">
      <span className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{title}</h2>
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-500" />
        <div className="w-2 h-2 rounded-full bg-teal-400" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-500" />
      </div>
    </div>
  );
}
