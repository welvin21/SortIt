import React from 'react';
import { useSelector } from 'react-redux';
import { changeSortingStatus, changeArr, changeFrames } from './redux/actions';
import store from './redux/store';
import './App.css';
import Header from './components/Header';

const sort = async() => {
  const state = store.getState();
  let { arr, frames } = state;
  if(frames.length > 0){
    arr = frames.shift();
    store.dispatch(changeArr(arr));
    store.dispatch(changeFrames(frames));
  }else{
    store.dispatch(changeSortingStatus(false));
  } 
}

const App = () => {
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
    <div className='app'>
      <Header/>
      <div className='main'>
        {arr.map(elem => {
          const height = `${(elem+1)/(arrSize+1) * 100}%`;
          const backgroundColor = `hsl(${elem/arrSize * 360},100%,80%)`;
          return(
          <div key={elem} className='bar' style={{height, width, fontSize, backgroundColor}}></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;