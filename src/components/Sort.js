import React from 'react';
import { Toolbar } from './Toolbar/Toolbar';
import { Main } from './Main';

export const Sort = () => {
  return(
    <div className='sort'>
      <Toolbar/>
      <Main/>
    </div>
  );
}