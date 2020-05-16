<script>
  import { onMount } from "svelte";
  let user;
  onMount(async () => {
    user = await fetch("/api/profile").then((respose) => respose.json());
  });
</script>

<style lang="postcss">
  .Profile-content {
    @apply flex items-center;
  }
  .Profile-avatar img {
    @apply w-user h-user rounded-full;
  }
  .Profile-avatar:before {
    @apply shadow-inner;
    content: "";
    position: absolute;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .Profile-info {
    @apply flex flex-col ml-2;
  }
  .Profile-info h2 {
    @apply leading-none font-semibold;
  }
  .Profile-info span {
    @apply text-sm font-normal text-gray-600;
  }
</style>

<div class="Profile">
  <div class="Profile-content">
    {#if user !== undefined}
      <div class="Profile-avatar">
        <img src={user.thumbnailUrl} alt={user.displayName} />
      </div>
      <div class="Profile-info">
        <h2>{user.displayName}</h2>
        <span>{user.name.formatted}</span>
      </div>
    {/if}
  </div>
</div>
