<template>
	<div class="container">
		<h1 class="heading">Colors</h1>
		<h2>Text Classes</h2>

		<div class="text grid thirds">
			<div class="text-dark">text-dark</div>
			<div class="text-light">text-light</div>
			<div class="text-muted">text-muted</div>
			<div class="text-secondary">text-secondary</div>
			<div class="text-primary">text-primary</div>
			<div class="text-primary">text-success</div>
			<div class="text-danger">text-danger</div>
			<div class="text-info">text-info</div>
			<div class="text-warning">text-warning</div>
		</div>

		<h2>Backgrounds</h2>

		<div class="backgrounds grid thirds">
			<div class="bg-dark rounded text-light">bg-dark</div>

			<div class="bg-light rounded">bg-light</div>

			<div class="bg-muted rounded">bg-light</div>

			<div class="bg-primary rounded">bg-primary</div>

			<div class="bg-secondary rounded text-white">bg-secondary</div>

			<div class="bg-success rounded">bg-success</div>

			<div class="bg-danger rounded">bg-danger</div>

			<div class="bg-info rounded">bg-info</div>

			<div class="bg-warning rounded">bg-info</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Colors"
};
</script>

<style lang="scss" scoped>
	@import "sudosass";
	.text {
		font-size: 1.25em;
		text-align: center;
		@include margin-bottom(3em);
		font-weight: bold;
	}
	.backgrounds {
		@include margin-bottom(3em);
		div {
			align-self: center;
			text-align: center;
			@include padding-y(2em);
		}
	}
</style>
