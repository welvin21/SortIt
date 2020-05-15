import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Slider } from '@material-ui/core';
import { store } from '../../redux/store';
import { changeArrSize, changeArr, changeArrSorted } from '../../redux/actions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'repeat(2,content)',
    gridGap: 0,
  },
  label: {
    margin: 0,
    fontFamily: `'Noto Sans TC', sans-serif`,
  },
  slider: {
    padding: '3% 0px 0px 0px',
  },
  [theme.breakpoints.down['sm']]: {
    label: {
      fontSize: 12,
    },
  },
}));

const handleOnSizeChange = (event, arrSize) => {
  const arr = [...Array(arrSize).keys()]
    .map(elem => elem + 1)
    .map(num => ({ num, color: null }));
  const arrSorted = [...arr].map(num => ({ num, color: null }));
  store.dispatch(changeArrSize(arrSize));
  store.dispatch(changeArr(arr));
  store.dispatch(changeArrSorted(arrSorted));
};

export const SizeSlider = ({ arrSize, isSorting }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.label}>Size</p>
      <Slider
        disabled={isSorting}
        className={classes.slider}
        value={arrSize}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={5}
        min={10}
        max={150}
        onChange={handleOnSizeChange}
      />
    </div>
  );
};
