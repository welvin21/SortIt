import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component{
  state = {
    arr : [],
    arrSize : 50,
    algo : 1,
    isSorting : false
  };

  componentDidMount = () => {
    const { arrSize } = this.state;

    const arr = [...Array(arrSize).keys()].map(elem => elem+1);
    this.setState({arr});
  }

  onSliderChange = newArrSize => {
    const arrSize = newArrSize;

    const arr = [...Array(arrSize).keys()].map(elem => elem+1);
    this.setState({arr, arrSize});
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
    const { isSorting } = this.state;
    this.setState({isSorting : !isSorting});
  }

  render(){
    const { arr, arrSize, algo, isSorting } = this.state;
    const width = `${100/arrSize}%`;
    const fontSize = `${40/arrSize}vw`;

    return(
      <div className='app'>
        <Header 
          arrSize={arrSize} 
          algo={algo}
          isSorting={isSorting}
          onSliderChange={newArrSize => {this.onSliderChange(newArrSize)}}
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