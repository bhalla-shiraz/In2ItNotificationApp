import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateAlbums } from 'actions/albums'
import { updateComments } from 'actions/comments'
import { updateUsers } from 'actions/users'
import { confirmUserSubmission } from 'actions/confirmation'
import AppBar from './AppBar'
import UserSelectionPanel from './UserSelectionPanel'
import SelectedCount from './SelectedCount'
import SelectedUserList from './SelectedUserList'
import Style from './styles'

class HomeScreen extends Component {
   componentWillMount() {
      const {
         updateUsers,
         updateAlbums,
         updateComments,
      } = this.props

      updateUsers()
      updateAlbums()
      updateComments()
   }
   render() {
      const {
         count,
         total,
         confirmation,
         selectedUsers,
         confirmUserSubmission,
      } = this.props

      return (
         <div>
            <AppBar />
            {(confirmation)
            ?
             <SelectedUserList list={selectedUsers} />
             :
             <div>
               <SelectedCount
                  count={count}
                  total={total}
                  list={selectedUsers}
               />
               <UserSelectionPanel />
               <span
                  style={{margin: '3vh 35vw'}}
               > {'The Above List is Scrollable'} </span>
                  <button
                     style={Style.confirmButton}
                     onClick={confirmUserSubmission}
                     primary
                  >{'Confirm'}</button>
            </div>
          }

         </div>
      )
   }
}

const mapStateToProps = (state) => {
   const count = state.selection.users.length
   const total = state.users.list.length
   return {
      count,
      total,
      confirmation: state.confirmation,
      selectedUsers: state.selection.users,
   }
}
const mapDispatchToProps = {
   updateUsers,
   confirmUserSubmission,
   updateAlbums,
   updateComments,
}

HomeScreen.propTypes = {
   updateUsers: PropTypes.func,
   count: PropTypes.number,
   total: PropTypes.number,
   confirmation: PropTypes.bool,
   selectedUsers: PropTypes.array,
   confirmUserSubmission: PropTypes.func,
   updateAlbums: PropTypes.func,
   updateComments: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
