<template src="./login.html"></template>
<script>
	export default {
		data() {
			return {
				formIsInvalid: false,
				loginUser: {}
			}
		},
		created: function() {
			console.log("created");
		},
		methods: {
			onLogin: function() {
				var self = this;
				if(self.$loginValidation.invalid) {
					self.formIsInvalid = true;
				} else {
					self.formIsInvalid = false;
					// form is valid so confinue on your work
				}
			}
		} 
	}
</script>
<style lang="scss" src="./login.scss"></style>