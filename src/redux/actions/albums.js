import getAlbums from 'services/getAlbums'
import {
   ALBUM_LIST_FETCH,
   ALBUM_LIST_UPDATE,
   ALBUM_LIST_FETCH_ERROR,
   ERROR_FETCHING_ALBUMS,
   TOGGLE_SHOW_ALBUMS
} from 'reduxConstants/albums'
import { CLOSE_SHOW_COMMENTS } from 'reduxConstants/comments'

export const updateAlbums = () => {
   return (dispatch) => {
      dispatch(albumsFetch())
      getAlbums().then((response) => {
         if(response.status == 200) {
            dispatch(updateAlbumList(response.data))
         } else {
            dispatch(albumsFetchError(ERROR_FETCHING_ALBUMS))
         }
      })
   }
}

export const toggleAlbumDisplay = () => {
   return (dispatch) => {
      dispatch(closeComments())
      dispatch(toggleShowAlbums())
   }
}

const albumsFetch = () => ({
   type: ALBUM_LIST_FETCH
})

const toggleShowAlbums = () => ({
   type: TOGGLE_SHOW_ALBUMS
})

const closeComments = () => ({
   type: CLOSE_SHOW_COMMENTS
})

const updateAlbumList = (list) => ({
   type: ALBUM_LIST_UPDATE,
   list
})
const albumsFetchError = (error) => ({
   type: ALBUM_LIST_FETCH_ERROR,
   error
})
