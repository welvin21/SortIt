import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  changeSortingStatus, 
  changeArr, 
  changeArrSize,
  changeAlgo, 
  changeSpeed,
  changeArrSorted
} from '../redux/actions';
import store from '../redux/store';
import { Slider, Select, MenuItem } from '@material-ui/core';

const algorithms = [
  {name: 'Bubble Sort', key: 0},
  {name: 'Insertion Sort', key: 1},
  {name: 'Selection Sort', key: 2},
  {name: 'Quick Sort', key: 3},
  {name: 'Heap Sort', key: 4},
  {name: 'Radix Sort', key: 5},
  {name: 'Bucket Sort', key: 6},
  {name: 'Shell Sort', key: 7},
]

const handleOnSizeChange = (event, arrSize) => {
  const arr = [...Array(arrSize).keys()].map(elem => elem+1);
  const arrSorted = [...Array(arrSize).keys()].map(elem => elem+1);
  store.dispatch(changeArrSize(arrSize));
  store.dispatch(changeArr(arr));
  store.dispatch(changeArrSorted(arrSorted));
}

const handleOnShuffleClick = arr => {
  let tmp = [...arr];
  let arrSize = tmp.length;
  while (arrSize > 0) {
    let index = Math.floor(Math.random() * arrSize);
    arrSize--;

    let temp = tmp[arrSize];
    tmp[arrSize] = tmp[index];
    tmp[index] = temp;
  }
  store.dispatch(changeArr(tmp));
}


const Header = () => {
  const algo = useSelector(state => state.algo);
  const arr = useSelector(state => state.arr);
  const arrSize = useSelector(state => state.arrSize);
  const speed = useSelector(state => state.speed);
  const isSorting = useSelector(state => state.isSorting);
  const dispatch = useDispatch();

  const greenBtn = 'linear-gradient(#63FF5E,#07D800)';
  const redBtn = 'linear-gradient(#FF6666,#E90000)';

  return(
    <div className='header'>
      <div className='slider'>
        <Slider
          disabled={isSorting ? true : false}
          id='array_slider'
          value={arrSize}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          min={10}
          max={100}
          onChange={handleOnSizeChange}
        />
      </div>
      <div className='slider'>
        <Slider
          disabled={isSorting ? true : false}
          id='speed_slider'
          value={speed}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="off"
          step={10}
          min={0}
          max={950}
          onChange={(e,speed) => dispatch(changeSpeed(speed))}
        />
      </div>
      <div className='selector'>
        <Select disabled={isSorting ? true : false} id='algo_selector' value={algo} onChange={e => dispatch(changeAlgo(e.target.value))}>
          {algorithms.map(algo => <MenuItem key={algo.key} value={algo.key}>{algo.name}</MenuItem>)}
        </Select>
      </div>
      <div>
        <button disabled={isSorting ? true : false} style={{background: 'linear-gradient(#67C4FF,#0081D2)'}} onClick={() => handleOnShuffleClick(arr)}>
          Shuffle
        </button>
      </div>
      <div>
        <button style={{background: isSorting ? redBtn : greenBtn}} onClick={() => dispatch(changeSortingStatus())}>
          {isSorting ? 'Stop' : 'Sort it!'}
        </button>
      </div>
    </div>
  );
}

export default Header;