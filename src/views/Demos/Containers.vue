<template>
	<div>
		<h1 class="heading">Containers</h1>
		<div class="demo container bg-info">
			<h1>This is a container</h1>
		</div>
		<div class="container-fluid bg-warning">
			<div class="container">
				<h1>This is a fluid container.</h1>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "containers"
};
</script>

// <style lang="scss" scoped>
	// 	@import "../../node-packages/sudosass/scss/app.scss";

	// 	.demo {
	// 		@include margin-bottom;
	// 	}
	//
</style>
