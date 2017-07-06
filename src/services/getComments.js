import axios from 'axios'

const getComments = () => {
  const URL = `https://jsonplaceholder.typicode.com/comments?postId=1`
  return axios.get(URL)
}

export default getComments
