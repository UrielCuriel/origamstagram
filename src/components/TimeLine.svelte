<script>
  import { onMount } from "svelte";
  import Card from "./Card.svelte";
  let photos = [];
  onMount(async () => {
    photos = await fetch("/api/photos")
      .then((respose) => respose.json())
      .then((res) => res.photos);
  });
</script>

<style>
  .TimeLine {
    @apply pt-16;
  }
</style>

<div class="TimeLine">
  <div class="TimeLine-container">
    {#each photos as photo (photo.id)}
      <Card {...photo} />
    {:else}
      <span>Loading</span>
    {/each}
  </div>
</div>
