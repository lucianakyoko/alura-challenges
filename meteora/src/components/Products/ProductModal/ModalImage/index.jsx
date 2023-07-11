import { useState } from 'react';

import {
  ModalImageContainer,
} from './styles';

export function ModalImage({image}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <ModalImageContainer 
    onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img 
        src={image} 
        alt="Imagem do produto" 
        className={isZoomed ? 'product-image zoomed' : 'product-image'}
        style={{
          transform: `scale(${isZoomed ? 4 : 1})`,
          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
        }}
      />

    </ModalImageContainer>
  );
}