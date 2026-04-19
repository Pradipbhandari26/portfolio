import { Code2, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-950 border-t border-gray-800/50 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <Code2 size={20} className="text-teal-400" />
            <span>
              {personalInfo.name.split(' ')[0]}{' '}
              <span className="text-teal-400">{personalInfo.name.split(' ')[1]}</span>
            </span>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm flex items-center gap-1.5 justify-center">
              Built with <Heart size={13} className="text-red-400 fill-red-400" /> from{' '}
              <span className="text-teal-400 font-medium">{personalInfo.location}</span>
            </p>
            <p className="text-gray-600 text-xs mt-1">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 hover:border-teal-500/50 text-gray-400 hover:text-teal-400 text-sm font-medium transition-all duration-200"
          >
            <ArrowUp size={15} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
