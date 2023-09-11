<script>
  import '@unocss/reset/tailwind.css';
  import 'uno.css';
  import '../app.css';
</script>

<div
  flex="~ col"
  items="center"
  min-h="screen"
  min-w="320px"
  bg="white dark:#242424"
  text="base #213547 dark:#ffffffde"
  font="normal synthesis-none antialiased"
>
  <main flex="~ col" p="4" w="full" max-w="256" m="ya">
    <slot />
  </main>

  <footer flex="~ col" justify="center" items="center" p="3">
    <p text="#888">Click on the logos to learn more</p>
  </footer>
</div>
