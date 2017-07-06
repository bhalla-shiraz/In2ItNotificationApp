import React, { PropTypes } from 'react'
import Style from './styles'

const AlbumBox = ({ data }) => {
   return (
   <div style={Style.albumBox}>
      <div style={Style.userInfo}>
         <div style={{...Style.pic, backgroundImage: `url(${data.thumbnailUrl})`}} />
      </div>
      <div style={Style.info}>{data.title}</div>
   </div>)
}

const AlbumList = ({ list }) => {
   return (
      <div style={Style.albumList}>
         {list.map((data) => <AlbumBox key={data.id} data={data} />)}
      </div>
   )
}

AlbumList.propTypes = {
   list: PropTypes.array,
}

AlbumList.propTypes = {
   data: PropTypes.object,
}
export default AlbumList
