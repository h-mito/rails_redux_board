import React from "react"

const CommentAdd = ({users, sel_board, onAddComment}) => {
  let ulist = []
  let inpCom,inpUser

  users.map((u) => {
    ulist.push(<option key = {u.id} value={u.id}>{u.name}</option>)
  })

  return (
    <div className="cadd">
      <select ref={(node) => {inpUser=node}}>
        {ulist}
      </select>
      <br />
      <textarea rows="4" ref={(node) => {inpCom = node}} />
      <button onClick={(e) => {
        if (inpCom.value.trim() == ""){
          return
        }

        if (sel_board == -1){
          alert("掲示板を選択してください")
          return
        }

        onAddComment(sel_board, inpUser.value, inpCom.value)
        inpCom.value = ""
      }}>投稿</button>
    </div>
  )
}

export default CommentAdd
