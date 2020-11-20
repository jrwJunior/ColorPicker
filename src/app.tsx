import React, { useState } from 'react';

import ColorPicker from 'views/components/ColorPicker';

const App: React.FC = () => {
  const [color, setColor] = useState<string>('#FFCC33');
  const colors: Array<{name: string, color: string}> = [
    {name:'Red', color:'#FD0000'},
    {name:'Yellow', color:'#FFCC33'},
    {name:'Green', color:'#28F000'},
    {name:'Blue', color:'#00AAFF'}
  ];

  const handleChange = (color: string): void => {
    setColor(color);
  }

  return (
    <div className='content'>
      <div className='title'>
        <h1>Color picker</h1>
      </div>
      <ColorPicker
        color={ color }
        onChange={ handleChange }
        colors={ colors }
      />
    </div>
  )
}

export default App;