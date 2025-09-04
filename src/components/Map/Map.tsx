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
    let mounted = true;

    const initializeMap = async () => {
      // Wait for client-side rendering
      if (typeof window === 'undefined' || !mounted) return;

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

        // Wait for the DOM element to be available
        let attempts = 0;
        const maxAttempts = 50; // 5 seconds max
        
        const waitForElement = (): Promise<void> => {
          return new Promise((resolve) => {
            const checkElement = () => {
              attempts++;
              if (mapRef.current && mounted) {
                resolve();
              } else if (attempts < maxAttempts) {
                setTimeout(checkElement, 100);
              } else {
                resolve(); // Give up after max attempts
              }
            };
            checkElement();
          });
        };

        await waitForElement();

        if (!mapRef.current || !mounted) {
          setMapError('Map container not available');
          setMapLoading(false);
          return;
        }

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

        // Add markers for each location
        mapData.locations.forEach((location) => {
          L.marker(location.coords)
            .addTo(map)
            .bindPopup(`<b>${location.name}</b><br/>${location.description}`);
        });

        // Add migration path lines
        for (let i = 1; i < mapData.locations.length; i++) {
          const prevLocation = mapData.locations[i - 1];
          const currentLocation = mapData.locations[i];
          
          L.polyline([prevLocation.coords, currentLocation.coords], {
            color: '#8b5a3c',
            weight: 3,
            opacity: 0.7
          }).addTo(map);
        }

        // Fit map to show all points
        const group = L.featureGroup(mapData.locations.map(location => L.marker(location.coords)));
        map.fitBounds(group.getBounds().pad(0.1));

        if (mounted) {
          mapInstanceRef.current = map;
          setMapLoading(false);
          setMapError(null);
        }
      } catch (error) {
        console.error('Error initializing map:', error);
        if (mounted) {
          setMapError('Failed to load interactive map');
          setMapLoading(false);
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(initializeMap, 100);

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
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