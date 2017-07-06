import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleAlbumDisplay } from 'actions/albums'
import { toggleCommentDisplay } from 'actions/comments'
import CommentBar from './CommentBar'
import AlbumBar from './AlbumBar'
import Style from './styles'

class AppBar extends Component {

   render() {
      const {
         toggleCommentDisplay,
         toggleAlbumDisplay,
         albums,
         comments,
      } = this.props
      return (
         <div style={Style.appBar}>
            <AlbumBar data={albums} toggle={() => toggleAlbumDisplay()}/>
            <CommentBar data={comments} toggle={() => toggleCommentDisplay()} />
         </div>
      )
   }
}

const mapStateToProps = (state) => ({
   comments: state.comments,
   albums: state.albums,
})
const mapDispatchToProps = {
   toggleCommentDisplay,
   toggleAlbumDisplay,
}

AppBar.propTypes = {
   toggleCommentDisplay : PropTypes.func,
   toggleAlbumDisplay : PropTypes.func,
   comments: PropTypes.object,
   albums: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
