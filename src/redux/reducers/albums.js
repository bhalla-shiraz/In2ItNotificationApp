import {
   ALBUM_LIST_FETCH,
   ALBUM_LIST_UPDATE,
   ALBUM_LIST_FETCH_ERROR,
   TOGGLE_SHOW_ALBUMS,
   CLOSE_SHOW_ALBUMS,
} from 'reduxConstants/albums'

const initialState = {
   list: [],
   open: false,
   isFetching: false,
   error: false,
}

const albums = (state = initialState, action) => {
   switch(action.type) {
      case ALBUM_LIST_FETCH:
         return {
            ...state,
            isFetching: true
         }
      case ALBUM_LIST_UPDATE:
         return {
            ...state,
            list: action.list,
            isFetching: false,

         }
      case ALBUM_LIST_FETCH_ERROR:
         return {
            ...state,
            error: action.error
         }
      case TOGGLE_SHOW_ALBUMS:
         return {
            ...state,
            open: !state.open
         }
      case CLOSE_SHOW_ALBUMS:
         return {
            ...state,
            open: false
         }
      default:
         return state
   }
}

export default albums
