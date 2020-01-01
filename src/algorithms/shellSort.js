const shellSort = async(arr) => {
  let frames = [];
  let tmp = [...arr];
  let len = tmp.length;

  let step = Math.floor(len/2);
  while (step > 0) {
    for(let i = step; i < len; i++) {
      let j = i;
      let temp = tmp[i];

      while(j >= step && tmp[j-step] > temp) {
        tmp[j] = tmp.splice(j-step, 1, tmp[j])[0];
        frames.push([...tmp]);
        j -= step;
      }
      tmp[j] = temp;
      frames.push([...tmp]);
    }

    if (step === 2) {
      step = 1;
    } else {
      step = parseInt(step*5 / 11);
    }
  }
  return frames;
}

export default shellSort;