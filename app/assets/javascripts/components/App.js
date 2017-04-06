import React from "react"
import CBoardList from "../containers/CBoardList"
import CCommentAdd from "../containers/CCommentAdd"
import CCommentList from "../containers/CCommentList"

const App = ({}) => {
  return (
    <div>
      <div className="left-side">
        <CBoardList />
      </div>
      <div className="right-side">
        <CCommentAdd />
        <CCommentList />

      </div>
    </div>
  )
}

export default App
