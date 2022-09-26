import { api } from '../ServiceHelpers'

export const createAnime = async () => {
  await api.post('/anime', {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    year: document.getElementById('year').value,
    description: document.getElementById('description').value,
    price: document.getElementById('price').value
  })
}
