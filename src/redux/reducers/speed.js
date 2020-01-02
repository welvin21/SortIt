const speed = (state = 480, action) => {
  switch(action.type){
    case 'CHANGE_SPEED':
      return (state = action.payload.speed);
    default: 
      return state;
  }
}

export default speed;