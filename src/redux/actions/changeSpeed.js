const changeSpeed = speed => {
  return({
    type: 'CHANGE_SPEED',
    payload: {speed}
  });
}

export default changeSpeed;