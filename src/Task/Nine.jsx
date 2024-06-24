import React, { useState } from 'react';

const Nine = () => {
  const [bgcolor, setBgcolor] = useState('red');

  const handleClick = () => {
    const newColor = bgcolor === 'red' ? 'green' : 'white';
    setBgcolor(newColor);
  };

  return (
    <div onClick={handleClick}
         style={{ backgroundColor: bgcolor, height: '170px', width: '180px', cursor: 'pointer', border: '1px solid red' }}>
      Click me to change color
    </div>
  );
};

export default Nine;
