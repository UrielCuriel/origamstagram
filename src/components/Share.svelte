<script>
  import Icon from "./Icon.svelte";
</script>

<style lang="postcss">
  .Share {
    @apply border border-gray-100 rounded-md bg-white mb-8 absolute z-20 p-4 fixed;
    width: 300px;
    top: 300px;
    left: 30%;
  }
  .Share-head {
    @apply flex justify-between items-center;
  }
  .Share-head h2 {
    @apply text-xl;
  }
  .Share-content a {
    @apply flex items-center mt-2;
  }
</style>

<div class="Share">
  <div class="Share-head">
    <h2>Compartir</h2>
    <Icon name="close" on:click/>
  </div>
  <div class="Share-content">
    <a
      href="https://www.facebook.com/sharer/sharer.php?&v=https://origamstagram.urielcuriel.com" target="_blank">
      <Icon name="facebook" colorShape="blue-400" />
    </a>
  </div>
</div>
