const changeAlgo = algo => {
  return({
    type: 'CHANGE_ALGO',
    payload: {algo}
  });
}

export default changeAlgo;