<script lang="ts">
  import { slide } from 'svelte/transition'

  export let title: string = 'Title'
  export let open: boolean = false

  let onClick = () => {
    open = !open
  }
</script>

<section>
  <header class="border-t border-black/40">
    <button
      type="button"
      {open}
      on:click={onClick}
      class="h3 w-full bg-yellow flex items-center justify-between py-5"
    >
      <span>{title}</span>
      <span>&plus;</span>
    </button>
  </header>
  {#if open}
    <div transition:slide={{ duration: 500 }}>
      <slot />
    </div>
  {/if}
</section>

<style lang="postcss">
  section {
    @apply flex flex-col;
  }
</style>
