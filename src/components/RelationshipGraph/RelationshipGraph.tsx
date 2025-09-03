'use client'

import { useEffect, useRef, useCallback } from 'react';
import { AllianceData } from '../../types';

interface RelationshipGraphProps {
  allianceData: AllianceData;
  className?: string;
}

export function RelationshipGraph({ allianceData, className = '' }: RelationshipGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const addNodeInteractions = useCallback(() => {
    const allNodes = document.querySelectorAll('.family-node');
    const allLines = document.querySelectorAll('.alliance-line');
    const allLabels = document.querySelectorAll('.alliance-label');

    allNodes.forEach(node => {
      const familyId = node.id.replace('node-', '');
      
      node.addEventListener('mouseenter', () => {
        allNodes.forEach(n => {
          const nId = n.id.replace('node-', '');
          if (nId === familyId) {
            n.classList.remove('fade');
            n.classList.add('highlight');
          } else {
            n.classList.add('fade');
          }
        });

        allLines.forEach(l => {
          const from = l.getAttribute('data-from');
          const to = l.getAttribute('data-to');
          if (from === familyId || to === familyId) {
            l.classList.remove('fade');
            l.classList.add('highlight');
          } else {
            l.classList.add('fade');
          }
        });

        allLabels.forEach(lbl => {
          const from = lbl.getAttribute('data-from');
          const to = lbl.getAttribute('data-to');
          if (from === familyId || to === familyId) {
            lbl.classList.remove('fade');
          } else {
            lbl.classList.add('fade');
          }
        });
      });

      node.addEventListener('mouseleave', () => {
        allNodes.forEach(n => n.classList.remove('fade', 'highlight'));
        allLines.forEach(l => l.classList.remove('fade', 'highlight'));
        allLabels.forEach(lbl => lbl.classList.remove('fade'));
      });
    });
  }, []);

  const renderDiagram = useCallback(() => {
    const container = containerRef.current;
    const svg = svgRef.current;
    if (!container || !svg) return;

    // Clear existing content except the SVG
    const nodes = container.querySelectorAll('.family-node');
    nodes.forEach(node => node.remove());
    svg.innerHTML = '';

    // Create family nodes
    allianceData.families.forEach(family => {
      const node = document.createElement('div');
      node.className = 'family-node';
      node.id = `node-${family.id}`;
      node.textContent = family.label;
      node.style.left = `${family.pos.x}%`;
      node.style.top = `${family.pos.y}%`;
      node.style.transform = `translate(-50%, -50%)`;
      container.appendChild(node);
    });

    // Create alliance lines after a brief delay to ensure nodes are rendered
    setTimeout(() => {
      svg.innerHTML = '';
      
      allianceData.alliances.forEach(alliance => {
        const fromNodeEl = document.getElementById(`node-${alliance.from}`);
        const toNodeEl = document.getElementById(`node-${alliance.to}`);
        
        if (!fromNodeEl || !toNodeEl) return;

        const fromPos = {
          x: fromNodeEl.offsetLeft + fromNodeEl.offsetWidth / 2,
          y: fromNodeEl.offsetTop + fromNodeEl.offsetHeight / 2
        };
        const toPos = {
          x: toNodeEl.offsetLeft + toNodeEl.offsetWidth / 2,
          y: toNodeEl.offsetTop + toNodeEl.offsetHeight / 2
        };

        // Create line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', fromPos.x.toString());
        line.setAttribute('y1', fromPos.y.toString());
        line.setAttribute('x2', toPos.x.toString());
        line.setAttribute('y2', toPos.y.toString());
        line.classList.add('alliance-line');
        line.setAttribute('data-from', alliance.from);
        line.setAttribute('data-to', alliance.to);
        svg.appendChild(line);

        // Create label
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', ((fromPos.x + toPos.x) / 2).toString());
        label.setAttribute('y', ((fromPos.y + toPos.y) / 2).toString());
        label.setAttribute('data-from', alliance.from);
        label.setAttribute('data-to', alliance.to);
        label.classList.add('alliance-label');
        label.textContent = alliance.label;
        svg.appendChild(label);
      });

      // Add hover effects
      addNodeInteractions();
    }, 100);
  }, [allianceData, addNodeInteractions]);

  useEffect(() => {
    renderDiagram();
    
    const handleResize = () => renderDiagram();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [renderDiagram]);

  return (
    <div className={className}>
      <h3 className="text-2xl font-bold font-serif mb-4">Relationship Web</h3>
      <div 
        ref={containerRef}
        className="relative min-h-[500px] w-full bg-white border border-card-border rounded-lg p-8"
      >
        <svg 
          ref={svgRef}
          width="100%" 
          height="100%" 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            pointerEvents: 'none' 
          }}
        />
      </div>
    </div>
  );
}

export default RelationshipGraph;