const comments = (state=[], action) => {
  if (action.comments == undefined) {
    return []
  }
  else {
    return action.comments
  }
}

export default comments
