import { combineReducers } from 'redux';
import algo from './algo';
import arrSize from './arrSize';
import arr from './arr';
import arrSorted from './arrSorted';
import speed from './speed';
import isSorting from './isSorting';

const mainReducer = combineReducers({
  algo,
  arrSize,
  arr,
  arrSorted,
  speed,
  isSorting
})

export default mainReducer;