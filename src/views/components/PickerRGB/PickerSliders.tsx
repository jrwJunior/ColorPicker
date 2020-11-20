import React from 'react';
import { Button, Slider } from 'antd';

import './style.scss';

type PickerSliders = {
  colorRGB: {
    [key:string]: number
  },
  handleClickCancel: () => void,
  handleClickSuccess: () => void,
  handleChangeSlider: (value: number, channel: string) => void
}

const PickerSliders = ({
  colorRGB, 
  handleClickCancel,
  handleClickSuccess,
  handleChangeSlider 
}: PickerSliders) => (
  <>
    <div className='sliders'>
      { Object.keys(colorRGB).map((key: string) => (
        <div className='slider-item' key={ key }>
          <Slider
            className={`slider slider-${key}`}
            value={ colorRGB[key] }
            max={ 255 }
            tooltipVisible={ false }
            onChange={(value: number) => handleChangeSlider(value, key) }
          />
          <input
            className='slider-value'
            readOnly
            value={ colorRGB[key] }
          />
        </div>
      ))}
    </div>
    <div className='buttons'>
      <Button
        type="primary"
        className='btn-cancel'
        onClick={ handleClickCancel }
      >
        Cancel
      </Button>
      <Button
        type="primary"
        className='btn-ok'
        onClick={ handleClickSuccess }
      >
        Ok
      </Button>
    </div>
  </>
);

export default PickerSliders;