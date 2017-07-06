import React, { PropTypes } from 'react'
import CommentList from './CommentList'
import Style from './styles'

const CommentBar = ({ toggle, data }) => {
   return (
      <div>
         <button
            style={Style.barIcon}
            onClick={()=>{toggle()}}>
            <i className="fa fa-commenting" aria-hidden="true" />
         </button>
         {(data.open) ? <CommentList list={data.list}/> : ''}
      </div>
   )
}

CommentBar.propTypes = {
   toggle: PropTypes.func,
   data: PropTypes.object,
}

export default CommentBar
