<script>
  import "../app.css";
  import Nav from "./comps/navBar/Nav.svelte";
  import CustomFooter from "./comps/CustomFooter.svelte";


  let innerWidth;
  $: small = (innerWidth ?? 0) <= 960;
</script>

<svelte:window bind:innerWidth />


<Nav orientation={small ? 'horizontal' : 'vertical'}/>
<slot />
<CustomFooter/>
