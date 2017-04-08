import React from "react"
import CBoardList from "../containers/CBoardList"
import CCommentAdd from "../containers/CCommentAdd"
import CCommentList from "../containers/CCommentList"

const App = ({boards, users}) => {
  return (
    <div>
      <div className="left-side">
        <CBoardList boards={boards} />
      </div>
      <div className="right-side">
        <CCommentAdd users={users} />
        <CCommentList />

      </div>
    </div>
  )
}

export default App
