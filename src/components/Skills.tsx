import { Code2, TrendingUp, Server, Layers, Shield } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { SectionHeader } from './About';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Code2,
  TrendingUp,
  Server,
  Layers,
  Shield,
};

const categoryColors: Record<string, string> = {
  'Web Development': 'from-blue-500/10 to-blue-500/5 border-blue-500/20 text-blue-400',
  'Digital Marketing': 'from-teal-500/10 to-teal-500/5 border-teal-500/20 text-teal-400',
  'Server & Infrastructure': 'from-orange-500/10 to-orange-500/5 border-orange-500/20 text-orange-400',
  'Tools & Design': 'from-rose-500/10 to-rose-500/5 border-rose-500/20 text-rose-400',
  'IT & Support': 'from-cyan-500/10 to-cyan-500/5 border-cyan-500/20 text-cyan-400',
};

const tagColors: Record<string, string> = {
  'Web Development': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Digital Marketing': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  'Server & Infrastructure': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Tools & Design': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'IT & Support': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Skills" title="Technologies & expertise I work with" />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon];
            const headerColor = categoryColors[cat.category] || 'from-gray-500/10 to-gray-500/5 border-gray-500/20 text-gray-400';
            const tagColor = tagColors[cat.category] || 'bg-gray-500/10 text-gray-400 border-gray-500/20';
            const [, , , iconClass] = headerColor.split(' ');

            return (
              <div
                key={cat.category}
                className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 group"
              >
                <div className={`inline-flex items-center gap-2.5 p-2.5 rounded-xl bg-gradient-to-br ${headerColor.split('border')[0]} mb-4`}>
                  {Icon && <Icon size={20} className={iconClass} />}
                </div>
                <h3 className="text-white font-bold text-base mb-4">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium border ${tagColor} transition-all duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-transparent border border-teal-500/20">
          <div className="text-center mb-8">
            <h3 className="text-white font-bold text-xl">Key Achievements</h3>
            <p className="text-gray-400 text-sm mt-1">Results that speak for themselves</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { metric: '400%+', detail: 'Website traffic increase through targeted SEO and content strategies', color: 'text-teal-400' },
              { metric: '1% → 7%', detail: 'Conversion rate improvement for client ecommerce sites', color: 'text-cyan-400' },
              { metric: '50+', detail: 'Websites designed, developed, and successfully deployed', color: 'text-blue-400' },
            ].map((item) => (
              <div key={item.metric} className="text-center p-4 rounded-xl bg-gray-900/50">
                <div className={`text-3xl font-extrabold ${item.color} mb-2`}>{item.metric}</div>
                <p className="text-gray-400 text-xs leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
