import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component{
  state = {
    arr : [],
    arrSize : 50,
    algo : 1
  };

  componentDidMount = () => {
    const { arrSize } = this.state;

    let arr = [];
    for(let i=1 ; i<=arrSize ; ++i){
      arr.push(i);
    }

    this.setState({arr});
  }

  onSliderChange = newArrSize => {
    const arrSize = newArrSize;
    let arr = [];
    for(let i=1 ; i<=arrSize ; ++i){
      arr.push(i);
    }

    this.setState({arr, arrSize});
  }

  onSelectorChange = algo => {
    this.setState({algo});
  }

  onShuffleClick = () => {
    let { arr } = this.state;
    let counter = arr.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;

        let temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }

    this.setState({arr});
  }

  render(){
    const { arr, arrSize, algo } = this.state;

    return(
      <div className='app'>
        <Header 
          arrSize={arrSize} 
          algo={algo}
          onSliderChange={newArrSize => {this.onSliderChange(newArrSize)}}
          onSelectorChange={newAlgo => {this.onSelectorChange(newAlgo)}}
          onShuffleClick={() => {this.onShuffleClick()}}
        />
        <div className='main'>
          {arr.map(elem => {
            const height = `${elem/arrSize * 100}%`;
            const width = `${100/arrSize}%`;
            const fontSize = `${40/arrSize}vw`;
            const backgroundColor = `hsl(${elem/arrSize * 360},100%,80%)`;
            const style = {
              height,
              width,
              fontSize,
              backgroundColor
            }
            return(<div key={elem} className='bar' style={style}>{elem}</div>)
          })}
        </div>
      </div>
    );
  }
}

export default App;