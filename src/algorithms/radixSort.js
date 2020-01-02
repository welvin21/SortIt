const getPosition = (num, place) => {
  return  Math.floor(Math.abs(num)/Math.pow(10,place)) % 10;
}
const radixSort = async(arr) => {
  let frames = [];
  let tmp = [...arr];
  let len = tmp.length;

  const maxLength = Math.max(...tmp).toString().length;
  for(let i = 0; i < maxLength; i++){
      let buckets = Array.from({ length: 10 }, () => [ ])
      for (let j = 0; j < len; j++) {
        let pos = getPosition(tmp[j], i);
        buckets[pos].push(tmp[j]);
        let newArr = [...[ ].concat(...buckets),...tmp.slice(j+1)];
        frames.push([...newArr]);
      }
      tmp = [ ].concat(...buckets);
  }
  return frames;
}

export default radixSort;