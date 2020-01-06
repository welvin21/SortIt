import { filter, defaultYield, doneYield } from './helperFunctions';

export function *bubbleSort(arr){
  let arrCopy = [...arr];
  let len = arrCopy.length;
  for(let i=0; i<len; ++i){
    for(let j=0; j<len-1-i; ++j){
      if(arrCopy[j] > arrCopy[j+1]){
        yield [...arrCopy].map(num => filter(num,[arrCopy[j], arrCopy[j+1]]));
        arrCopy[j] = arrCopy.splice(j+1, 1, arrCopy[j])[0];
        yield [...arrCopy].map(num => filter(num,[arrCopy[j], arrCopy[j+1]]));
        yield* defaultYield(arrCopy);
      }
    }
  }
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
};