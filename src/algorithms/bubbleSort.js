import { defaultYield, doneYield, swapYield } from './helperFunctions';

export function* bubbleSort(arr) {
  let arrCopy = [...arr];
  let arrSize = arrCopy.length;
  for (let i = 0; i < arrSize; ++i) {
    for (let j = 0; j < arrSize - 1 - i; ++j) {
      if (arrCopy[j] > arrCopy[j + 1]) {
        yield* swapYield(arrCopy, j, j + 1);
      }
    }
  }
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
}
