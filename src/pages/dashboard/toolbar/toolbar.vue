<template src="./toolbar.html"></template>
<script>
	import { addNote, deleteNote, toggleFavorite } from "../../../vuex/actions.js"
	export default {
		vuex: {
			getter: {
				activeNote: function(state) {
					return state.acitveNote
				}
			},
			actions: {
				addNote,
				deleteNote,
				toggleFavorite
			}
		}
	}
</script>
<style lang="scss" src="./toolbar.scss"></style>