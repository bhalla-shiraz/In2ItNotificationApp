import React, { PropTypes } from 'react'
import Styles from './styles'

const SelectedCount = ({ count, total }) => {

   return (
      <div style={Styles.selectedCount}>
         {(count > 0) ? `${count} of ${total} selected` : ''}
      </div>
   )
}

SelectedCount.propTypes = {
   count: PropTypes.number,
   total: PropTypes.number,
}
export default SelectedCount
