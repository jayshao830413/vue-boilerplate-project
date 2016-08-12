<template>
	<input v-model="msg">
	<button @click="notify">Dispatch Event</button>
</template>
<script>
	export default {
		data: function() {
			return { msg: 'hello' }
		},
		methods: {
			notify: function() {
				if (this.msg.trim()) {
					this.$dispatch('child-msg', this.msg)
					this.msg = ''
				}
			}
		}
	}
</script>
<style>
	
</style>