<script>
  export let comments = [];
  function addComment(event) {
    const msg = event.target.text.value;
    if (msg.length > 3) {
      const message = {
        id: Date.now(),
        text: msg,
        username: "urielcuriel",
      };
      comments = [...comments, message];
      event.target.text.value = "";
    }
  }
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
    @apply border-none rounded text-blue-500 text-sm outline-none font-semibold flex;
  }
</style>

<div class="Comments">
  <div class="Comments-content">
    {#each comments as comment (comment.id)}
      <div class="Comments-users">
        <h3>{comment.username}</h3>
        <span>{comment.text}</span>
      </div>
    {/each}
  </div>
  <div class="Comments-add">
    <form on:submit|preventDefault={addComment}>
      <label for="text" class="sr-only ">Comments</label>
      <input
        type="text"
        class="Comments-input"
        placeholder="Agregar Comentario ..."
        id="text" />
      <button type="submit">Publicar</button>
    </form>
  </div>
</div>
