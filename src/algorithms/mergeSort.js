const merge = (left, right) => {
  //TODO : implement mergeSort
  const merged = [];
  while(left.length && right.length){
    if(left[0] < right[0]){
      merged.push(left.shift());
    }else{
      merged.push(right.shift());
    }
  }
  return [...merged, ...left, ...right];
}

const main = (frames, arr) => {
  const len = arr.length;
  if(len < 2){
    return arr;
  }

  const left = arr.slice(0, len/2);
  const right = arr.slice(len/2);
  const res =  merge(main(frames, left), main(frames, right));
  frames.push([...res]);
  return res;
}

const mergeSort = async(arr) => {
  let frames = [];
  let tmp = [...arr];
  
  const a = await main(frames, tmp);
  frames.push(a);
  return frames;
};

export default mergeSort;