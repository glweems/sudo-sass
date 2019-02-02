import Vue from "vue";
import App from "@/App";
import Vuex from 'vuex'
import router from "@/router";
import store from "store";

Vue.use(Vuex)

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
