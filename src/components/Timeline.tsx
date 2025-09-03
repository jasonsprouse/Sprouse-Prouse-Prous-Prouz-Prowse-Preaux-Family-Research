'use client';

import Image from 'next/image';

// This will eventually contain the timeline data from the original HTML
const timelineData = [
  {
    id: 1,
    title: "I. Medieval Foundations",
    period: "c. 1200–1500",
    description: "The earliest known ancestors emerged as members of European craft guilds, establishing the family tradition of strategic commerce and adaptive business practices.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=800&auto=format&fit=crop",
    alt: "Medieval stone architecture representing early European settlements"
  },
  // More eras will be added later
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Historical Timeline
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow the family&apos;s journey through eight centuries of adaptation, 
            from medieval European guilds to American frontier entrepreneurship.
          </p>
        </div>
        
        <div className="relative">
          <div className="timeline-line hidden lg:block"></div>
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-16">
            {timelineData.map((era, index) => {
              const isOdd = index % 2 !== 0;
              return (
                <div key={era.id} className={`timeline-item reveal lg:col-start-${isOdd ? 2 : 1}`}>
                  <div className="lg:absolute timeline-dot hidden lg:block"></div>
                  <div className="era-card rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                    <Image 
                      src={era.image} 
                      alt={era.alt} 
                      width={800} 
                      height={400}
                      className="w-full h-56 object-cover" 
                    />
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="font-serif text-2xl font-bold mb-4 text-gray-800">
                        {era.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-semibold mb-4 tracking-wide">
                        {era.period}
                      </p>
                      <p className="text-gray-600 flex-grow">
                        {era.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}