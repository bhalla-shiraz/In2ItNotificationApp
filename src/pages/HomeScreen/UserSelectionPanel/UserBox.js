import React, { PropTypes } from 'react'
import Styles from './styles'

const UserBox = (props) => {
   const { userData, updateSelectedUserList } = props
   const { name, email, id } = userData

   return (
      <div style={Styles.userBox}>
         <div style={Styles.userSelect}>
            <input
               type='checkbox'
               name='user'
               value={id}
               onClick={(event) => updateSelectedUserList(event.target.checked, event.target.value, name)}
            />
         </div>
         <div style={Styles.userInfo}>
            <div style={Styles.userName}> {name} </div>
            <div style={Styles.userEmail}> {email} </div>
         </div>
      </div>
   )
}

UserBox.propTypes = {
   userData: PropTypes.object,
   props: PropTypes.object,
   updateSelectedUserList: PropTypes.func,
}
export default UserBox
