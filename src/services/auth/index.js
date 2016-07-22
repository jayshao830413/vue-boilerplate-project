import {router} from '../../main'

// URL and endpoint constants
const API_URL = '/api/'
const LOGIN_URL = API_URL + 'login'
const SIGNUP_URL = API_URL + 'users/'

export default {
  // User object will let us check authentication status
  user: {
    authenticated: false,
    name: ''
  },

  // Send a request to the login URL and save the returned JWT
  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds).then((data) => {
      var auth_token = JSON.parse(data.body).auth_token
      var userinfo = JSON.parse(data.body).user
      localStorage.setItem('auth_token', auth_token)
      localStorage.setItem('current_user', userinfo)
      this.user.authenticated = true
      this.user.name = userinfo.name
      if (redirect) {
        router.go(redirect)
      }
    }, (err) => {
      // error callback
      context.error = err
    })
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds).then((data) => {
      var auth_token = JSON.parse(data.body).auth_token;
      localStorage.setItem('auth_token', auth_token)
      this.user.authenticated = true

      if (redirect) {
        router.go(redirect)
      }
    }, (err) => {
      context.error = err
    })
  },

  logout() {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('current_user')
    this.user.authenticated = false
    router.go('login')
  },

  checkAuth() {
    var jwt = localStorage.getItem('auth_token')
    if (jwt) {
      this.user.authenticated = true
      return true
    } else {
      this.user.name = ''
      this.user.authenticated = false
      return false
    }
  },

  // The object to be passed as a header for authentication requests
  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
    }
  }
}
