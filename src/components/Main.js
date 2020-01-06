import React from 'react';
import { useSelector } from 'react-redux';
import { changeSortingStatus, changeArr } from '../redux/actions';
import store from '../redux/store';

const sort = async() => {
  const state = store.getState();
  const { frames } = state;
  const frame = frames.next();
  if(!frame.done){
    store.dispatch(changeArr(frame.value));
  }else{
    store.dispatch(changeSortingStatus(false));
  }
}

export const Main = () => {
  const arrSize = useSelector(state => state.arrSize);
  const arr = useSelector(state => state.arr);
  const speed = useSelector(state => state.speed);
  const isSorting = useSelector(state => state.isSorting);

  if(isSorting){
    setTimeout(() => sort(), 1000-speed);
  }

  const width = `${100/arrSize}%`;
  const fontSize = `${40/arrSize}vw`;
  return(
    <div className='main'>
      {arr.map(elem => {
        const { num, color } = elem;
        const height = `${(num+1)/(arrSize+1) * 100}%`;
        const backgroundColor = (isSorting && color) ? color : `hsl(${num/arrSize * 360},100%,80%)`;
        return(
          <div key={num} className='bar' style={{height, width, fontSize, backgroundColor}}></div>
        );
      })}
    </div>
  )
}