import axios from 'axios'

export const kelliapi = axios.create({
  baseURL: 'http://localhost:3045'
})