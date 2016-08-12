<template src="./dashboard.html"></template>
<script>
	import demoTable from '../../components/table/table'
	import child from '../../components/child/child'
	export default {
		components: {demoTable, child},
		data() {
			return {
				searchQuery: '',
				gridColumns: [],
				gridData: [],
				messages: []
			}
		},
		methods: {
			'handleIt': function(msg) {
				this.messages.push(msg)
			}
		},
		ready() {
			this.gridColumns = ['name', 'power']
			this.gridData = [
	      { name: 'Chuck Norris', power: Infinity },
	      { name: 'Bruce Lee', power: 9000 },
	      { name: 'Jackie Chan', power: 7000 },
	      { name: 'Jet Li', power: 8000 }
    	]
		}
	}
</script>
<style lang="scss" src="./dashboard.scss"></style>