import React from 'react';
import { useDispatch } from 'react-redux';
import { Slider } from '@material-ui/core';
import { changeSpeed } from '../../redux/actions';

export const SpeedSlider = ({ speed, isSorting }) => {
  const dispatch = useDispatch();
  return(
    <div className='slider'>
      <p className='label'>Speed</p>
      <Slider
        disabled={isSorting ? true : false}
        id='speed_slider'
        value={speed}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="off"
        step={5}
        min={500}
        max={980}
        onChange={(e,speed) => dispatch(changeSpeed(speed))}
      />
    </div>
  )
}