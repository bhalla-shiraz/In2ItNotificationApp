import {
   USER_SELECTION_LIST_UPDATE_ON_SELECTION,
   USER_SELECTION_LIST_UPDATE_ON_DESELECTION
} from 'reduxConstants/selection'

const initialState = {
   users: [],
}

const selection = (state = initialState, action) => {
   switch(action.type) {
      case USER_SELECTION_LIST_UPDATE_ON_SELECTION:
         return {
            ...state,
            users: [ ...state.users, {
               id: action.id,
               name: action.name
            } ]
         }

      case USER_SELECTION_LIST_UPDATE_ON_DESELECTION:
         return {
            ...state,
            users: getListAfterDeselect(state, action.id)
         }

      default:
         return { ...state }
   }
}



const getListAfterDeselect = (state, id) => (state.users.filter((userId) => userId.id !== id))

export default selection
