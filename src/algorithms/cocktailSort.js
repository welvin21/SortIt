const cocktailSort = async(arr) => {
  let frames = [];
  let tmp = [...arr];
  let len = tmp.length;

  let start = 0, end = len-1;
  let swapped = true;

  while(swapped){
    swapped = false;
    for(let i = start; i < end; ++i){
      if(tmp[i] > tmp[i+1]){
        tmp[i] = tmp.splice(i+1, 1, tmp[i])[0];
        frames.push([...tmp]);
        swapped = true;
      }
    }

    if(!swapped){
      break;
    }

    swapped = false;
    end-=1;
    for(let i = end-1; i >= start; --i){
      if(tmp[i] > tmp[i+1]){
        tmp[i] = tmp.splice(i+1, 1, tmp[i])[0];
        frames.push([...tmp]);
        swapped = true;
      }
    }

    start+=1;
  }

  return frames;
}

export default cocktailSort;