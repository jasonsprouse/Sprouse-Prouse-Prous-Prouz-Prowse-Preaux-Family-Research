interface HeroProps {
  className?: string;
}

export function Hero({ className = '' }: HeroProps) {
  return (
    <section className={`py-24 md:py-40 bg-cover bg-center hero-bg mt-16 ${className}`}>
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 font-serif reveal">
          A Study in Commercial Genetics
        </h1>
        <p 
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 reveal" 
          style={{ transitionDelay: '200ms' }}
        >
          An Eight-Century Analysis of the Sprouse-Prouse Family and the Infrastructure of Power.
        </p>
        <a 
          href="#introduction" 
          className="btn-primary font-bold py-3 px-8 rounded-full inline-block reveal hover:bg-primary-light transition-colors"
          style={{ transitionDelay: '400ms' }}
        >
          Explore the Legacy
        </a>
      </div>
    </section>
  );
}

export default Hero;