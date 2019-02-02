import Vue from "vue";
import Vuex from "vuex";
import SidebarOpen from "#/Sidebar/SidebarOpen";
import SidebarClose from "#/Sidebar/SidebarClose";
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		title: "SudoSass",
		sidebarOpen: false,
		sidebarComponent: SidebarOpen,
		pages: [
			{ path: "/", name: "Home" },
			{ path: "/docs", name: "Docs" },
			{ path: "/setup", name: "Get Started" },
			{ path: "/help", name: "Help" },
		],
		demos: [
			{ path: "buttons", name: "Buttons" },
			{ path: "tards", name: "Cards" },
			{ path: "tolors", name: "Colors" },
			{ path: "tontainers", name: "Containers" },
			{ path: "grid", name: "Grid" },
			{ path: "typography", name: "Typography" }
		]
	},
	getters: {
		sidebarOpen: state => state.sidebarOpen,
		pageCount: state => {
			return state.pages.length;
		}
	},
	mutations: {
		TOGGLE_SIDEBAR: (state) => {
			state.sidebarOpen = !state.sidebarOpen
			if (state.sidebarOpen) {
				state.sidebarComponent = SidebarClose
			}
			if (!state.sidebarOpen) {
				state.sidebarComponent = SidebarOpen
			}

		}
	},
	actions: {
		toggleSidebar({ commit, state }) {
			commit(types.TOGGLE_SIDEBAR)
		}
	}
})