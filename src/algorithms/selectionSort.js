const selectionSort = async(arr) => {
  let frames = [];
  let tmp = [...arr];
  let len = tmp.length;
  for (let i = 0; i < len - 1; ++i) {
    var j_min = i;
    for (let j = i + 1; j < len; ++j) {
        if (tmp[j] < tmp[j_min]) {
            j_min = j;
        }
    }
    if (j_min !== i) {
      tmp[j_min] = tmp.splice(i, 1, tmp[j_min])[0];
      frames.push([...tmp]);
    }
  }
  console.log(frames.length);
  return frames;
};

export default selectionSort;