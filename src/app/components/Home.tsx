import React, { useEffect, useState, useRef } from 'react';
import LandingPage from '../../imports/LandingPage-74-8515';
import { ParticleHero } from './ParticleHero';

export function Home() {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const figmaWidth = 1986;
      const newScale = width < figmaWidth ? width / figmaWidth : 1;
      setScale(newScale);

      if (containerRef.current) {
        const firstChild = containerRef.current.firstChild as HTMLElement;
        if (firstChild) {
          setContentHeight(firstChild.scrollHeight);
        }
      }
    };

    const observer = new ResizeObserver(() => {
      handleResize();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    
    const interval = setInterval(handleResize, 500);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full bg-[#0a0a0a] min-h-screen relative overflow-x-hidden flex flex-col items-center">
      <style>{`
        /* Override absolute positioning and fixed height of the Figma export root nodes */
        .figma-root > div[data-name="Landing Page"] {
          position: relative !important;
          height: auto !important;
          width: 1986px !important;
          background-color: transparent !important;
        }
        .figma-root > div[data-name="Landing Page"] > div[data-name="Body"] {
          position: relative !important;
          height: auto !important;
          width: 100% !important;
          background-color: transparent !important;
        }
        
        /* Ensure the Header behaves properly relative to the page top */
        .figma-root > div[data-name="Landing Page"] > div[data-name="Header"] {
           position: fixed !important;
           top: 0 !important;
           z-index: 50;
        }

        /* Hide the static Figma ParticleHero — replaced by the live canvas version above */
        .figma-root div[data-name="ParticleHero"] {
          display: none !important;
        }
      `}</style>

      {/* Real canvas particle hero — full viewport, not scaled */}
      <ParticleHero />

      {/* 
        Container that reserves the EXACT scaled height so the document flow doesn't 
        leave empty space or get cut off.
      */}
      <div 
        style={{ 
          width: '100%', 
          height: contentHeight > 0 ? `${contentHeight * scale}px` : '100vh',
          position: 'relative'
        }}
      >
        {/* Scaling wrapper */}
        <div 
          ref={containerRef}
          className="absolute origin-top figma-root"
          style={{
            width: '1986px',
            transform: `scale(${scale})`,
            left: '50%',
            marginLeft: '-993px' // half of 1986px
          }}
        >
          <LandingPage />
        </div>
      </div>
    </div>
  );
}
