<script lang="ts">
  let count = 0;

  const increment = () => {
    count += 1;
  };
</script>

<button
  on:click={increment}
  p="x5 y3"
  flex="inline"
  items="center"
  border="~ solid transparent rounded-lg hover:#646cff"
  outline="focus:4 focus-visible:4"
  bg="#f9f9f9 dark:#1a1a1a"
  text="base"
  font="medium"
  transition="~ duration-250"
  cursor="pointer"
>
  <span class="i-carbon:cursor-2" />
  Clicks: {count}
</button>
