<script>
  import "../app.css";
  import Nav from "./comps/navBar/Nav.svelte";


  let innerWidth;
  $: small = innerWidth <= 960; // todo may want to adjust that number
</script>

<svelte:window bind:innerWidth />


<Nav orientation={small ? 'horizontal' : 'vertical'}/>
<slot />
