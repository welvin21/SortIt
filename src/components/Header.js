import React, { Component } from 'react';
import { Slider, Select, MenuItem } from '@material-ui/core';

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

  render(){
    const { arrSize, algo } = this.props;

    return(
      <div className='header'>
        <div className='slider'>
          <Slider
            id='array_slider'
            value={arrSize ? arrSize : ''}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={5}
            min={30}
            max={80}
            onChange={this.handleOnSliderChange}
          />
        </div>
        <div className='selector'>
          <Select id='algo_selector' value={algo} onChange={this.handleOnSelectorChange}>
            <MenuItem value={1}>Bubble Sort</MenuItem>
            <MenuItem value={2}>Insertion Sort</MenuItem>
            <MenuItem value={3}>Selection Sort</MenuItem>
            <MenuItem value={4}>Quick Sort</MenuItem>
          </Select>
        </div>
        <div>
          <button className='button' style={{backgroundColor: '#ff9999'}} onClick={this.handleOnShuffleClick}>
            Shuffle
          </button>
        </div>
        <div>
          <button className='button' style={{backgroundColor: '#66ff66'}}>
            Sort it!
          </button>
        </div>
      </div>
    );
  }
}

export default Header;