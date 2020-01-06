import { filter, defaultYield } from './helperFunctions';

function *insertionSort(buckets){
  for(let a = 0; a<buckets.length; ++a){
    let arr = buckets[a];
    const len = arr.length;
    for (let i = 1; i < len; i++){
      if (arr[i] < arr[0]) {
        yield [...[ ].concat(...buckets)].map(num => filter(num,[arr[0], arr[i]]));

        arr.unshift(arr.splice(i,1)[0]);
        buckets[a] = arr;
        yield* defaultYield([ ].concat(...buckets));
      } 
      else if (arr[i] > arr[i-1]){
        continue;
      } 
      else {
        for (let j = 1; j < i; j++) {
          if (arr[i] > arr[j-1] && arr[i] < arr[j]){
            yield [...[ ].concat(...buckets)].map(num => filter(num,[...arr.slice(j,j+2)]));
            
            arr.splice(j,0,arr.splice(i,1)[0]);
            buckets[a] = arr;
            yield [...[ ].concat(...buckets)].map(num => filter(num,[...arr.slice(j+1,j+3)]));
            yield* defaultYield([ ].concat(...buckets));
          }
        }
      }
    }
    buckets[a] = arr;
  }
}

export function *bucketSort(arr){
  let arrCopy = [...arr];
  let len = arrCopy.length;

  let buckets = [];
  let bucketSize = Math.floor(Math.max(...arrCopy)/10);
  for(let i = 0; i < bucketSize+1; ++i){
    buckets.push([]);
  }

  for(let i = 0; i<len; ++i){
    let pos = Math.floor(arrCopy[i]/10);
    buckets[pos].push(arrCopy[i]);
    let newArr = [...[ ].concat(...buckets),...arrCopy.slice(i+1)];
    yield [...newArr].map(num => filter(num, [...buckets[pos]]));
  }
  yield* insertionSort(buckets);

  arrCopy = [...[ ].concat(...buckets)];
  yield* defaultYield(arrCopy);
  return;
}