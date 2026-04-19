import { useEffect, useState } from 'react';
import { ArrowDown, MapPin, Mail, ExternalLink } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

const roles = [
  'Web Developer',
  'Digital Marketing Specialist',
  'IT Support Specialist',
  'SEO Expert',
  'WordPress Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const current = roles[roleIndex];

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-950"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #14b8a6 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight leading-none">
          {personalInfo.name.split(' ')[0]}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
            {personalInfo.name.split(' ')[1]}
          </span>
        </h1>

        <div className="h-10 md:h-12 mb-6 flex items-center justify-center">
          <span className="text-xl md:text-2xl font-semibold text-gray-300">
            {displayed}
            <span className="ml-0.5 inline-block w-0.5 h-6 bg-teal-400 align-middle animate-blink" />
          </span>
        </div>

        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 mb-10">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-teal-400" />
            {personalInfo.location}
          </span>
          <span className="w-px h-4 bg-gray-700" />
          <span className="flex items-center gap-1.5">
            <Mail size={14} className="text-teal-400" />
            {personalInfo.email}
          </span>
          <span className="w-px h-4 bg-gray-700" />
          <span className="flex items-center gap-1.5">
            <ExternalLink size={14} className="text-teal-400" />
            {personalInfo.website}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5"
          >
            Get In Touch
          </button>
          <button
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3 rounded-lg border border-gray-700 hover:border-teal-500/50 text-gray-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            View My Work
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl bg-gray-900/60 border border-gray-800/60 hover:border-teal-500/30 transition-all duration-300"
            >
              <div className="text-2xl font-extrabold text-teal-400 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 hover:text-teal-400 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce group-hover:text-teal-400" />
      </button>
    </section>
  );
}
