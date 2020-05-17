<style lang="postcss">
  .Modal {
    @apply relative;
  }
  .Modal-overlay {
    @apply fixed w-screen h-screen top-0 bottom-0 left-0 right-0 z-10 cursor-pointer bg-black;
    --bg-opacity: 0.5;
  }
</style>

<div class="Modal">
  <div class="Modal-overlay" />
  <slot />
</div>
