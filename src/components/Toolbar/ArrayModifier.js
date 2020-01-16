import React from 'react';
import { useDispatch }  from 'react-redux';
import { store } from '../../redux/store';
import { changeArr } from '../../redux/actions';

const handleOnShuffleClick = arr => {
  let tmp = [...arr];
  let arrSize = tmp.length;
  while (arrSize > 0) {
    let index = Math.floor(Math.random() * arrSize);
    arrSize--;
    tmp[index] = tmp.splice(arrSize, 1, tmp[index])[0];
  }
  store.dispatch(changeArr(tmp));
}

export const ShuffleButton = ({ arr, isSorting }) => {
  return(
    <button disabled={isSorting ? true : false} className='grey-btn' onClick={() => handleOnShuffleClick(arr)}>
      Shuffle
    </button>
  );
}

export const ReverseButton = ({ arr, isSorting }) => {
  const dispatch = useDispatch();
  return(
    <button disabled={isSorting ? true : false} className='grey-btn' onClick={() => dispatch(changeArr([...[...arr].reverse()]))}>
      Reverse
    </button>
  );
}
