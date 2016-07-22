<template src='./header.html'>
</template>
<script>
import auth from '../../services/auth'
	export default {
		data() {
			return {
				user: auth.user
			}
		},
		methods: {
			logout: function() {
				auth.logout()
			}
		}
	}
</script>
<style lang="scss" src='./header.scss' scoped>
	
</style>