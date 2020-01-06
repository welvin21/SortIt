function *initialState(){
  yield null;
  return;
}

const frames = (state = initialState, action) => {
  switch(action.type){
    case 'CHANGE_FRAMES':
      return(state = action.payload.frames);
    default:
      return state;
  }
}

export default frames;