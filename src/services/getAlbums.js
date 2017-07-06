import axios from 'axios'

const getAlbums = () => {
  const URL = `https://jsonplaceholder.typicode.com/photos?albumId=1`
  return axios.get(URL)
}

export default getAlbums
