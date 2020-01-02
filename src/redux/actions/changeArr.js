const changeArr = arr => {
  return({
    type: 'CHANGE_ARRAY',
    payload: {arr}
  });
}

export default changeArr;