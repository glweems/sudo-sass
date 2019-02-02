<template>
	<div class="sidebar">
		<div class="header">
			<p>Sidebar Header</p>
			<button @click="toggleSidebar()">Open</button>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
	name: "SidebarClose",
	methods: {
		...mapMutations(["TOGGLE_SIDEBAR"]),
		toggleSidebar() {
			this.TOGGLE_SIDEBAR(this.state);
		}
	},
	computed: {
		...mapState(["sidebarOpen"])
	}
};
</script>

<style lang="scss" scoped>
	@import "~sudosass/scss/app.scss";
	.sidebar {
		width: 5em;
		height: 100%;
		@include background(light);
	}
</style>