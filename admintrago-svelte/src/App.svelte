<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Dashboard from './routes/Dashboard.svelte';
  import { onMount } from 'svelte';

  let isAdmin = false;

  onMount(() => {
    isAdmin = localStorage.getItem("isAdmin") === "true";
    if (!isAdmin) {
      window.location.href = "/Index.html";
    }
  });
</script>

<Header />

<main>
  <Dashboard />
</main>

<Footer />

<style>
  main {
    padding: 20px;
    background-color: #222;
    color: #f0db7d;
  }
</style>