import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { changeAlgo } from '../../redux/actions';

const useStyles = makeStyles({
  algoSelector: {
    width: '20vw',
  },
});

export const AlgoSelector = ({ algorithms, algo, isSorting }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className="selector">
      <Select
        disabled={isSorting}
        className={classes.algoSelector}
        value={algo}
        onChange={e => dispatch(changeAlgo(e.target.value))}
      >
        {algorithms.map(algo => (
          <MenuItem key={algo.key} value={algo.key}>
            {algo.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
