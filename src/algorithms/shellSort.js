import { filter, defaultYield, doneYield } from './helperFunctions';

export function *shellSort(arr){
  let arrCopy = [...arr];
  let len = arrCopy.length;

  let step = Math.floor(len/2);
  while (step > 0) {
    for(let i = step; i < len; i++) {
      let j = i;
      let temp = arrCopy[i];

      while(j >= step && arrCopy[j-step] > temp) {
        let elem = arrCopy[j-step], elem2 = arrCopy[j];
        yield [...arrCopy].map(num => filter(num, [elem, elem2]));
        
        arrCopy[j] = arrCopy.splice(j-step, 1, arrCopy[j])[0];
        elem = arrCopy[j-step]
        elem2 = arrCopy[j];
        yield [...arrCopy].map(num => filter(num, [elem, elem2]));
        yield* defaultYield(arrCopy);
        j -= step;
      }
      arrCopy[j] = temp;
    }

    if (step === 2) {
      step = 1;
    } else {
      step = parseInt(step*5 / 11);
    }
  }
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
}