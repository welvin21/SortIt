const bubbleSort = async(arr) => {
  let frames = [];
  let tmp = [...arr];
  let len = tmp.length;
  for(let i=0; i<len; ++i){
    for(let j=0; j<len-1-i; ++j){
      if(tmp[j] > tmp[j+1]){
        tmp[j] = tmp.splice(j+1, 1, tmp[j])[0];
        frames.push([...tmp]);
      }
    }
  }
  return frames;
};

export default bubbleSort;