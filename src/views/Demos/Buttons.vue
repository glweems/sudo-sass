<template>
	<div class="container-fluid">
		<h1 class="heading">Buttons</h1>
		<div class="container">
			<div class="buttons">
				<button>Click</button>
				<button class="primary">Click</button>
				<button class="light">Click</button>
				<button class="dark">Click</button>
				<button class="secondary">Click</button>
				<button class="muted">Click</button>
				<button class="danger">Click</button>
				<button class="warning">Click</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		justify-content: space-between;
		.buttons {
			display: inline-flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
	}
</style>