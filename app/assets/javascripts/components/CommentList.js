import React from "react"
import CommentLine from "./CommentLine"

const CommentList = ({comments}) => {
  let list = []
  comments.map( (c) => {
    list.push(<CommentLine
      key={c.id}
      id={c.id}
      user_id={c.user.id}
      name={c.user.name}
      sex={c.user.sex}
      age={c.user.age}
      comment={c.comment}
    />)
  })

  return (
    <div className="clist">
      {list}
    </div>
  )
}

export default CommentList
