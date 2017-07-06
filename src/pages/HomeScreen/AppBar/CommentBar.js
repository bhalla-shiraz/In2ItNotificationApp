import React, { PropTypes } from 'react'
import Style from './styles'

const CommentBar = ({ toggle, data }) => {
   return (
      <div>
         <button
            style={Style.barIcon}
            onClick={()=>{toggle()}}
            >{'Comments'}
         </button>
         {(data.open) ? <div style={Style.commentList} /> : ''}
      </div>
   )
}

CommentBar.propTypes = {
   toggle: PropTypes.func,
   data: PropTypes.object,
}

export default CommentBar
