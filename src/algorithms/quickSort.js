import { defaultYield, doneYield } from './helperFunctions';

function* swapYieldQuick(arr, i, j, pivot) {
  yield [...arr].map(num => ({
    num,
    color:
      num === pivot
        ? '#0000FF'
        : num === arr[i] || num === arr[j]
        ? '#FF0000'
        : null,
  }));
  arr[i] = arr.splice(j, 1, arr[i])[0];
  yield [...arr].map(num => ({
    num,
    color:
      num === pivot
        ? '#0000FF'
        : num === arr[i] || num === arr[j]
        ? '#FF0000'
        : null,
  }));
  yield [...arr].map(num => ({ num, color: num === pivot ? '#0000FF' : null }));
  return;
}

function* partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      yield* swapYieldQuick(arr, i, j, pivot);
      i++;
      j--;
    }
  }
  return i;
}
function* main(arr, arrSize, left, right) {
  let index;
  if (arrSize > 1) {
    index = yield* partition(arr, left, right, index);
    if (left < index - 1) {
      yield* main(arr, arrSize, left, index - 1);
    }
    if (index < right) {
      yield* main(arr, arrSize, index, right);
    }
  }
}

export function* quickSort(arr) {
  let arrCopy = [...arr];
  let arrSize = arrCopy.length;
  yield* main(arrCopy, arrSize, 0, arrSize - 1);
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
}
