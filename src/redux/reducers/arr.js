const initialState = [...Array(80).keys()].map(num => num+1).map(num => ({num, isCompared: false}));
const arr = (state = initialState, action) => {
  switch(action.type){
    case 'CHANGE_ARRAY':
      return (state = action.payload.arr);
    default:
      return state;
  }
}

export default arr;