<script lang="ts">
  import IconCarbonCursor2 from '~icons/carbon/cursor-2';

  let count = $state(0);
</script>

<button
  onclick={() => count++}
  class="px-5 py-3 inline-flex items-center border border-solid rounded-lg border-transparent hover:border-[#646cff] focus:outline-4 focus-visible:outline-4 bg-[#f9f9f9] dark:bg-[#1a1a1a] text-base font-medium transition duration-250 cursor-pointer"
>
  <IconCarbonCursor2 />
  Clicks: {count}
</button>
