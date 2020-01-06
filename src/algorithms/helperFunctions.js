export const filter = (num,arr) => {
  return({
    num,
    color: (arr.includes(num)) ? '#FF0000' : null
  });
}

export function *defaultYield(arr){
  yield [...arr].map(num => ({num, color: null}));
  return;
}

export function *doneYield(arr){
  for(let i = 0; i<arr.length; ++i){
    yield [...arr].map(num => ({num, color: num <= arr[i] ? '#00FF00' : null}));
  }
  return;
}