<script>
	let count = 0;
	function increment() {
		count += 1;
	}
</script>

<h1 style="font-size:20px;margin-top:20px;">Count: {count}</h1>
<button on:click={increment} style="background-color:red;padding:8px;">Increment</button>
