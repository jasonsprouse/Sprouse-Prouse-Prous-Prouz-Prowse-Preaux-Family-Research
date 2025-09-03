'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-serif text-2xl font-bold text-gray-800 tracking-wider">
          SPROUSE-PROUSE
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#timeline" className="nav-link font-semibold tracking-wide">Timeline</a>
          <a href="#alliances" className="nav-link font-semibold tracking-wide">Alliances</a>
          <a href="#legacy" className="nav-link font-semibold tracking-wide">Legacy</a>
          <a href="#appendix" className="nav-link font-semibold tracking-wide">Key Figures</a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          <a href="#timeline" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Timeline</a>
          <a href="#alliances" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Alliances</a>
          <a href="#legacy" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Legacy</a>
          <a href="#appendix" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Key Figures</a>
        </div>
      </div>
    </nav>
  );
}