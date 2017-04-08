import {combineReducers} from "redux"
import sel_board from "./sel_board"
import comments from "./comments"

const rootReducer = combineReducers({
  sel_board: sel_board,
  comments: comments
})

export default rootReducer
