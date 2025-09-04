'use client'

import { useEffect, useRef, useState } from 'react';
import { MapData } from '../../types';

// Import Leaflet dynamically to avoid SSR issues
let L: any;

interface MapProps {
  mapData: MapData;
  className?: string;
}

export function Map({ mapData, className = '' }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapLoading, setMapLoading] = useState(true);
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    // Dynamically import Leaflet to avoid SSR issues
    const initializeMap = async () => {
      if (typeof window === 'undefined') return;

      try {
        // Import Leaflet dynamically
        const LeafletModule = await import('leaflet');
        L = LeafletModule.default;

        // Fix for default marker icons in Next.js
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        });

        if (!mapRef.current) return;

        // Clear existing map if it exists
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
        }

        // Initialize the map
        const map = L.map(mapRef.current).setView([40.0, -85.0], 4);
        
        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(map);

        const mapMarkers: any = {};

        // Add markers for each location
        mapData.locations.forEach(location => {
          const marker = L.marker(location.coords)
            .addTo(map)
            .bindPopup(`<b>${location.name}</b><br/>${location.description}`);
          
          mapMarkers[location.id] = marker;
        });

        // Store markers for later use
        mapInstanceRef.current = map;
        setMapLoading(false);
        setMapError(null);
      } catch (error) {
        console.error('Error initializing map:', error);
        setMapError('Failed to load interactive map');
        setMapLoading(false);
      }
    };

    // Start the initialization process
    initializeMap();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [mapData]);

  // Fallback content when map fails to load
  const renderFallback = () => (
    <div className="h-96 bg-gray-100 border border-card-border rounded-lg flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <div className="mb-4 text-gray-500">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <h4 className="font-bold text-lg mb-2">Migration Path</h4>
        <div className="space-y-2 text-sm text-gray-600">
          {mapData.locations.map(location => (
            <div key={location.id} className="flex flex-col">
              <span className="font-semibold">{location.name}</span>
              <span>{location.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={className}>
      <h3 className="text-2xl font-bold font-serif mb-4">Migration Map</h3>
      
      {mapLoading ? (
        <div className="h-96 bg-gray-100 border border-card-border rounded-lg flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
            <span className="text-gray-600">Loading interactive map...</span>
          </div>
        </div>
      ) : mapError ? (
        renderFallback()
      ) : (
        <div 
          ref={mapRef} 
          className="h-96 bg-gray-100 border border-card-border rounded-lg"
          style={{ minHeight: '384px' }}
        />
      )}
    </div>
  );
}

export default Map;