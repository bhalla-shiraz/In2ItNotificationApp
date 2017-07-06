import React, { PropTypes } from 'react'
import Style from './styles'

const CommentBox = ({ data }) => {
   return (
   <div style={Style.commentBox}>
      <div style={Style.userInfo}>
         <div style={Style.commentEmail}>{data.email}</div>
         <div style={Style.info}>{data.name}</div>
      </div>
      <div style={Style.date}>{'Apr 20'}</div>
   </div>)
}

const CommentList = ({ list }) => {
   return (
      <div style={Style.commentList}>
         {list.map((data) => <CommentBox key={data.id} data={data} />)}
      </div>
   )
}

CommentList.propTypes = {
   list: PropTypes.array,
}

CommentBox.propTypes = {
   data: PropTypes.object,
}
export default CommentList
