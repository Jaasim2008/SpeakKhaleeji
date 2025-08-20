<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen">
  <Navbar />
  
  <main class="flex-1">
    {@render children?.()}
  </main>
  
  <Footer />
</div>