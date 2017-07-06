import axios from 'axios'

const getUserDataList = () => {
  const URL = `https://jsonplaceholder.typicode.com/users`
  return axios.get(URL)
}

export default getUserDataList
