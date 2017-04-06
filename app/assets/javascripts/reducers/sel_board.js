const sel_board = (state=-1, action)=> {

  switch (action.type) {
    case "BOARD_SELECT":
      return action.id
    default:
      return state
  }

}

export default sel_board
