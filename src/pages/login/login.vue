<template src="./login.html"></template>
<script>
	import auth from '../../services/auth'
	import { userLogin } from '../../vuex/actions'
	
	export default {
		data() {
			return {
				formIsInvalid: false,
				loginUser: {
					username: '',
					password: ''
				}
			}
		},
		vuex: {
			actions: {
				loggedInUser: userLogin 
			}
		},
		ready: function() {
			console.log("ready");
		},
		methods: {
			onLogin: function() {
				var self = this
				debugger
				if(self.$loginValidation.invalid) {
					self.formIsInvalid = true;
				} else {
					self.formIsInvalid = false;
					var credentials = {
						username: this.loginUser.username,
						password: this.loginUser.password
					}
					// form is valid so confinue on your work
					auth.login(this, credentials, 'dashboard')
				}
			}
		} 
	}
</script>
<style lang="scss" src="./login.scss"></style>