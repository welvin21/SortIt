import { defaultYield, doneYield, swapYield } from './helperFunctions';

function* heap_root(arr, arrSize, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;

  if (left < arrSize && arr[left] > arr[max]) {
    max = left;
  }

  if (right < arrSize && arr[right] > arr[max]) {
    max = right;
  }

  if (max !== i) {
    yield* swapYield(arr, i, max);
    yield* heap_root(arr, arrSize, max);
  }
}

export function* heapSort(arr) {
  let arrCopy = [...arr];
  let arrSize = arrCopy.length;

  for (var i = Math.floor(arrSize / 2); i >= 0; i -= 1) {
    yield* heap_root(arrCopy, arrSize, i);
  }

  for (i = arrSize - 1; i > 0; i--) {
    yield* swapYield(arrCopy, 0, i);
    arrSize--;
    yield* heap_root(arrCopy, arrSize, 0);
  }
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
}
