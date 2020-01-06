const initialState = [...Array(80).keys()].map(num => num+1).map(num => ({num, isCompared: false}));
const arrSorted = (state = initialState, action) => {
  switch(action.type){
    case 'CHANGE_ARRAY_SORTED':
      return (state = action.payload.arr);
    default:
      return state;
  }
}

export default arrSorted;