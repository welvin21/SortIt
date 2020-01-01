const insertionSort = async(arr) => {
  let frames = [];
  let tmp = [...arr];
  let len = tmp.length;
  for (let i = 1; i < len; i++){
    if (tmp[i] < tmp[0]) {
      tmp.unshift(tmp.splice(i,1)[0]);
      frames.push([...tmp]);
    } 
    else if (tmp[i] > tmp[i-1]){
      continue;
    } 
    else {
      for (let j = 1; j < i; j++) {
        if (tmp[i] > tmp[j-1] && tmp[i] < tmp[j]){
          tmp.splice(j,0,tmp.splice(i,1)[0]);
          frames.push([...tmp]);
        }
      }
    }
  }
  return frames;
};

export default insertionSort;