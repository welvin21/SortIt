const changeSortingStatus = status => {
  return({
    type: {status} ? 'CHANGE_SORTING_STATUS' : 'FLIP_SORTING_STATUS',
    payload: {status}
  });
}

export default changeSortingStatus;