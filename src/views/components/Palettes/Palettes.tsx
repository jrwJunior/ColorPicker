import React, { useState } from 'react';
import { Popover, Tooltip } from 'antd';

import './style.scss';

type PalettesProps = {
  colors: Array<{name:string, color:string}>,
  onChange: (color: string) => void
}

const Palettes = ({ colors, onChange }: PalettesProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  const content = (
    <ul className='palettes'>
      {colors.map(({ name, color }: any) => (
        <li
          className='palettes-item'
          key={ name } 
          onClick={() => handleClickHide(color)}
        >
          { name }
          <span 
            className='box-color' 
            style={{backgroundColor: color}}
          />
        </li>
      ))}
    </ul>
  );

  const handleClickHide = (color: string): void => {
    setVisible(false);
    onChange(color);
  }

  const handleVisibleChange = (visible: boolean): void => {
    setVisible(visible);
  };

  return (
    <Popover
      placement="bottomRight"
      content={ content }
      visible={ visible }
      trigger="click"
      onVisibleChange={ handleVisibleChange }
    >
      <Tooltip placement="top" title={'Palette'}>
        <span role='button' className='dropdown'>
          <svg xmlns="http://www.w3.org/2000/svg" width='20' height='20' viewBox="0 0 512.011 512.011"><path d="M505.755 123.592c-8.341-8.341-21.824-8.341-30.165 0L256.005 343.176 36.421 123.592c-8.341-8.341-21.824-8.341-30.165 0s-8.341 21.824 0 30.165l234.667 234.667a21.275 21.275 0 0015.083 6.251 21.275 21.275 0 0015.083-6.251l234.667-234.667c8.34-8.341 8.34-21.824-.001-30.165z"/></svg>
        </span>
      </Tooltip>
    </Popover>
  )
};

export default Palettes;