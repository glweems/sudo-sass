<template>
	<div class="sidebar">
		<div class="header">
			<p class="title">Docs</p>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
	name: "SidebarOpen",
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
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
		@include background(primary);
	}
</style>