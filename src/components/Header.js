import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  changeSortingStatus, 
  changeArr, 
  changeArrSize,
  changeAlgo, 
  changeSpeed,
  changeArrSorted,
  changeFrames
} from '../redux/actions';
import store from '../redux/store';
import algorithms from '../algorithms/algorithms';
import { Slider, Select, MenuItem } from '@material-ui/core';

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

const handleOnSortClick = () => {
  const state = store.getState();
  let { arr, arrSorted, algo, isSorting } = state;
  isSorting = !isSorting;
  if(isSorting && (JSON.stringify(arr) !== JSON.stringify(arrSorted))){
    algorithms[algo].method(arr).then(frames => {
      store.dispatch(changeFrames(frames));
      store.dispatch(changeSortingStatus(isSorting));
    });
  }
  store.dispatch(changeSortingStatus(isSorting));
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
          step={5}
          min={10}
          max={150}
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
          step={5}
          min={500}
          max={980}
          onChange={(e,speed) => dispatch(changeSpeed(speed))}
        />
      </div>
      <div className='selector'>
        <Select disabled={isSorting ? true : false} id='algo_selector' value={algo} onChange={e => dispatch(changeAlgo(e.target.value))}>
          {algorithms.map(algo => <MenuItem key={algo.key} value={algo.key}>{algo.name}</MenuItem>)}
        </Select>
      </div>
      <div>
        <button disabled={isSorting ? true : false} className='grey-btn' onClick={() => dispatch(changeArr([...[...arr].reverse()]))}>
          Reverse
        </button>
        <div style={{padding: 1}}></div>
        <button disabled={isSorting ? true : false} className='grey-btn' onClick={() => handleOnShuffleClick(arr)}>
          Shuffle
        </button>
      </div>
      <div>
        <button style={{background: isSorting ? redBtn : greenBtn}} onClick={() => handleOnSortClick()}>
          {isSorting ? 'Stop' : 'Sort it!'}
        </button>
      </div>
    </div>
  );
}

export default Header;