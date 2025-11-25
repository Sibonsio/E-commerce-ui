import axios from 'axios'

const baseURL = { baseURL: 'http://localhost:5005/api' }
const instance = axios.create(baseURL)
export default instance