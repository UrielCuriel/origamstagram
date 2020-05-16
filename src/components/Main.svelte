<style lang="postcss">
  .Main {
    @apply grid grid-cols-container justify-center bg-gray-200 py-8;
  }
  .Main-container {
    @apply grid grid-cols-content col-gap-8 row-gap-8;
  }
</style>

<div class="Main">
  <div class="Main-container">
    <slot />
  </div>
</div>
