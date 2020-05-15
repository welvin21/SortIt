import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { store } from '../../redux/store';
import { changeArr } from '../../redux/actions';

const useStyles = makeStyles(theme => ({
  greyButton: {
    width: '100%',
    padding: '2% 5%',
    fontSize: '80%',
    fontWeight: 700,
    borderRadius: 5,
    color: '#000',
    background: 'linear-gradient(#fff,#cfcfcf)',
  },
  [theme.breakpoints.down['sm']]: {
    greyButton: {
      fontSize: '60%',
    },
  },
}));

const handleOnShuffleClick = arr => {
  let tmp = [...arr];
  let arrSize = tmp.length;
  while (arrSize > 0) {
    let index = Math.floor(Math.random() * arrSize);
    arrSize--;
    tmp[index] = tmp.splice(arrSize, 1, tmp[index])[0];
  }
  store.dispatch(changeArr(tmp));
};

export const ShuffleButton = ({ arr, isSorting }) => {
  const classes = useStyles();

  return (
    <button
      disabled={isSorting}
      className={classes.greyButton}
      onClick={() => handleOnShuffleClick(arr)}
    >
      Shuffle
    </button>
  );
};

export const ReverseButton = ({ arr, isSorting }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <button
      disabled={isSorting}
      className={classes.greyButton}
      onClick={() => dispatch(changeArr([...[...arr].reverse()]))}
    >
      Reverse
    </button>
  );
};
