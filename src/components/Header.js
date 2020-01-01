import React, { Component } from 'react';
import { Slider, Select, MenuItem } from '@material-ui/core';

const algorithms = [
  {name: 'Bubble Sort', key: 0},
  {name: 'Insertion Sort', key: 1},
  {name: 'Selection Sort', key: 2},
  {name: 'Quick Sort', key: 3}
]

class Header extends Component{
  handleOnSliderChange = (event, newValue) => {
    const { onSliderChange } = this.props;
    onSliderChange(newValue);
  }

  handleOnSpeedChange = (event, newSpeed) => {
    const { onSpeedChange } = this.props;
    onSpeedChange(newSpeed);
  }

  handleOnSelectorChange = event => {
    const { onSelectorChange } = this.props;
    onSelectorChange(event.target.value);
  }

  handleOnShuffleClick = () => {
    const { onShuffleClick } = this.props;
    onShuffleClick();
  }

  handleOnSortClick = () => {
    const { onSortClick } = this.props;
    onSortClick();
  }

  render(){
    const { data: { arrSize, algo, speed, isSorting } } = this.props;
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
            step={1}
            min={10}
            max={100}
            onChange={this.handleOnSliderChange}
          />
        </div>
        <div className='slider'>
          <Slider
            disabled={isSorting ? true : false}
            id='speed_slider'
            value={speed}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="off"
            step={10}
            min={0}
            max={950}
            onChange={this.handleOnSpeedChange}
          />
        </div>
        <div className='selector'>
          <Select disabled={isSorting ? true : false} id='algo_selector' value={algo} onChange={this.handleOnSelectorChange}>
            {algorithms.map(algo => <MenuItem key={algo.key} value={algo.key}>{algo.name}</MenuItem>)}
          </Select>
        </div>
        <div>
          <button disabled={isSorting ? true : false} style={{background: 'linear-gradient(#67C4FF,#0081D2)'}} onClick={this.handleOnShuffleClick}>
            Shuffle
          </button>
        </div>
        <div>
          <button style={{background: isSorting ? redBtn : greenBtn}} onClick={this.handleOnSortClick}>
            {isSorting ? 'Stop' : 'Sort it!'}
          </button>
        </div>
      </div>
    );
  }
}

export default Header;