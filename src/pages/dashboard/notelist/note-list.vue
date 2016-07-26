<template src="./note-list.html">
	
</template>
<script>
	import { updateActiveNote } from '../../../vuex/actions.js'
	export default {
		data () {
			return {
				show: 'all'
			}
		},
		vuex: {
			getters: {
				notes: state => state.notes,
				activeNote: state => state.activeNote
			},
			actions: {
				updateActiveNote
			}
		},
		computed: {
			filteredNotes () {
				if (this.show === 'all') {
					return this.notes
				} else if (this.show === 'favorites') {
					return this.notes.filter(note => note.favorite)
				}
			}
		}
	}
</script>
<style lang="scss" src="./note-list.scss"></style>