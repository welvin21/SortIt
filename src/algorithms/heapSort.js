const heap_root = (frames, arr, len, i) => {
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
    arr[i] = arr.splice(max, 1, arr[i])[0];
    frames.push([...arr]);
    heap_root(frames, arr, len, max);
  }
}

const heapSort = async(arr) => {
  let frames = [];
  let tmp = [...arr];
  let len = tmp.length;

  for(var i = Math.floor(len / 2); i >= 0; i -= 1){
    heap_root(frames, tmp, len, i);
  }

  for(i = len - 1; i > 0; i--){
    tmp[0] = tmp.splice(i, 1, tmp[0])[0];
    frames.push([...tmp]);
    len--;
  
    heap_root(frames, tmp, len, 0);
  }

  console.log(frames.length);
  return frames;
}

export default heapSort;