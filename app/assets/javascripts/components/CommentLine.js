const CommentLine = ({user_id, name, age, sex, comment})=> {
  return (
    <div className="cline">
      <label className="name">{name}</label>
      <label className="age">{age}歳</label>
      <label className="sex">{sex == 1 ? "男性" : "女性"}</label>
      <div>
        <div className="icon">
          <img src={"../images/hito-" + user_id + ".jpg"} />
        </div>
        <div className="comment">
          {comment}
        </div>
      </div>
    </div>
  )
}

export default CommentLine
