const isSorting = (state = false, action) => {
  switch(action.type){
    case 'CHANGE_SORTING_STATUS':
      return( state = !state);
    default: 
      return state;
  }
}

export default isSorting;