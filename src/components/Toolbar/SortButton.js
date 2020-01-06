import React from 'react';
import store from '../../redux/store';
import { changeSortingStatus, changeFrames } from '../../redux/actions';

const handleOnSortClick = algorithms => {
  const state = store.getState();
  let { arr, arrSorted, algo, isSorting } = state;
  if(!isSorting && (JSON.stringify(arr) !== JSON.stringify(arrSorted))){
    const frames = algorithms[algo].method(arr.map(elem => elem.num));
    store.dispatch(changeFrames(frames));
    store.dispatch(changeSortingStatus(true));
  }else{
    store.dispatch(changeSortingStatus(false));
  }
}

const greenBtn = 'linear-gradient(#63FF5E,#07D800)';
const redBtn = 'linear-gradient(#FF6666,#E90000)';
export const SortButton = props => {
  const { algorithms, isSorting } = props;
  return(
    <div>
      <button style={{background: isSorting ? redBtn : greenBtn}} onClick={() => handleOnSortClick(algorithms)}>
        {isSorting ? 'Stop' : 'Sort it!'}
      </button>
    </div>
  );
}