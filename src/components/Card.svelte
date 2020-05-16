<script>
  import Icon from "./Icon.svelte";
  import Comments from "./Comments.svelte";
  export let id;
  export let url;
  export let user;
  export let description;
</script>

<style lang="postcss">
  .Card {
    @apply border border-gray-400 rounded-md bg-white mb-8;
  }
  .Card-header {
    @apply flex justify-between items-center p-4;
  }
  .Card-user {
    @apply flex items-center justify-end;
  }
  .Card-user img {
    @apply w-profile h-profile rounded-full;
  }
  .Card-user h2 {
    @apply text-base font-semibold ml-4;
  }
  .Card-user h2 span {
    @apply text-xs font-normal block text-gray-600;
  }
  .Card-photo figure {
    @apply cursor-pointer relative;
  }

  .Card-photo figure caption {
    @apply absolute block bottom-0 p-2 w-full opacity-25 transition-all duration-300 ease-in-out;
    background-color: #ffffff70;
    backdrop-filter: blur(10px);
  }
  .Card-photo figure:hover caption {
    @apply opacity-100;
  }
  .Card-icons {
    @apply p-4 flex justify-between items-center;
  }
  .Card-description {
    @apply p-4 pt-0;
  }
  .Card-description h3 {
    @apply font-bold text-base;
  }
  .Card-description span {
    @apply font-normal text-sm text-gray-600;
  }
</style>

<div class="Card" {id}>
  <div class="Card-container">
    <div class="Card-header">
      <div class="Card-user">
        <img src={user.profile_image.small} alt={user.username} />
        <h2>
          {user.username}
          <span>{user.location ? user.location : ''}</span>
        </h2>
      </div>
      <div class="Card-settings">
        <Icon name="dots-horizontal" />
      </div>
    </div>
    <div class="Card-photo">
      <figure>
        <img src={url} alt={description} />
        <caption>
          Photo by
          <a href={user.links.html} target="_blank">{user.name}</a>
          on
          <a href="https://unsplash.com/" target="_blank">Unsplash</a>
        </caption>
      </figure>
    </div>
    <div class="Card-icons">
      <div class="Card-icons-first">
        <Icon name="heart" />
        <Icon name="send" />
      </div>
      <div class="Card-icons-second">
        <Icon name="book-closed" />
      </div>
    </div>
    <div class="Card-description">
      <h3>{user.username}</h3>
      <span>{description}</span>
    </div>
    <Comments />
  </div>
</div>