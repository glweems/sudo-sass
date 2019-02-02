import Vue from "vue";
import NavbarComponent from "#/NavbarComponent/NavbarComponent";
import CardComponent from "#/CardComponent/CardCompoent"

const Components = {
	NavbarComponent,
	CardComponent
};

Object.keys(Components).forEach(name => {
	Vue.component(name, Components[name]);
});

export default Components;