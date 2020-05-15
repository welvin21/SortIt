import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { Slider } from '@material-ui/core';
import { changeSpeed } from '../../redux/actions';

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

export const SpeedSlider = ({ speed, isSorting }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <p className={classes.label}>Speed</p>
      <Slider
        disabled={isSorting}
        className={classes.slider}
        value={speed}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="off"
        step={5}
        min={500}
        max={980}
        onChange={(e, speed) => dispatch(changeSpeed(speed))}
      />
    </div>
  );
};
