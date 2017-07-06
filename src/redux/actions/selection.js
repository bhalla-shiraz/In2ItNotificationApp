import {
   USER_SELECTION_LIST_UPDATE_ON_SELECTION,
   USER_SELECTION_LIST_UPDATE_ON_DESELECTION,
} from 'reduxConstants/selection'

export const updateSelectedUserList = (selected, id, name) => {
   return (dispatch) => {
      (selected) ? dispatch(updateListOnSelection(id, name)) : dispatch(updateListOnDeselection(id))
   }
}

const updateListOnSelection = (id, name) => ({
   type: USER_SELECTION_LIST_UPDATE_ON_SELECTION,
   id,
   name,
})

const updateListOnDeselection = (id) => ({
   type: USER_SELECTION_LIST_UPDATE_ON_DESELECTION,
   id,
})
