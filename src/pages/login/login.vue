<template src="./login.html"></template>
<script>
	import auth from '../../services/auth'
	
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
		ready: function() {
			console.log("ready");
		},
		methods: {
			onLogin: function() {
				var self = this;
				if(self.$loginValidation.invalid) {
					self.formIsInvalid = true;
				} else {
					self.formIsInvalid = false;
					var credentials = {
						username: this.loginUser.username,
						password: this.loginUser.password
					}
					// form is valid so confinue on your work
					auth.login(this, credentials, 'secretquote')
				}
			}
		} 
	}
</script>
<style lang="scss" src="./login.scss"></style>