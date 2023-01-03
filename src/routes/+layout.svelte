<script>
  import '@unocss/reset/tailwind.css';
  import 'uno.css';
  // import './styles.css';
</script>

<div
  flex="~ col"
  items="center"
  min-h="screen"
  min-w="320px"
  bg="white dark:#242424"
  text="base #213547 dark:#ffffffde"
  font="normal synthesis-none"
  antialiased
>
  <main flex="~ col" p4 wfull max-w256 mya>
    <slot />
  </main>

  <footer flex="~ col" justify="center" items="center" p3>
    <p text="#888">Click on the logos to learn more</p>
  </footer>
</div>
