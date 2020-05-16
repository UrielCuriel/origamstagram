<script>
  let comment = "";
</script>

<style lang="postcss">
  .Comments-content {
    @apply px-4 pb-2;
  }
  .Comments-users {
    @apply mb-2 flex;
  }
  .Comments-users h3 {
    @apply font-bold;
  }
  .Comments-users span {
    @apply font-normal ml-2 text-gray-600;
  }
  .Comments-add {
    @apply p-4 border-t border-gray-400;
  }
  .Comments-add form {
    @apply flex justify-between items-center;
  }
  .Comments-input {
    @apply border-none rounded text-gray-600 text-sm outline-none w-full flex;
  }
  button {
    @apply border-none rounded text-blue-300 pointer-events-none text-sm outline-none font-semibold flex;
  }
  button.active {
    @apply text-blue-500 pointer-events-auto;
  }
</style>

<div class="Comments">
  <div class="Comments-content">
    <div class="Comments-users">
      <h3>username</h3>
      <span>comment</span>
    </div>
  </div>
  <div class="Comments-add">
    <form on:submit|preventDefault>
      <label for="text" class="sr-only ">Comments</label>
      <input
        type="text"
        class="Comments-input"
        placeholder="Agregar Comentario ..."
        bind:value={comment}
        id="text" />
      <button type="submit" class:active={comment.length > 0}>Publicar</button>
    </form>
  </div>
</div>
