// import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Login from './pages/login/login'
import Dashboard from './pages/dashboard/dashboard'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'
import FontAwesomeWebpack from 'font-awesome-webpack'
import Auth from './services/auth'

Vue.use(VueResource)
Vue.use(VueValidator)
Vue.use(VueRouter)
// Vue.http.options.root = '/api';

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
export var router = new VueRouter({
	history: false,
	root: '/login'
})

router.beforeEach(function (transition) {
	//check is refresh
	if(transition.to.name === "login") {
		if(!Auth.checkAuth()) {
			transition.next()
		} else {
			transition.abort()
		}
	} else {
		if(!Auth.checkAuth()) {
			transition.redirect('/login')
		} else {
			transition.next()
		}
	}
})

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
	'/login': {
		name: 'login',
		component: Login,
		auth: true
	},
	'/dashboard': {
		name: 'dashboard',
		component: Dashboard,
		auth: true
	}
})

router.redirect({
	'*': '/login'
})



// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app')
