<script>
  import Profile from "./Profile.svelte";
  import Stories from "./Stories.svelte";
</script>

<style lang="postcss">
  .Sidebar {
    @apply relative pt-18;
  }
  .Sidebar-container {
    @apply fixed;
  }
</style>

<div class="Sidebar">
  <div class="Sidebar-container">
    <Profile />
    <Stories />
  </div>
</div>
