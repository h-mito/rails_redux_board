import React from "react"
import BoardLine from "./BoardLine"

const BoardList = ({datas, selb, onBoardClick}) => {
  let list = []

  datas.map((b) => {
    let active = (b.id == selb)

    list.push(<BoardLine
                key={b.id}
                id={b.id}
                title={b.title}
                active={active}
                onClick={() => onBoardClick(b.id)}
              />)
  })

  return (
    <div>
      {list}
    </div>
  )
}

export default BoardList
