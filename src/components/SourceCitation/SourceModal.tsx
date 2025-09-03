'use client'

import { useEffect } from 'react';

interface SourceModalProps {
  isOpen: boolean;
  title: string;
  imageUrl: string;
  transcript: string;
  onClose: () => void;
}

export function SourceModal({ isOpen, title, imageUrl, transcript, onClose }: SourceModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'show' : ''}`} 
      onClick={handleOverlayClick}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="absolute top-4 right-4 text-2xl hover:text-gray-600 focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-2">Document Image</h4>
            <div className="bg-gray-100 border rounded h-64 flex items-center justify-center">
              <img 
                src={imageUrl} 
                alt="Source Document" 
                className="max-w-full max-h-full object-contain" 
              />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-2">Transcript & Notes</h4>
            <p className="text-sm bg-gray-50 p-3 border rounded h-64 overflow-y-auto whitespace-pre-wrap font-mono">
              {transcript}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SourceModal;