// import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Login from './pages/login/login'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'
import FontAwesomeWebpack from 'font-awesome-webpack'

Vue.use(VueResource)
Vue.use(VueValidator)
Vue.use(VueRouter)

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter({
	history: false,
	root: '/login'
})

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
	'/login': {
		name: 'login',
		component: Login
	},
})

router.redirect({
	'*': '/login'
})

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app')
