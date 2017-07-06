import getComments from 'services/getComments'
import {
   COMMENT_LIST_FETCH,
   COMMENT_LIST_UPDATE,
   COMMENT_LIST_FETCH_ERROR,
   ERROR_FETCHING_COMMENTS,
   TOGGLE_SHOW_COMMENTS,
} from 'reduxConstants/comments'
import { CLOSE_SHOW_ALBUMS } from 'reduxConstants/albums'

export const updateComments = () => {
   return (dispatch) => {
      dispatch(commentListFetch())
      getComments().then((response) => {
         if(response.status == 200) {
            dispatch(updateCommentList(response.data))
         } else {
            dispatch(commentListFetchError(ERROR_FETCHING_COMMENTS))
         }
      })
   }
}

export const toggleCommentDisplay = () => {
   return (dispatch) => {
      dispatch(closeAlbums())
      dispatch(toggleShowComments())
   }
}

const commentListFetch = () => ({
   type: COMMENT_LIST_FETCH
})

const closeAlbums = () => ({
   type: CLOSE_SHOW_ALBUMS
})

const toggleShowComments = () => ({
   type: TOGGLE_SHOW_COMMENTS
})

const updateCommentList = (list) => ({
   type: COMMENT_LIST_UPDATE,
   list
})
const commentListFetchError = (error) => ({
   type: COMMENT_LIST_FETCH_ERROR,
   error
})
