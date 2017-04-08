import React from "react"
import {connect} from "react-redux"
import CommentAdd from "../components/CommentAdd"
import {comment_add, comment_read} from "../actions/index"

const mapStateToProps = (state, ownProps) => {
  return {
    users: ownProps.users,
    sel_board: state.sel_board
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddComment: (sel_board, user, cmt) => {
      //dispatch(comment_add(cmt))

      var data = {
        board_id: sel_board,
        user_id: user,
        comment: cmt
      };

      $.ajax({
         type: "POST",
         url: "/board/insertComment",
         async: false,
         dataType: "json",
         data: data,
         success: function(data, dataType){
           if (data.status == true){
             commentRead(sel_board, dispatch)
           }
         },
         error :function(XMLHttpRequest, textStatus, errorThrown){
         }
      });
    }
  }
}

const commentRead = (sel_board, dispatch) => {
  $.ajax({
     type: "GET",
     url: "/board/readComments/" + sel_board,
     async: false,
     dataType: "json",
     data: "name=John&location=Boston",
     success: function(data, dataType){
       if (data.status == true){
         //alert(data.rows.length);
         if (data.rows.length > 0){
           dispatch(comment_read(data.rows))
         }
         else{
           dispatch(comment_read([]))
         }
       }
     },
     error :function(XMLHttpRequest, textStatus, errorThrown){
     }
  });
}

const CCommentAdd = connect(mapStateToProps,mapDispatchToProps)(CommentAdd)

export default CCommentAdd
