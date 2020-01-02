const changeFrames = frames => {
  return({
    type: 'CHANGE_FRAMES',
    payload: {frames}
  });
}

export default changeFrames;