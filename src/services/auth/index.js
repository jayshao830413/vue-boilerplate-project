import { router } from '../../main'

// URL and endpoint constants
const API_URL = '/api/'
const LOGIN_URL = API_URL + 'login'
const SIGNUP_URL = API_URL + 'users/'

export default {
  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds).then((data) => {
      debugger;
      localStorage.setItem('id_token', data.id_token)
      this.user.authenticated = true;

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
      localStorage.setItem('id_token', data.id_token)
      this.user.authenticated = true
      if (redirect) {
        router.go(redirect)
      }
    }, (err) => {
      context.error = err
    })
  },

  logout() {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  // The object to be passed as a header for authentication requests
  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}
