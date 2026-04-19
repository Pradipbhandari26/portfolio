import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gray-800/50' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
          className="flex items-center gap-2 text-white font-bold text-lg tracking-tight hover:text-teal-400 transition-colors"
        >
          <Code2 size={22} className="text-teal-400" />
          PB
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    active === id
                      ? 'text-teal-400 bg-teal-400/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
          className="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-teal-500/25"
        >
          Hire Me
        </a>

        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-gray-950/98 backdrop-blur-md border-t border-gray-800/50 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="block px-4 py-2.5 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="block text-center px-4 py-2.5 rounded-md bg-teal-500 text-white text-sm font-semibold hover:bg-teal-400 transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
