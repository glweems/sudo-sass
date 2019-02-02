<template>
	<pre :class="lang"><code class="hljs html"><span class="hljs-tag">&lt;<span class="hljs-name">navigation-link</span> <span class="hljs-attr">url</span>=<span class="hljs-string">"/profile"</span>&gt;</span>
  Your Profile
<span class="hljs-tag">&lt;/<span class="hljs-name">navigation-link</span>&gt;</span>
</code></pre>
</template>

<script>
import Prism from "prismjs";

Prism.highlightAll();
export default {
	name: "CodeSnippet",
	props: {
		code: { type: String },
		lang: { type: String, default: "html" }
	},
	methods: {
		langauge() {
			return "language-" + this.lang;
		}
	}
};
</script>

<style scoped>
	@import url("../../node_modules/prismjs/themes/prism-solarizedlight.css");
</style>