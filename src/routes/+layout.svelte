<script>
  import "../app.css";
</script>

<div class="container-fluid d-flex flex-column min-vh-100 m-0 p-0">
  <header>header</header>

  <nav class="navbar navbar-expand-lg">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item"><a href="/" class="nav-link">home</a></li>
      <li class="nav-item"><a href="/about" class="nav-link">about</a></li>
      <li class="nav-item"><a href="/docs" class="nav-link">docs</a></li>
    </ul>
  </nav>

  <main class="flex-grow-1">
    <slot />
  </main>

  <footer>footer</footer>
</div>
