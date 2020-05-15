import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Intro } from './components/Intro';
import { Sort } from './components/Sort';

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    textAlign: 'center',
  },
});

export const App = () => {
  const classes = useStyles();
  const [isModalOpen, setModalOpen] = useState(true);

  return (
    <div className={classes.root}>
      <Intro isOpen={isModalOpen} closeModal={() => setModalOpen(false)} />
      <Sort />
    </div>
  );
};
