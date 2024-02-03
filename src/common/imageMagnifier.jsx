import React, { useRef, useState } from 'react';

export default function ImageMagnifier({ imageUrl }) {
  const [zoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnifierRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!magnifierRef.current) return;
    const { left, top, width, height } = magnifierRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      ref={magnifierRef}
      className={`magnifier bg-white ${zoomed ? 'zoomed' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setZoomed(true)}
      onMouseLeave={() => setZoomed(false)}
    >
      <img src={imageUrl} alt="Product" />
      {zoomed && (
        <div
          className="magnifier-lens bg-white"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
          }}
        />
      )}
    </div>
  );
}
