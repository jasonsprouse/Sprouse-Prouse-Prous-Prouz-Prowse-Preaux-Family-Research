'use client'

import { useEffect, useRef } from 'react';
import { MapData } from '../../types';

interface MapProps {
  mapData: MapData;
  className?: string;
}

declare global {
  interface Window {
    L: any;
  }
}

export function Map({ mapData, className = '' }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || !window?.L) return;

    // Clear existing map if it exists
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
    }

    // Initialize the map
    const map = window.L.map(mapRef.current).setView([40.0, -85.0], 4);
    
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const mapMarkers: any = {};

    // Add markers for each location
    mapData.locations.forEach(location => {
      const marker = window.L.marker(location.coords)
        .addTo(map)
        .bindPopup(`<b>${location.name}</b><br/>${location.description}`);
      
      mapMarkers[location.id] = marker;
    });

    // Store markers for later use
    (window as any).mapMarkers = mapMarkers;
    mapInstanceRef.current = map;

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [mapData]);

  return (
    <div className={className}>
      <h3 className="text-2xl font-bold font-serif mb-4">Migration Map</h3>
      <div 
        ref={mapRef} 
        className="h-96 bg-gray-100 border border-card-border rounded-lg"
        style={{ minHeight: '384px' }}
      />
    </div>
  );
}

export default Map;