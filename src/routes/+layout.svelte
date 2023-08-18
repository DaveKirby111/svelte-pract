<script>
  import "../app.css";
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import Nav from "$lib/nav.svelte";
</script>

<div class="container-fluid d-flex flex-column min-vh-100 m-0 p-0">
  <Header />

  <Nav />

  <main class="flex-grow-1">
    <slot />
  </main>

  <Footer />
</div>
