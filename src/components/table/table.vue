<template src='./table.html'>
	
</template>
<script type="text/javascript">
	export default {
		props: {
	    data: Array,
	    columns: Array,
	    filterKey: String
	  },
	  data: function () {
	    var sortOrders = {}
	    this.columns.forEach(function (key) {
	      sortOrders[key] = 1
	    })
	    return {
	      sortKey: '',
	      sortOrders: sortOrders
	    }
	  },
	  methods: {
	    sortBy: function (key) {
	      this.sortKey = key
	      this.sortOrders[key] = this.sortOrders[key] * -1
	    }
	  }
	}
</script>
<style lang="scss" src="./table.scss" scoped>
	
</style>