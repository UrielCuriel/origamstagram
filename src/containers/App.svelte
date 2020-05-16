<script>
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import Header from "../components/Header.svelte";
  import Main from "../components/Main.svelte";
  import TimeLine from "../components/TimeLine.svelte";
  import Sidebar from "../components/Sidebar.svelte";
</script>

<style lang="postcss">
  :global(body) {
    @apply bg-gray-200 font-body;
  }
</style>

<Tailwindcss />
<Header />
<Main>
  <TimeLine />
  <Sidebar />
</Main>
