import { filter, defaultYield, doneYield } from './helperFunctions';

function *merge(arr, start, mid, end){ 
  let start2 = mid + 1; 
  if (arr[mid] <= arr[start2]) { 
    return; 
  } 

  while (start <= mid && start2 <= end) { 
    const elem = arr[start], elem2 = arr[start2];
    yield [...arr].map(num => filter(num,[elem, elem2]));
    if (arr[start] <= arr[start2]) { 
      start++; 
    } 
    else { 
      let value = arr[start2]; 
      let i = start2; 
      while (i !== start) { 
        arr[i] = arr[i - 1]; 
        i--; 
      } 
      arr[start] = value; 
      const elem = arr[start], elem2 = arr[start2];
      yield [...arr].map(num => filter(num,[elem, elem2]));
      yield* defaultYield(arr);
      start++; 
      mid++; 
      start2++; 
    } 
  } 
}

function *main(arr, l, r){ 
  if(l < r){ 
    let m = l + Math.floor((r - l) / 2);
    yield* main(arr, l, m); 
    yield* main(arr, m + 1, r); 
    yield* merge(arr, l, m, r); 
  }
} 

export function *mergeSort(arr){
  let arrCopy = [...arr];
  let len = arrCopy.length;
  yield* main(arrCopy, 0, len-1);
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
};