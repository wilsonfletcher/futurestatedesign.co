<script>
  import { onMount } from 'svelte'

  onMount(() => {
    console.log('Mounted')
  })

  function click() {
    alert('Clicked!')
  }
</script>

<div class="p-5 bg-yellow text-black">
  <button type="button" on:click={click}>Click me</button>
</div>
