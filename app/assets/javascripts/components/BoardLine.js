import React from "react"

const BoardLine = ({id, title,active, onClick}) => {
  let cssact = active ? "active" : ""

  return (
    <div className="bline">
      <label className={"id " + cssact}>{id}</label>
      <label className={"title " + cssact}>{title}</label>
      <button onClick={() => onClick()}>選択</button>
    </div>

  )
}

export default BoardLine
