import {
   COMMENT_LIST_FETCH,
   COMMENT_LIST_UPDATE,
   COMMENT_LIST_FETCH_ERROR,
   TOGGLE_SHOW_COMMENTS,
   CLOSE_SHOW_COMMENTS,
} from 'reduxConstants/comments'

const initialState = {
   list: [],
   open: false,
   isFetching: false,
   error: false,
}

const comments = (state = initialState, action) => {
   switch(action.type) {
      case COMMENT_LIST_FETCH:
         return {
            ...state,
            isFetching: true
         }
      case COMMENT_LIST_UPDATE:
         return {
            ...state,
            list: action.list,
            isFetching: false,

         }
      case COMMENT_LIST_FETCH_ERROR:
         return {
            ...state,
            error: action.error
         }
      case TOGGLE_SHOW_COMMENTS:
         return {
            ...state,
            open: !state.open
         }
      case CLOSE_SHOW_COMMENTS:
         return {
            ...state,
            open: false
         }
      default:
         return state
   }
}

export default comments
