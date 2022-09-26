import { api } from '../ServiceHelpers'

export const fetchDataUsers = async () => {
  await api.post('users/login', {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  })
}

export const createUser = async () => {
  await api.post('/users/register', {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  })
}
