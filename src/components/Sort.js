import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from './Toolbar/Toolbar';
import { Main } from './Main';

const useStyles = makeStyles({
  sort: {
    height: '100vh',
    display: 'grid',
    gridTemplateRows: 'min-content',
  },
});

export const Sort = () => {
  const classes = useStyles();

  return (
    <div className={classes.sort}>
      <Toolbar />
      <Main />
    </div>
  );
};
