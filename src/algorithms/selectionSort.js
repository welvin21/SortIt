const selectionSort = arr => {
  let len = arr.length;
  for (let i = 0; i < len - 1; ++i) {
    var j_min = i;
    for (let j = i + 1; j < len; ++j) {
        if (arr[j] < arr[j_min]) {
            j_min = j;
        }
    }
    if (j_min !== i) {
      arr[j_min] = arr.splice(i, 1, arr[j_min])[0];
      return arr;
    }
  }
};

export default selectionSort;