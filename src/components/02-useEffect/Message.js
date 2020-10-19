import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoors] = useState({ x: 0, y: 0 });
  const { x, y } = coords;
  useEffect(() => {
    const mouseMove = ({ x, y }) => {
      // console.log('Evento');
      const coords = { x, y };
      console.log(coords);
      setCoors(coords)
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      console.log('componenete desmontado');
    };
  }, []);
  return (
    <div>
      <h3>Mensaje bonito</h3>
      <p>x= {x} y= {y}</p>
    </div>
  );
};
