<template>
	<div id="app">
		<NavbarComponent :pages="pages" logoText="SUDO" :between="true"/>
		<div class="layout">
			<SidebarComponent v-if="sidebarOpen"></SidebarComponent>
			<router-view class="content"/>
		</div>
	</div>
</template>

<script>
import SidebarComponent from "#/Sidebar/SidebarComponent";
import { mapState, mapMutations } from "vuex";
import routes from "@/router";
export default {
	name: "SudoSass",
	components: {
		SidebarComponent
	},
	methods: {},
	computed: {
		...mapState(["title", "pages", "sidebarOpen"])
	}
};
</script>


<style lang="scss">
	@import "~sudosass/scss/app.scss";
	.layout {
		display: flex;
		flex-direction: row;
		height: 93.5vh;
		.sidebar {
			display: flex;
			flex-direction: column;
			height: 100%;
			justify-self: start;
		}
		.content {
			// display: flex;
			// flex-direction: row;
			// justify-self: center;
			width: 100%;
			text-align: center;
		}
	}
</style>

