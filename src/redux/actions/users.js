import getUserDataList from 'services/getUserDataList'
import {
   USER_DATA_LIST_FETCH,
   USER_DATA_LIST_UPDATE,
   USER_DATA_LIST_FETCH_ERROR,
   ERROR_FETCHING_USERS,
} from 'reduxConstants/users'

export const updateUsers = () => {
   return (dispatch) => {
      dispatch(userDataListFetch())
      getUserDataList().then((response) => {
         if(response.status == 200) {
            dispatch(updateUserDataList(sortByName(response.data)))
         } else {
            dispatch(userDataListFetchError(ERROR_FETCHING_USERS))
         }
      })
   }
}

const sortByName = (list) => (list.sort(comparator))

const comparator = (item1, item2) => (item2.name <= item1.name)

const userDataListFetch = () => ({
   type: USER_DATA_LIST_FETCH
})
const updateUserDataList = (list) => ({
   type: USER_DATA_LIST_UPDATE,
   list
})
const userDataListFetchError = (error) => ({
   type: USER_DATA_LIST_FETCH_ERROR,
   error
})
