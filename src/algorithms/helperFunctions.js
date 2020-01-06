export const filter = (num,arr) => {
  return({
    num,
    isCompared: (arr.includes(num))
  });
}

export function *defaultYield(arr){
  yield [...arr].map(num => ({num, isCompared: false}));
  return;
}