import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { SizeSlider } from './SizeSlider';
import { SpeedSlider } from './SpeedSlider';
import { AlgoSelector } from './AlgoSelector';
import { ReverseButton, ShuffleButton } from './ArrayModifier';
import { SortButton } from './SortButton';
import { algorithms } from '../../algorithms';

const useStyles = makeStyles(theme => ({
  toolbar: {
    padding: '2% 2% 1% 2%',
    borderBottom: 'min(1px,1vw) solid #000',
    display: 'grid',
    gridTemplateColumns: 'repeat(6,1fr)',
    gridGap: '1%',
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      padding: 20,
      gridTemplateColumns: 'repeat(3, 1fr)',
      rowGap: '20%',
      columnGap: '2%',
    },
  },
}));

export const Toolbar = () => {
  const classes = useStyles();

  const algo = useSelector(state => state.algo);
  const arr = useSelector(state => state.arr);
  const arrSize = useSelector(state => state.arrSize);
  const speed = useSelector(state => state.speed);
  const isSorting = useSelector(state => state.isSorting);

  return (
    <div className={classes.toolbar}>
      <SizeSlider arrSize={arrSize} isSorting={isSorting} />
      <SpeedSlider speed={speed} isSorting={isSorting} />
      <AlgoSelector algorithms={algorithms} algo={algo} isSorting={isSorting} />
      <ReverseButton arr={arr} isSorting={isSorting} />
      <ShuffleButton arr={arr} isSorting={isSorting} />
      <SortButton algorithms={algorithms} isSorting={isSorting} />
    </div>
  );
};
