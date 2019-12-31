const bubbleSort = arr => {
  for(let i=0; i<arr.length; ++i){
    for(let j=0; j<arr.length-1-i; ++j){
      if(arr[j] > arr[j+1]){
        arr[j] = arr.splice(j+1, 1, arr[j])[0];
        return arr;
      }
    }
  }
};

export default bubbleSort;