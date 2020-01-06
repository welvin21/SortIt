import { filter, defaultYield, doneYield } from './helperFunctions';

export function *cocktailSort(arr){
  let arrCopy = [...arr];
  let len = arrCopy.length;

  let start = 0, end = len-1;
  let swapped = true;

  while(swapped){
    swapped = false;
    for(let i = start; i < end; ++i){
      if(arrCopy[i] > arrCopy[i+1]){
        let elem = arrCopy[i], elem2 = arrCopy[i+1];
        yield [...arrCopy].map(num => filter(num, [elem, elem2]));
        
        arrCopy[i] = arrCopy.splice(i+1, 1, arrCopy[i])[0];
        elem = arrCopy[i]
        elem2 = arrCopy[i+1];
        yield [...arrCopy].map(num => filter(num, [elem, elem2]));
        yield* defaultYield(arrCopy);
        swapped = true;
      }
    }

    if(!swapped){
      break;
    }

    swapped = false;
    end-=1;
    for(let i = end-1; i >= start; --i){
      if(arrCopy[i] > arrCopy[i+1]){
        let elem = arrCopy[i], elem2 = arrCopy[i+1];
        yield [...arrCopy].map(num => filter(num, [elem, elem2]));
        
        arrCopy[i] = arrCopy.splice(i+1, 1, arrCopy[i])[0];
        elem = arrCopy[i]
        elem2 = arrCopy[i+1];
        yield [...arrCopy].map(num => filter(num, [elem, elem2]));
        yield* defaultYield(arrCopy);
        swapped = true;
      }
    }

    start+=1;
  }

  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
}