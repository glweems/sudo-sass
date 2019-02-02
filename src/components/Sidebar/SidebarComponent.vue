<template>
	<div class="sidebar">
		<div class="header">
			<p>Sidebar Header</p>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
	name: "SidebarComponent",

	computed: {
		...mapState(["demos"])
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