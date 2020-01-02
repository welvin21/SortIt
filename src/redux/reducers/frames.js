const frames = (state = [], action) => {
  switch(action.type){
    case 'CHANGE_FRAMES':
      return(state = action.payload.frames);
    default:
      return state;
  }
}

export default frames;