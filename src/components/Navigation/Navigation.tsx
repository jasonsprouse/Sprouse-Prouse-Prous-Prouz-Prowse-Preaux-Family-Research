'use client'

import { useState } from 'react';

interface NavigationProps {
  className?: string;
}

const navLinks = [
  { href: '#timeline', label: 'Timeline' },
  { href: '#alliances', label: 'Alliances' },
  { href: '#legacy', label: 'Legacy' },
  { href: '#appendix', label: 'Key Figures' },
];

export function Navigation({ className = '' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-serif text-xl font-bold tracking-wider text-gray-800">SPROUSE-PROUSE</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="nav-link font-semibold tracking-wide">
              {label}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            id="menu-btn" 
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden">
          {navLinks.map(({ href, label }) => (
            <a 
              key={href} 
              href={href} 
              className="block py-2 px-4 text-sm hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navigation;