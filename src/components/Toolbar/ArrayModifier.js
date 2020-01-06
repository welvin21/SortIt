import React from 'react';
import { useDispatch }  from 'react-redux';
import store from '../../redux/store';
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

export const ShuffleButton = props => {
  const { arr, isSorting } = props;
  return(
    <button disabled={isSorting ? true : false} className='grey-btn' onClick={() => handleOnShuffleClick(arr)}>
      Shuffle
    </button>
  );
}

export const ReverseButton = props => {
  const dispatch = useDispatch();
  const { arr, isSorting } = props;
  return(
    <button disabled={isSorting ? true : false} className='grey-btn' onClick={() => dispatch(changeArr([...[...arr].reverse()]))}>
      Reverse
    </button>
  );
}