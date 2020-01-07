import React, { useState }  from 'react';
import { Intro } from './components/Intro';
import { Sort } from './components/Sort';
import './App.css';

export const App = () => {
  const [ isOpen, setOpen ] = useState(true);
  return(
    <>
      <Intro isOpen={isOpen} closeModal={() => setOpen(false)}/>
      <Sort/>
    </>
  );
}