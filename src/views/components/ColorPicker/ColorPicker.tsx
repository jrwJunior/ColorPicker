import React from 'react';
import { Input } from 'antd';

import PickerRGB from 'views/components/PickerRGB';
import Palettes from 'views/components/Palettes';

import './style.scss';

type ColorPickerProps = {
  color: string,
  colors: Array<{name:string, color:string}>,
  onChange: (color: string) => void
}

const ColorPicker = ({ color, colors, onChange }: ColorPickerProps) => {
  const suffix = (
    <>
      <PickerRGB
        color={ color }
        onChange={ onChange }
      />
      <Palettes
        colors={ colors }
        onChange={ onChange }
      />
    </>
  )
  return (
    <div>
      <Input
        className='input-picker'
        value={ color }
        suffix={ suffix }
      />
    </div>
  )
};

export default ColorPicker;