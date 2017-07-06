import {
   USER_DATA_LIST_FETCH,
   USER_DATA_LIST_UPDATE,
   USER_DATA_LIST_FETCH_ERROR,
} from 'reduxConstants/users'

const initialState = {
   list: [],
   isFetching: false,
   error: false,
}

const users = (state = initialState, action) => {
   switch(action.type) {
      case USER_DATA_LIST_FETCH:
         return {
            ...state,
            isFetching: true
         }
      case USER_DATA_LIST_UPDATE:
         return {
            ...state,
            list: action.list,
            isFetching: false,

         }
      case USER_DATA_LIST_FETCH_ERROR:
         return {
            ...state,
            error: action.error
         }
      default:
         return state
   }
}

export default users
