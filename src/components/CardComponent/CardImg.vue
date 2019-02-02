<template>
	<div class="card-img">
		<img :src="img" class="card-img">
	</div>
</template>

<script>
export default {
	name: "CardImg",
	props: {
		img: {
			type: String,
			required: true,
			default: require("@/assets/logo.png")
		}
	}
};
</script>

<style scoped>
</style>