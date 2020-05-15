import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { store } from '../../redux/store';
import { changeSortingStatus, changeFrames } from '../../redux/actions';

const useStyles = makeStyles(theme => ({
  button: {
    width: '100%',
    padding: '2% 5%',
    fontSize: '80%',
    fontWeight: 700,
    borderRadius: 5,
    color: '#fff',
  },
  [theme.breakpoints.down['sm']]: {
    button: {
      fontSize: '60%',
    },
  },
}));

const handleOnSortClick = algorithms => {
  const { arr, arrSorted, algo, isSorting } = store.getState();
  if (!isSorting && JSON.stringify(arr) !== JSON.stringify(arrSorted)) {
    const frames = algorithms[algo].method(arr.map(elem => elem.num));
    store.dispatch(changeFrames(frames));
    store.dispatch(changeSortingStatus(true));
  } else {
    store.dispatch(changeSortingStatus(false));
  }
};

const greenBtn = 'linear-gradient(#63FF5E,#07D800)';
const redBtn = 'linear-gradient(#FF6666,#E90000)';

export const SortButton = ({ algorithms, isSorting }) => {
  const classes = useStyles();

  return (
    <div>
      <button
        className={classes.button}
        style={{ background: isSorting ? redBtn : greenBtn }}
        onClick={() => handleOnSortClick(algorithms)}
      >
        {isSorting ? 'Stop' : 'Sort it!'}
      </button>
    </div>
  );
};
