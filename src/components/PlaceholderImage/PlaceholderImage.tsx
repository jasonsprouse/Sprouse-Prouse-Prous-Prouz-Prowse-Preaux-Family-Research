'use client'

import { useState, useEffect } from 'react';

interface PlaceholderImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackColor?: string;
  fallbackText?: string;
}

export function PlaceholderImage({ 
  src, 
  alt, 
  className = '', 
  fallbackColor = '#f3f4f6',
  fallbackText 
}: PlaceholderImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Set a timeout to show placeholder if image doesn't load within 2 seconds
    // This handles cases where external resources are blocked and don't trigger onError
    const timeout = setTimeout(() => {
      if (!imageLoaded && !imageError) {
        setImageError(true);
        setImageLoaded(true);
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [src, imageLoaded, imageError]);

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const handleImageLoad = () => {
    setImageError(false);
    setImageLoaded(true);
  };

  if (imageError) {
    // Show placeholder
    return (
      <div 
        className={`${className} flex items-center justify-center text-gray-500 bg-gray-100`}
        style={{ backgroundColor: fallbackColor }}
      >
        <div className="text-center p-4">
          <div className="mb-2">
            <svg className="w-12 h-12 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          {fallbackText && (
            <p className="text-sm font-medium">{fallbackText}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      {!imageLoaded && (
        <div className={`${className} animate-pulse bg-gray-200`} />
      )}
      <img 
        src={src}
        alt={alt}
        className={`${className} ${imageLoaded ? 'block' : 'hidden'}`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </>
  );
}

export default PlaceholderImage;