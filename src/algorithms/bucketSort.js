const insertionSort = async(frames, buckets) => {
  for(let a = 0; a<buckets.length; ++a){
    let arr = buckets[a];
    const len = arr.length;
    for (let i = 1; i < len; i++){
      if (arr[i] < arr[0]) {
        arr.unshift(arr.splice(i,1)[0]);
        frames.push([...[ ].concat(...buckets.slice(0,a)), ...arr, ...[ ].concat(...buckets.slice(a+1))]);
      } 
      else if (arr[i] > arr[i-1]){
        continue;
      } 
      else {
        for (let j = 1; j < i; j++) {
          if (arr[i] > arr[j-1] && arr[i] < arr[j]){
            arr.splice(j,0,arr.splice(i,1)[0]);
            frames.push([...[ ].concat(...buckets.slice(0,a)), ...arr, ...[ ].concat(...buckets.slice(a+1))]);
          }
        }
      }
    }
    buckets[a] = arr;
  }
}

const bucketSort = async(arr) => {
  let frames = [];
  let tmp = [...arr];
  let len = tmp.length;

  let buckets = [];
  let bucketSize = Math.floor(Math.max(...tmp)/10);
  for(let i = 0; i < bucketSize+1; ++i){
    buckets.push([]);
  }

  for(let i = 0; i<len; ++i){
    let pos = Math.floor(tmp[i]/10);
    buckets[pos].push(tmp[i]);
    frames.push([...[ ].concat(...buckets),...tmp.slice(i+1)]);
  }
  insertionSort(frames,buckets).then(() => {});
  return frames;
}

export default bucketSort;