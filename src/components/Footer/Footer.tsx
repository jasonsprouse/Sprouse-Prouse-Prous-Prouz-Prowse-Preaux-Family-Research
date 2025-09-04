'use client'

interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`bg-gray-800 text-white py-12 ${className}`}>
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
  );
}

export default Footer;