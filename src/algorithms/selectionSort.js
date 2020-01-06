import { filter, defaultYield, doneYield } from './helperFunctions';

export function *selectionSort(arr){
  let arrCopy = [...arr];
  let len = arrCopy.length;
  for (let i = 0; i < len - 1; ++i) {
    let j_min = i;
    for (let j = i + 1; j < len; ++j) {
        if (arrCopy[j] < arrCopy[j_min]) {
            j_min = j;
        }
    }
    if (j_min !== i) {
      yield [...arrCopy].map(num => filter(num,[arrCopy[j_min], arrCopy[i]]));
      arrCopy[j_min] = arrCopy.splice(i, 1, arrCopy[j_min])[0];
      yield [...arrCopy].map(num => filter(num,[arrCopy[j_min], arrCopy[i]]));
      yield* defaultYield(arrCopy);
    }
  }
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
};