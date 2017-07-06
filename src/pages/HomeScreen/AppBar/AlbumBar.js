import React, { PropTypes } from 'react'
import Style from './styles'

const AlbumBar = ({ toggle, data }) => {
   return (
      <div>
         <button
            style={Style.barIcon}
            onClick={()=>{toggle()}}
         >
         {'Albums'}
         </button>
         {(data.open) ? <div style={Style.albumList} /> : ''}
      </div>
   )
}

AlbumBar.propTypes = {
   toggle: PropTypes.func,
   data: PropTypes.object,
}

export default AlbumBar
