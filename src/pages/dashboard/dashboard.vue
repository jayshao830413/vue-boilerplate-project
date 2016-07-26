<template src="./dashboard.html"></template>
<script>
	import Toolbar from './toolbar/toolbar.vue'
	import NotesList from './notelist/note-list.vue'
	import Editor from './editor/editor.vue'
	export default {
		components: {
			Toolbar,
			NotesList,
			Editor
		},
		data() {
			return {}
		},
		ready() {
			
		}
	}
</script>
<style lang="scss" src="./dashboard.scss"></style>