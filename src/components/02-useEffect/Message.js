import React, { useEffect } from 'react';

export const Message = () => {
  useEffect(() => {
    const mouseMove = ({ x, y }) => {
      // console.log('Evento');
      const coors = { x, y };
      console.log(coors);
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove',mouseMove)
      console.log('componenete desmontado');
    };
  }, []);
  return (
    <div>
      <h3>Mensaje bonito</h3>
    </div>
  );
};
