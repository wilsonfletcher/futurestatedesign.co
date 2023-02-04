<script lang="ts">
  import { fade } from 'svelte/transition'
  import { isOverlayOpen } from '@/stores/overlay-store'
</script>

{#if $isOverlayOpen}
  <div
    transition:fade={{ duration: 300 }}
    class="modal"
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="dialog_label"
    aria-describedby="dialog_desc"
  >
    <div>
      <button type="button" on:click={() => isOverlayOpen.set(false)}>
        Close menu
        <svg
          width="29"
          height="30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="#fff"
            stroke-width="3"
            d="M1.061 1.939l26 26M27.061 2.061l-26 26"
          />
        </svg>
      </button>
    </div>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .modal {
    @apply fixed inset-0 bg-qux text-white z-50 w-screen h-screen;
  }
</style>
