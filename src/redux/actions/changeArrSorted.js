const changeArrSorted = arr => {
  return({
    type: 'CHANGE_ARR_SORTED',
    payload: {arr}
  });
}

export default changeArrSorted;