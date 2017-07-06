import React, { PropTypes } from 'react'
import Style from './styles'

const SelectedUserTile = ({ user }) => (<div>{user.name}</div>)

const SelectedUserList = ({ list }) => (
   <div
      style={Style.selectedUserList}
   >
   <div style={Style.heading}>{'Selected Users are:'}</div>
   {(list.length) ?
   list.map((user) => <SelectedUserTile key={user.id} user={user} />)
   :
   <div style={Style.note}>{'No Users Selected'}</div>}
   </div>
)

SelectedUserList.propTypes = {
   list: PropTypes.array,
}

SelectedUserTile.propTypes = {
   user: PropTypes.object,
}

export default SelectedUserList
