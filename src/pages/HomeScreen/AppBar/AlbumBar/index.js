import React, { PropTypes } from 'react'
import AlbumList from './AlbumList'
import Style from './styles'

const AlbumBar = ({ toggle, data }) => {
   return (
      <div>
         <button
            style={Style.barIcon}
            onClick={()=>{toggle()}}
         >
         <i className="fa fa-user" aria-hidden />
         </button>
         {(data.open) ? <AlbumList list={data.list} /> : ''}
      </div>
   )
}

AlbumBar.propTypes = {
   toggle: PropTypes.func,
   data: PropTypes.object,
}

export default AlbumBar
