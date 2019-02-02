<template>
	<div class="card">
		<CardImg/>
		<div class="body">
			<p class="title">Default Card</p>
			<p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		</div>
		<button>Click</button>
	</div>
</template>

<script>
import CardImg from "#/CardComponent/CardImg";
export default {
	name: "CardComponent",
	props: {
		header: { type: String, required: false },
		title: { type: String, required: false },
		body: { type: String, required: false },
		footer: { type: String, required: false }
	},
	components: { CardImg }
};
</script>

<style scoped>
</style>