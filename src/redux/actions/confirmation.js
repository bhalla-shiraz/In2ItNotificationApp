import {
   CONFIRM_SUBMISSION,
} from 'reduxConstants/confirmation'

export const confirmUserSubmission = () => {
   return (dispatch) => {
      dispatch(confitmation())
   }
}

const confitmation = () => ({
   type: CONFIRM_SUBMISSION
})
