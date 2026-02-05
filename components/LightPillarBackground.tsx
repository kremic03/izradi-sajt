'use client';

import { useState, useEffect } from 'react';
import LightPillar from './ui/LightPillar';

export default function LightPillarBackground() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        width: '100vw',
        height: '100vh',
        opacity: isScrolling ? 0.6 : 1,
        transition: 'opacity 0.3s ease'
      }}
    >
      <LightPillar
        topColor="#8b5cf6"
        bottomColor="#c084fc"
        intensity={1}
        rotationSpeed={0.2}
        glowAmount={0.002}
        pillarWidth={3}
        pillarHeight={0.4}
        noiseIntensity={0.3}
        pillarRotation={25}
        interactive={false}
        mixBlendMode="normal"
        quality="medium"
      />
    </div>
  );
}
