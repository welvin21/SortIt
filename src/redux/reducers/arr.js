const initialState = [...Array(55).keys()].map(num => num+1);
const arr = (state = initialState, action) => {
  switch(action.type){
    case 'CHANGE_ARRAY':
      return (state = action.payload.arr);
    default:
      return state;
  }
}

export default arr;