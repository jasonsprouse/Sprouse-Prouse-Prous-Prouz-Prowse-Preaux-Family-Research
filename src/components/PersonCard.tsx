'use client';
import React from 'react';
import type { Person } from '../data/people';

interface PersonCardProps {
  person: Person;
  highlight: (text?: string) => React.ReactNode;
}

export const PersonCard: React.FC<PersonCardProps> = ({ person, highlight }) => {
  return (
    <article
      id={person.id}
      aria-labelledby={`${person.id}-name`}
      className="rounded-md border border-gray-200 bg-white p-4 shadow-sm focus-within:ring-2 focus-within:ring-primary/50 hover:shadow-md transition-shadow"
    >
      <header className="mb-2">
        <h3
          id={`${person.id}-name`}
          className="text-lg font-semibold font-serif scroll-mt-24"
        >
          {highlight(person.name)}
        </h3>
        {person.dates && (
          <p className="text-sm text-gray-500">
            {highlight(person.dates)}
          </p>
        )}
      </header>

      <div className="space-y-2 text-sm leading-relaxed">
        {person.faith && (
          <p>
            <span className="font-medium text-gray-700">Faith: </span>
            {highlight(person.faith)}
          </p>
        )}
        {person.commerceLogistics && (
            <p>
              <span className="font-medium text-gray-700">
                Commerce & Logistics:{' '}
              </span>
              {highlight(person.commerceLogistics)}
            </p>
        )}
        {person.sources && person.sources.length > 0 && (
          <div>
            <span className="font-medium text-gray-700">Sources: </span>
            <ul className="mt-1 list-disc list-inside space-y-0.5">
              {person.sources.map((s, i) => (
                <li key={i}>{highlight(s)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-3">
        <a
          href={`#${person.id}`}
            className="text-xs text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded px-1 py-0.5"
        >
          Permalink
        </a>
      </div>
    </article>
  );
};

export default PersonCard;