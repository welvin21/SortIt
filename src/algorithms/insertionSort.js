import { filter, defaultYield, doneYield } from './helperFunctions';

export function *insertionSort(arr){
  let arrCopy = [...arr];
  let len = arrCopy.length;
  for (let i = 1; i < len; i++){
    if (arrCopy[i] < arrCopy[0]) {
      yield [...arrCopy].map(num => filter(num,[arrCopy[0], arrCopy[i]]));
      arrCopy.unshift(arrCopy.splice(i,1)[0]);
      yield* defaultYield(arrCopy);
    } 
    else if (arrCopy[i] > arrCopy[i-1]){
      continue;
    } 
    else {
      for (let j = 1; j < i; j++) {
        if (arrCopy[i] > arrCopy[j-1] && arrCopy[i] < arrCopy[j]){
          yield [...arrCopy].map(num => filter(num,[arrCopy[j], arrCopy[j+1]]));
          arrCopy.splice(j,0,arrCopy.splice(i,1)[0]);
          yield [...arrCopy].map(num => filter(num,[...arrCopy.slice(j+1,j+3)]));
          yield* defaultYield(arrCopy);
        }
      }
    }
  }
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
};