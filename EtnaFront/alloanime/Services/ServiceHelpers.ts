import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 10000,
  headers: {
    accept: 'application/json'
  }
})
