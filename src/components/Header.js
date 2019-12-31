import React, { Component } from 'react';
import { Slider, Select, MenuItem } from '@material-ui/core';

const algorithms = [
  {name: 'Bubble Sort', key: 1},
  {name: 'Insertion Sort', key: 2},
  {name: 'Selection Sort', key: 3},
  {name: 'Quick Sort', key: 4}
]

class Header extends Component{
  handleOnSliderChange = (event, newValue) => {
    const { onSliderChange } = this.props;
    onSliderChange(newValue);
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
    const { arrSize, algo, isSorting } = this.props;
    const greenBtn = 'linear-gradient(#63FF5E,#07D800)';
    const redBtn = 'linear-gradient(#FF6666,#E90000)';

    return(
      <div className='header'>
        <div className='slider'>
          <Slider
            id='array_slider'
            value={arrSize}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={5}
            min={20}
            max={80}
            onChange={this.handleOnSliderChange}
          />
        </div>
        <div className='selector'>
          <Select id='algo_selector' value={algo} onChange={this.handleOnSelectorChange}>
            {algorithms.map(algo => <MenuItem key={algo.key} value={algo.key}>{algo.name}</MenuItem>)}
          </Select>
        </div>
        <div>
          <button className='button' style={{background: 'linear-gradient(#67C4FF,#0081D2)'}} onClick={this.handleOnShuffleClick}>
            Shuffle
          </button>
        </div>
        <div>
          <button className='button' style={{background: isSorting ? redBtn : greenBtn}} onClick={this.handleOnSortClick}>
            {isSorting ? 'Stop' : 'Sort it!'}
          </button>
        </div>
      </div>
    );
  }
}

export default Header;