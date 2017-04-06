export const board_select = (id) => {
  return {
    type: "BOARD_SELECT",
    id: id
  }
}

export const comment_read = (comments) => {
  return {
    type: "COMMENT_READ",
    comments: comments
  }
}
