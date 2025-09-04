'use client'

interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-bg-secondary border-t border-card-border mt-16 ${className}`}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg font-serif text-heading">
              Sprouse-Prouse Research
            </h4>
            <p className="text-text-light text-sm leading-relaxed">
              An eight-century analysis of the Sprouse-Prouse family and the infrastructure of power, 
              tracing commercial genetics through history.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg font-serif text-heading">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <a href="#introduction" className="text-text-light hover:text-primary transition-colors text-sm">
                Introduction
              </a>
              <a href="#timeline" className="text-text-light hover:text-primary transition-colors text-sm">
                Timeline
              </a>
              <a href="#alliances" className="text-text-light hover:text-primary transition-colors text-sm">
                Alliances
              </a>
              <a href="#legacy" className="text-text-light hover:text-primary transition-colors text-sm">
                Legacy
              </a>
              <a href="#appendix" className="text-text-light hover:text-primary transition-colors text-sm">
                Register
              </a>
            </nav>
          </div>

          {/* Research Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg font-serif text-heading">
              Research
            </h4>
            <div className="text-text-light text-sm space-y-2">
              <p>
                <strong>Time Period:</strong> 1100-1900 CE
              </p>
              <p>
                <strong>Geographic Scope:</strong> Devon, England to Illinois, USA
              </p>
              <p>
                <strong>Focus:</strong> Commercial networks and family power structures
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-text-light text-sm">
            © {currentYear} Sprouse-Prouse Family Research. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-text-light hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-text-light hover:text-primary transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-text-light hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;