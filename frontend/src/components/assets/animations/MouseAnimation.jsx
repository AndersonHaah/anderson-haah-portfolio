import React, { useState, useEffect } from 'react';
import './MouseAnimation.css'

export default function GlowFollowMouse() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="glow-background"
        style={{
          '--mouse-x': `${mousePos.x}px`,
          '--mouse-y': `${mousePos.y}px`,
        }}
      />
    </>
  );
}
