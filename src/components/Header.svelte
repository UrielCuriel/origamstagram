<script>
  import Icon from "./Icon.svelte";

  import { likeCount } from "../store/store.js";
</script>

<style lang="postcss">
  .Header {
    @apply bg-white w-full fixed top-0 left-0 z-10;
  }
  .Header-container {
    @apply grid grid-cols-container justify-center border-b border-gray-500;
  }
  .Header-content {
    @apply flex items-center justify-between p-2;
  }
  .Header-logo h1 {
    @apply font-logo text-2xl cursor-pointer relative leading-loose bg-white;
    mix-blend-mode: multiply;

    display: inline-block;
  }
  .Header-logo h1::before {
    @apply w-full h-full absolute block top-0 left-0;
    content: "";
    background: radial-gradient(circle at top left, #f09433, #bc1888);
    mix-blend-mode: screen;
  }
  .Header-nav ul li {
    @apply flex items-center ml-4 text-gray-600;
  }
  .Header-nav ul {
    @apply flex;
  }
</style>

<div class="Header">
  <div class="Header-container">
    <div class="Header-content">
      <div class="Header-logo">
        <h1>Origamstagram</h1>
      </div>
      <div class="Header-nav">
        <ul>
          <li>
            <Icon name="heart" />
            {$likeCount === 0 ? '' : $likeCount}
          </li>
          <li>
            <Icon name="user" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
