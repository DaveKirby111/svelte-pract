<script>
  import { goto } from "$app/navigation";

  const handleclick = () => {
    goto("/products");
  };
</script>

<h1>home page</h1>

<button on:click={handleclick}>Place Order</button>
