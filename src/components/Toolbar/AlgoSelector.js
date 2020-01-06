import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { changeAlgo } from '../../redux/actions';

export const AlgoSelector = props => {
  const dispatch = useDispatch();
  const { algorithms, algo, isSorting } = props; 
  return(
    <div className='selector'>
      <Select disabled={isSorting ? true : false} id='algo_selector' value={algo} onChange={e => dispatch(changeAlgo(e.target.value))}>
        {algorithms.map(algo => <MenuItem key={algo.key} value={algo.key}>{algo.name}</MenuItem>)}
      </Select>
    </div>
  );
}