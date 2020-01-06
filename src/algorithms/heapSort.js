import { filter, defaultYield, doneYield } from './helperFunctions';

function *heap_root(arr, len, i){
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;

  if (left < len && arr[left] > arr[max]) {
    max = left;
  }

  if (right < len && arr[right] > arr[max])     {
    max = right;
  }

  if (max !== i) {
    yield [...arr].map(num => filter(num, [arr[i], arr[max]]));
    arr[i] = arr.splice(max, 1, arr[i])[0];
    yield [...arr].map(num => filter(num, [arr[i], arr[max]]));
    yield* defaultYield(arr);

    yield* heap_root(arr, len, max);
  }
}

export function *heapSort(arr){
  let arrCopy = [...arr];
  let len = arrCopy.length;

  for(var i = Math.floor(len / 2); i >= 0; i -= 1){
    yield* heap_root(arrCopy, len, i);
  }

  for(i = len - 1; i > 0; i--){
    let elem = arr[0], elem2 = arr[i];
    yield [...arrCopy].map(num => filter(num, [elem, elem2]));
    arrCopy[0] = arrCopy.splice(i, 1, arrCopy[0])[0];
    elem = arr[0];
    elem2 = arr[i];
    yield [...arrCopy].map(num => filter(num, [elem, elem2]));
    yield* defaultYield(arrCopy);
    len--;
  
    yield* heap_root(arrCopy, len, 0);
  }
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
}