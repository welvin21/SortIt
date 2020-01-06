import React from 'react';
import { Slider } from '@material-ui/core';
import store from '../../redux/store';
import { changeArrSize, changeArr, changeArrSorted } from '../../redux/actions';

const handleOnSizeChange = (event, arrSize) => {
  const arr = [...Array(arrSize).keys()].map(elem => elem+1);
  const arrSorted = [...arr];
  store.dispatch(changeArrSize(arrSize));
  store.dispatch(changeArr(arr));
  store.dispatch(changeArrSorted(arrSorted));
}

export const SizeSlider = props => {
  const { arrSize, isSorting } = props;
  return(
    <div className='slider'>
      <p className='label'>Size</p>
      <Slider
        disabled={isSorting ? true : false}
        id='array_slider'
        value={arrSize}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={5}
        min={10}
        max={150}
        onChange={handleOnSizeChange}
      />
    </div>
  )
}