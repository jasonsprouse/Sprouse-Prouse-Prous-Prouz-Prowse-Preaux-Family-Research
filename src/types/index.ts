// Core entity types for the Sprouse-Prouse Family Research project

export interface GenealogicalEvidence {
  type: string;
  detail: string;
  sourceImage: string;
  sourceTranscript: string;
}

export interface Person {
  name: string;
  dates: string;
  faith: string;
  nexus: string;
  sources: string;
  genealogicalEvidence?: GenealogicalEvidence[];
}

export interface BiographicalEra {
  era: string;
  locationId: string;
  people: Person[];
}

export interface Era {
  id: number;
  title: string;
  period: string;
  description: string;
  image: string;
  alt: string;
}

export interface Location {
  id: string;
  name: string;
  coords: [number, number];
  description: string;
}

export interface MapData {
  locations: Location[];
}

export interface FamilyNode {
  id: string;
  label: string;
  pos: { x: number; y: number };
}

export interface Alliance {
  from: string;
  to: string;
  label: string;
}

export interface AllianceData {
  families: FamilyNode[];
  alliances: Alliance[];
}

export interface SiteData {
  eras: Era[];
  biographicalData: BiographicalEra[];
  mapData: MapData;
  allianceData: AllianceData;
}