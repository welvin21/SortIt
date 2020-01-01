import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import algorithms from './algorithms/algorithms';

class App extends Component{
  state = {
    arr : [],
    arrSorted : [],
    arrSize : 55,
    algo : 0,
    isSorting : false,
    speed : 480,
    frames : []
  };

  componentDidMount = () => {
    const { arrSize } = this.state;
    const arr = [...Array(arrSize).keys()].map(elem => elem+1);
    const arrSorted = [...Array(arrSize).keys()].map(elem => elem+1);
    this.setState({arr, arrSorted});
  }

  onSliderChange = newArrSize => {
    const arrSize = newArrSize;
    const arr = [...Array(arrSize).keys()].map(elem => elem+1);
    const arrSorted = [...Array(arrSize).keys()].map(elem => elem+1);
    this.setState({arr, arrSorted, arrSize});
  }

  onSpeedChange = newSpeed => {
    const speed = newSpeed;
    this.setState({speed});
  }

  onSelectorChange = algo => {
    this.setState({algo});
  }

  onShuffleClick = () => {
    let { arr,arrSize } = this.state;
    while (arrSize > 0) {
        let index = Math.floor(Math.random() * arrSize);
        arrSize--;

        let temp = arr[arrSize];
        arr[arrSize] = arr[index];
        arr[index] = temp;
    }

    this.setState({arr});
  }

  onSortClick = () => {
    let { arr, arrSorted, algo, isSorting } = this.state;
    isSorting = !isSorting;
    if(isSorting && (JSON.stringify(arr) !== JSON.stringify(arrSorted))){
      algorithms[algo](arr).then(frames => this.setState({frames, isSorting}));
    }
    this.setState({ isSorting });
  }

  sort = () => {
    let { arr, frames } = this.state;
    if(frames.length > 0){
      arr = frames.shift();
      this.setState({arr, frames});
    }else{
      this.setState({isSorting: false});
    }
  }

  render(){
    const { arr, arrSize, algo, isSorting, speed } = this.state;
    const data = {arrSize, algo, speed, isSorting};
    const width = `${100/arrSize}%`;
    const fontSize = `${40/arrSize}vw`;
    
    if(isSorting){
      setTimeout(() => this.sort(), 1000-speed);
    }

    return(
      <div className='app'>
        <Header 
          data={data}
          onSliderChange={newArrSize => {this.onSliderChange(newArrSize)}}
          onSpeedChange={newSpeed => {this.onSpeedChange(newSpeed)}}
          onSelectorChange={newAlgo => {this.onSelectorChange(newAlgo)}}
          onShuffleClick={() => {this.onShuffleClick()}}
          onSortClick={() => {this.onSortClick()}}
        />
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
}

export default App;