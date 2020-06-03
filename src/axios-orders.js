import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-builder-fc801.firebaseio.com/',
})

export default instance
