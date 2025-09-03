'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Timeline from '@/components/Timeline';

export default function Home() {
  useEffect(() => {
    // Fade in the body once loaded
    document.body.classList.add('loaded');
  }, []);

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero-bg bg-cover bg-center bg-fixed min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-gray-800 mb-6 tracking-wider">
            SPROUSE-PROUSE
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light mb-8 max-w-4xl mx-auto leading-relaxed">
            An Eight-Century Legacy of <em className="font-serif">Adaptation</em> and <em className="font-serif">Foresight</em>
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            From the medieval guilds of Europe to the frontier towns of America, 
            the Sprouse-Prouse lineage represents an unbroken chain of entrepreneurial vision, 
            strategic alliances, and commercial innovation spanning eight centuries.
          </p>
          <div className="space-x-6">
            <a
              href="#timeline"
              className="inline-block bg-transparent border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-gray-800 hover:text-white"
            >
              Explore Timeline
            </a>
            <a
              href="#alliances"
              className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:bg-gray-700"
            >
              View Alliances
            </a>
          </div>
        </div>
      </section>

      <Timeline />

      {/* Alliances Section Placeholder */}
      <section id="alliances" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Strategic Alliances
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The family&apos;s success was built on strategic partnerships and 
              alliances that spanned generations and continents.
            </p>
          </div>
          
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Alliance diagram coming soon...</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="font-serif text-lg font-bold tracking-wider">SPROUSE-PROUSE</p>
          <p className="text-sm text-gray-400 mt-2">An Eight-Century Legacy of Adaptation and Foresight.</p>
          <div className="mt-6 space-x-6">
            <a href="#timeline" className="text-gray-300 hover:text-white transition-colors duration-300">Timeline</a>
            <a href="#alliances" className="text-gray-300 hover:text-white transition-colors duration-300">Alliances</a>
            <a href="#legacy" className="text-gray-300 hover:text-white transition-colors duration-300">Legacy</a>
            <a href="#appendix" className="text-gray-300 hover:text-white transition-colors duration-300">Key Figures</a>
          </div>
        </div>
      </footer>
    </>
  );
}
