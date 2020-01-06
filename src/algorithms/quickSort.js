import { filter, defaultYield, doneYield } from './helperFunctions';

function *partition(arr, left, right){
  let pivot   = arr[Math.floor((right + left) / 2)],
      i       = left,
      j       = right;
  while (i <= j) {
    while(arr[i] < pivot){
      i++;
    }
    while(arr[j] > pivot){
      j--;
    }
    if(i <= j) {
      let elem = arr[i], elem2 = arr[j];
      yield [...arr].map(num => filter(num, [elem, elem2, pivot]));
      arr[j] = arr.splice(i, 1, arr[j])[0];
      elem = arr[i];
      elem2 = arr[j];
      yield [...arr].map(num => filter(num, [elem, elem2, pivot]));
      yield [...arr].map(num => filter(num, [pivot]));
      i++;
      j--;
    }
  }
  return i;
}
function *main(arr, len, left, right){
  let index;
  if (len > 1){
    index = yield* partition(arr, left, right,index);
    if(left < index - 1){
      yield* main(arr, len, left, index - 1);
    }
    if(index < right){
      yield* main(arr, len, index, right);
    }
  }
}

export function *quickSort(arr){
  let arrCopy = [...arr];
  let len = arrCopy.length;
  yield* main(arrCopy, len, 0, len-1);
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
};