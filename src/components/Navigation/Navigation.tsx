'use client'

import { useState } from 'react';

interface NavigationProps {
  className?: string;
}

const navLinks = [
  { href: '#introduction', label: 'Introduction' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#alliances', label: 'Alliances' },
  { href: '#legacy', label: 'Legacy' },
  { href: '#appendix', label: 'Register' },
];

export function Navigation({ className = '' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`bg-white/95 backdrop-blur-sm border-b border-card-border fixed w-full top-0 z-50 ${className}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl font-serif text-heading">
            Sprouse-Prouse Research
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className="w-4 h-0.5 bg-heading"></span>
              <span className="w-4 h-0.5 bg-heading"></span>
              <span className="w-4 h-0.5 bg-heading"></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-card-border pt-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map(({ href, label }) => (
                <a 
                  key={href} 
                  href={href} 
                  className="nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;