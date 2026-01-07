import { useState } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Github } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
];

const socialLinks = [
  { icon: Mail, href: 'mailto:shubham.rawat@example.com', label: 'Email' },
  { icon: Phone, href: 'tel:+919876543210', label: 'Phone' },
  { icon: Linkedin, href: 'https://linkedin.com/in/shubhamrawat', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/shubham318', label: 'GitHub' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-burgundy text-white">
      <div className="container-wide py-8 text-center">
        {/* Name & Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Shubham Rawat</h1>
        <p className="text-xl md:text-2xl font-light opacity-90 mb-6">Data Scientist</p>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-3 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center hover:bg-white hover:text-burgundy transition-colors"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex justify-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden mx-auto p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-burgundy border-t border-white/20 pb-4">
          <div className="container-wide flex flex-col items-center gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
