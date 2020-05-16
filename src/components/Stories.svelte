<script>
  import { onMount } from "svelte";
  let stories = [];
  onMount(async () => {
    stories = await fetch("/api/stories")
      .then((respose) => respose.json())
      .then((res) => res.stories);
  });
  const random = () => Math.floor(Math.random() * 24);
</script>

<style lang="postcss">
  .Stories {
    @apply bg-white border border-gray-400 rounded my-4 px-4 py-2;
  }
  .Stories-head {
    @apply flex justify-between items-center pt-2;
  }
  .Stories-head h2 {
    @apply font-bold;
  }
  .Stories-head span {
    @apply font-normal text-gray-600;
  }
  .Stories-items {
    @apply my-2;
  }

  .Stories-item {
    @apply flex items-center mb-2;
  }
  .Stories-item h2 {
    @apply ml-2 leading-tight;
  }
  .Stories-item h2 span {
    @apply block text-xs uppercase text-gray-600;
  }

  .Stories-item-box {
    @apply w-story h-story border-2 border-transparent rounded-full;
    background-image: linear-gradient(#fff, #fff),
      radial-gradient(circle at top left, #f09433, #bc1888);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
  .Stories-item-box img {
    @apply w-full h-full rounded-full;
  }
</style>

<div class="Stories">
  <div class="Stories-container">
    <div class="Stories-head">
      <h2>Historias</h2>
      <span>Ver Todas</span>
    </div>
    <div class="Stories-items">
      {#each stories as story (story.id)}
        <div class="Stories-item">

          <div class="Stories-item-box">
            <img src={story.profile_image.small} alt="" />
          </div>
          <h2>
            {story.username}
            <span>{random()} Horas antes</span>
          </h2>
        </div>
      {:else}
        <span>Loading</span>
      {/each}
    </div>
  </div>
</div>
