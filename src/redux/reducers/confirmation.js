import {
   CONFIRM_SUBMISSION,
} from 'reduxConstants/confirmation'


const confirmation = (state = false, action) => {
   switch(action.type) {
      case CONFIRM_SUBMISSION:
         return true

      default:
         return state
   }
}

export default confirmation
