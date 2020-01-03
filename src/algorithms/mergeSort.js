const merge = (frames, arr, start, mid, end) => { 
  let start2 = mid + 1; 
  if (arr[mid] <= arr[start2]) { 
    return; 
  } 

  while (start <= mid && start2 <= end) { 
    if (arr[start] <= arr[start2]) { 
      start++; 
    } 
    else { 
      let value = arr[start2]; 
      let index = start2; 
      while (index !== start) { 
        arr[index] = arr[index - 1]; 
        index--; 
      } 
      arr[start] = value; 
      frames.push([...arr]);
      start++; 
      mid++; 
      start2++; 
    } 
  } 
}

const main = async(frames, arr, l, r) => { 
  if(l < r){ 
    let m = l + Math.floor((r - l) / 2);
    main(frames, arr, l, m); 
    main(frames, arr, m + 1, r); 
    merge(frames, arr, l, m, r); 
  } 
} 

const mergeSort = async(arr) => {
  let frames = [];
  let tmp = [...arr];
  let len = tmp.length;
  
  main(frames, tmp, 0, len-1).then(() => {});
  return frames;
};

export default mergeSort;