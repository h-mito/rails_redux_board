import React from "react"
import {connect} from "react-redux"
import {board_select, comment_read} from "../actions/index"
import BoardList from "../components/BoardList"

const mapStateToProps = (state, ownProps) =>{
  return {
    datas: ownProps.boards,
    selb: state.sel_board
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBoardClick: (id) => {
      dispatch(board_select(id))

      $.ajax({
         type: "GET",
         url: "/board/readComments/" + id,
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
  }
}

const CBoardList = connect(mapStateToProps,mapDispatchToProps)(BoardList)

export default CBoardList
