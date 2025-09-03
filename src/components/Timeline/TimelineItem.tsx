import { Era } from '../../types';
import { EraVisual } from '../EraVisual/EraVisual';

interface TimelineItemProps {
  era: Era;
  index: number;
}

export function TimelineItem({ era, index }: TimelineItemProps) {
  const isOdd = index % 2 !== 0;
  
  return (
    <div className={`timeline-item reveal lg:col-start-${isOdd ? '2' : '1'}`}>
      <div className="lg:absolute timeline-dot hidden lg:block"></div>
      <div className="era-card rounded-lg overflow-hidden shadow-md flex flex-col h-full">
        <EraVisual 
          icon={era.theme.icon}
          gradient={era.theme.gradient}
          accentColor={era.theme.accentColor}
          alt={era.alt} 
          className="w-full h-56" 
        />
        <div className="p-8 flex flex-col flex-grow">
          <h3 className="font-bold text-2xl mb-3 font-serif">{era.title}</h3>
          <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
            {era.period}
          </p>
          <p className="leading-relaxed text-gray-600 flex-grow">
            {era.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;