import API from '../API'
const listeners = []

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(API.TOKEN_KEY, token)
  },
  saveUserId(userId) {
    window.localStorage.setItem(API.USER_ID, userId)
    listeners.forEach(f => f())
  },
  onChange(f) {
    listeners.push(f)
  },
  getUserId() {
    return window.localStorage.getItem(API.USER_ID)
  },
  getAuthToken() {
    return window.localStorage.getItem(API.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(API.TOKEN_KEY)
    listeners.forEach(f => f())
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userEmail, password) {
    return window.btoa(`${userEmail}:${password}`)
  },
}

export default TokenService