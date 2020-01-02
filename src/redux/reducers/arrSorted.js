const initialState = [...Array(55).keys()].map(num => num+1);
const arrSorted = (state = initialState, action) => {
  switch(action.type){
    case 'CHANGE_ARRAY_SORTED':
      return (state = action.payload.arrSorted);
    default:
      return state;
  }
}

export default arrSorted;