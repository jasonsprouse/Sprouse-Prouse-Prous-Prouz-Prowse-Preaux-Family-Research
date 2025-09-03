import { Person } from '../../types';

interface PersonCardProps {
  person: Person;
  onEvidenceClick: (type: string, imageUrl: string, transcript: string) => void;
  className?: string;
}

export function PersonCard({ person, onEvidenceClick, className = '' }: PersonCardProps) {
  return (
    <div className={`border border-gray-200 rounded p-4 ${className}`}>
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-lg">{person.name}</h4>
        <span className="text-sm text-gray-500">{person.dates}</span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <p><strong>Faith & Community:</strong> {person.faith}</p>
          <p><strong>Commercial Nexus:</strong> {person.nexus}</p>
        </div>
        <div>
          <p><strong>Primary Sources:</strong> {person.sources}</p>
        </div>
      </div>
      
      {person.genealogicalEvidence && (
        <div className="mt-4">
          <h5 className="font-semibold mb-2">Genealogical Evidence:</h5>
          <div className="grid gap-2">
            {person.genealogicalEvidence.map((evidence, evidenceIndex) => (
              <button
                key={evidenceIndex}
                className="text-left p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => onEvidenceClick(evidence.type, evidence.sourceImage, evidence.sourceTranscript)}
                type="button"
              >
                <strong>{evidence.type}:</strong> {evidence.detail}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonCard;