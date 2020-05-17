<script>
  import icons from "../assets/icons.svg";

  export let size = 25;
  export let name;
  export let colorBase = "gray-300";
  export let colorShape = "gray-600";
</script>

<style lang="postcss">
  .Icon {
    @apply cursor-pointer inline-block;
  }
</style>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class="Icon"
  on:click>
  <use
    class={` icon-${colorBase} icon-shape-${colorShape}`}
    href={`${icons}#${name}`} />
</svg>
