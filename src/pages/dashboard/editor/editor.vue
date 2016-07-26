<template src="./editor.html"></template>
<script>
	import { editNote } from '../../../vuex/actions.js'
	export default {
		vuex: {
			getter: {
				activeNoteText: state => state.activeNote.text
			},
			actions: {
				editNote
			}
		}
	}
</script>
<style lang="scss" src="./editor.scss"></style>