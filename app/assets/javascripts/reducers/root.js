import {combineReducers} from "redux"
import boards from "./boards"
import users from "./users"
import sel_board from "./sel_board"
import comments from "./comments"

const rootReducer = combineReducers({
  boards: boards,
  users: users,
  sel_board: sel_board,
  comments: comments
})

export default rootReducer
