import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateUsers } from 'actions/users'
import { confirmUserSubmission } from 'actions/confirmation'
import UserSelectionPanel from './UserSelectionPanel'
import SelectedCount from './SelectedCount'
import SelectedUserList from './SelectedUserList'


class HomeScreen extends Component {
   componentWillMount() {
      const { updateUsers } = this.props
      updateUsers()
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
                     onClick={confirmUserSubmission}
                     primary
                     style={{margin: '3vh 21vw'}}
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
}

HomeScreen.propTypes = {
   updateUsers: PropTypes.func,
   count: PropTypes.number,
   total: PropTypes.number,
   confirmation: PropTypes.bool,
   selectedUsers: PropTypes.array,
   confirmUserSubmission: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
