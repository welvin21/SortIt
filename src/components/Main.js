import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { changeSortingStatus, changeArr } from '../redux/actions';
import { store } from '../redux/store';

const useStyles = makeStyles({
  main: {
    height: '100%',
    display: 'flex',
    fontFamily: `'Noto Sans TC', sans-serif`,
  },
  bar: {
    alignSelf: 'flex-end',
    display: 'inline-block',
  },
});

const sort = async () => {
  const { frames } = store.getState();
  const frame = frames.next();
  store.dispatch(
    !frame.done ? changeArr(frame.value) : changeSortingStatus(false)
  );
};

export const Main = () => {
  const classes = useStyles();

  const arrSize = useSelector(state => state.arrSize);
  const arr = useSelector(state => state.arr);
  const speed = useSelector(state => state.speed);
  const isSorting = useSelector(state => state.isSorting);

  if (isSorting) {
    setTimeout(() => sort(), 1000 - speed);
  }

  const width = `${100 / arrSize}%`;
  return (
    <div className={classes.main}>
      {arr.map(({ num, color }) => {
        const height = `${((num + 1) / (arrSize + 1)) * 100}%`;
        const backgroundColor =
          isSorting && color ? color : `hsl(${(num / arrSize) * 360},100%,80%)`;
        return (
          <div
            key={num}
            className={classes.bar}
            style={{ height, width, backgroundColor }}
          ></div>
        );
      })}
    </div>
  );
};
