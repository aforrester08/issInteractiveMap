const baseURL = 'http://localhost:3000/api/icons'

export default {
  getIcons() {
    return fetch(baseURL)
    .then(res => res.json())
  }
}
