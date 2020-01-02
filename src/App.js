import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import algorithms from './algorithms/algorithms';

const App = () => {
  const algo = useSelector(state => state.algo);
  const arrSize = useSelector(state => state.arrSize);
  const arr = useSelector(state => state.arr);
  const arrSorted = useSelector(state => state.arrSorted);
  const speed = useSelector(state => state.speed);
  const isSorting = useSelector(state => state.isSorting);

  const width = `${100/arrSize}%`;
  const fontSize = `${40/arrSize}vw`;
  return(
    <div className='app'>
      <Header/>
      <div className='main'>
        {arr.map(elem => {
          const height = `${(elem+1)/(arrSize+1) * 100}%`;
          const backgroundColor = `hsl(${elem/arrSize * 360},100%,80%)`;
          const style = {
            height,
            width,
            fontSize,
            backgroundColor
          }
          return(
            <div key={elem} className='bar' style={style}>
              <div className='bar-number'>{elem}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;