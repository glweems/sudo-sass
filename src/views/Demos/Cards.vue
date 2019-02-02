<template>
	<div>
		<CardComponent></CardComponent>
		<!-- Default Card -->
		<div class="card">
			<div class="body">
				<p class="title">Default Card</p>
				<p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
			<button>Click</button>
		</div>
		<!-- Card with header -->
		<div class="card">
			<div class="header">
				<h3>Card With Header</h3>
			</div>
			<div class="body">
				<p class="title">Card Title</p>
				<p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
			<button>Click</button>
		</div>
		<!-- Card with header and icon -->
		<div class="card">
			<div class="header">
				<h3>Card Header</h3>
				<span class="icon">icon</span>
			</div>
			<div class="body">
				<p class="title">Card Title</p>
				<p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
			<button>Click</button>
		</div>
		<!-- Card with footer and icon -->
		<div class="card">
			<div class="header">
				<h3>Card Header</h3>
				<span class="icon">icon</span>
			</div>
			<div class="body">
				<p class="title">Card Title</p>
				<p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="/cards" class="link">Link</a>
				<a href="/cards" class="link">Link</a>
				<a href="/cards" class="link">Link</a>
			</div>
			<div class="footer">
				<h5>Card Footer</h5>
			</div>
		</div>
		<!-- Card with Image -->
		<div class="card">
			<div class="card-img bg-danger">
				<a href="/cards" class="overlay-link">Click Me!</a>

				<!-- <img src="../../../prism/img/banner.svg"> -->
			</div>
			<div class="body">
				<p class="title">Card Title</p>
				<p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
			<button>Click</button>
		</div>
		<!-- Card with Image -->
		<div class="card">
			<div class="card-img">
				<img src="https://cdn.lynda.com/course/83603/83603-636216266356158373-16x9.jpg">
				<a href="/cards" class="overlay-link">Click Me!</a>
			</div>
			<div class="body">
				<p class="title">Card Title</p>
				<p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
			<button>Click</button>
		</div>
	</div>
</template>

<script>
export default {};
</script>