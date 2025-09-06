'use client'

import { useState, useEffect } from 'react';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (winScroll / height) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress">
        <div 
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <header className={`professional-nav ${isScrolled ? 'scrolled' : ''} ${className}`}>
        <nav className="nav-container">
          {/* Brand */}
          <div className="nav-brand">
            <h1 className="gradient-text font-serif">SPROUSE-PROUSE</h1>
            <span className="nav-tagline">Eight Centuries of Legacy</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-menu hidden md:flex">
            {navLinks.map(({ href, label }) => (
              <a 
                key={href} 
                href={href} 
                className="nav-link professional-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="nav-link-text">{label}</span>
                <div className="nav-link-indicator" />
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`hamburger md:hidden ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-content">
            {navLinks.map(({ href, label }, index) => (
              <a 
                key={href} 
                href={href} 
                className="mobile-nav-link"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mobile-nav-icon">→</span>
                {label}
              </a>
            ))}
          </div>
        </div>
        
        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <div className="mobile-backdrop" onClick={() => setIsMobileMenuOpen(false)} />
        )}
      </header>
    </>
  );
}

export default Navigation;