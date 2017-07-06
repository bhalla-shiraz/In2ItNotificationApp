import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateSelectedUserList } from 'actions/selection'
import UserBox from './UserBox'
import Styles from './styles'

class UserSelectionPanel extends Component {

   render() {
      const { userList, updateSelectedUserList } = this.props
      return (
         <div style={Styles.userSelectionPanel}>
            {userList.map((userData) =>
               <UserBox
                  key={userData.id}
                  userData={userData}
                  updateSelectedUserList={(selected, id, name) => updateSelectedUserList(selected, id, name)}
               />)
            }
         </div>
      )
   }
}

const mapStateToProps = (state) => ({
   userList: state.users.list,
})
const mapDispatchToProps = {
   updateSelectedUserList,
}

UserSelectionPanel.propTypes = {
   userList: PropTypes.array,
   updateSelectedUserList: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSelectionPanel)
