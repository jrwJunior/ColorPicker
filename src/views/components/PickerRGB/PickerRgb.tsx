import React, { useState, useEffect } from 'react';
import { Popover, Tooltip } from 'antd';

import Sliders from './PickerSliders';

type PickerRgbState = {
  r: number,
  g: number,
  b: number
}

type PickerRgbProps = {
  color: string,
  onChange: (color: string) => void
}

const PickerRgb = ({ color, onChange }: PickerRgbProps) => {
  const [colorRGB, setColorRGB] = useState<PickerRgbState>({r: 0, g: 0, b: 0});
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setRGBColor(color);
  }, [color]);

  const convertHexColor = (values: PickerRgbState): void => {
    const colorHex: string = Object.values(values).map((value: number) => {
      const hexStr: string = value.toString(16);

      return hexStr.length < 2 ? `0${hexStr}` : hexStr;
    }).join('');

    onChange(`#${colorHex}`);
  }

    const setRGBColor = (color: string): void => {
      const splitted: RegExpMatchArray = color.split('#')[1].match(/.{1,2}/g)!;
      const rgb: number[] = splitted.map((value: string) => parseInt(value, 16));
      
      setColorRGB({
        r: rgb[0],
        g: rgb[1],
        b: rgb[2]
    })
  }

  const colorRGBToString = (colorRGB: PickerRgbState): string => `rgb(${Object.values(colorRGB).join(',')})`;

  const handleChangeSlider = (value: number, channel: string): void => {
    setColorRGB((prevState) => ({
      ...prevState,
      [channel]: value
    }));
  }

  const handleChange = (visible: boolean): void => {
    if (!visible) {
      setRGBColor(color);
    }

    setVisible(visible);
  }

  const handleClickSuccess = (): void => {
    convertHexColor(colorRGB);
    setVisible(false);
  }

  const handleClickCancel = (): void => {
    setRGBColor(color);
    setVisible(false);
  }

  const slidersProps = {
    colorRGB,
    handleClickSuccess,
    handleClickCancel,
    handleChangeSlider
  }

  return (
    <Popover
      content={ <Sliders {...slidersProps}/> }
      trigger="click"
      placement="bottom"
      visible={ visible }
      onVisibleChange={ handleChange }
    >
      <Tooltip placement="top" title={'Color pick'}>
        <div className='preview-color' style={{backgroundColor: colorRGBToString(colorRGB)}}/>
      </Tooltip>
    </Popover>
  )
};

export default PickerRgb;