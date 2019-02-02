<template>
	<nav :class="navStyle()">
		<button class="primary" @click="toggleSidebar()">Sidebar</button>
		<router-link :to="homePage.path" class="logo">{{ logoText }}</router-link>
		<nav>
			<router-link v-for="page in pages" :key="page.name" :to="page.path">{{ page.name }}</router-link>
		</nav>
	</nav>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
	name: "NavbarComponent",
	props: {
		logo: { type: String, required: false },
		pages: {
			type: Array,
			require: true,
			default: [{ name: "Home", path: "/" }]
		},
		logoText: { type: String, required: false },
		between: { type: Boolean, default: false },
		sticky: { type: Boolean, default: false }
	},
	data() {
		return {
			homePage: this.pages[0]
		};
	},
	methods: {
		...mapMutations(["TOGGLE_SIDEBAR"]),
		toggleSidebar() {
			this.TOGGLE_SIDEBAR(this.state);
		},
		navStyle() {
			let style = "navbar";
			if (this.between) {
				style += " between";
			}
			if (this.sticky) {
				style += " sticky";
			}
			return style;
		},
		computed: {
			...mapState(["sidebarOpen"])
		}
	}
};
</script>

<style scoped>
</style>