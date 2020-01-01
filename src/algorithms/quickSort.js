const partition = (frames, tmp, left, right) => {
  let pivot   = tmp[Math.floor((right + left) / 2)],
      i       = left,
      j       = right;

  while (i <= j) {
    while(tmp[i] < pivot){
      i++;
    }
    while(tmp[j] > pivot){
      j--;
    }
    if(i <= j) {
      tmp[j] = tmp.splice(i, 1, tmp[j])[0];
      frames.push([...tmp]);
      i++;
      j--;
    }
  }
  return i;
}

const main = async(frames, tmp, len, left, right) => {
  let index;
  if (len > 1){
    index = partition(frames, tmp, left, right);
    if(left < index - 1){
      main(frames, tmp, len, left, index - 1);
    }
    if(index < right){
      main(frames, tmp, len, index, right);
    }
  }
}
const quickSort = async(arr) => {
  let frames = [];
  let tmp = [...arr];
  let len = tmp.length;
  main(frames, tmp, len, 0, len-1).then(() => {});
  return frames;
};

export default quickSort;