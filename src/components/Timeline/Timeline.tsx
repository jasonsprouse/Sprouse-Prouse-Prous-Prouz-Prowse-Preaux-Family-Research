import { Era } from '../../types';
import { TimelineItem } from './TimelineItem';

interface TimelineProps {
  eras: Era[];
  className?: string;
}

export function Timeline({ eras, className = '' }: TimelineProps) {
  return (
    <section id="timeline" className={`py-20 md:py-28 bg-white section-divider ${className}`}>
      <div className="container mx-auto px-6 reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 font-serif">
          Four Eras of Strategic Adaptation
        </h2>
        <div className="relative">
          <div className="timeline-line hidden lg:block"></div>
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-16">
            {eras.map((era, index) => (
              <TimelineItem key={era.id} era={era} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;