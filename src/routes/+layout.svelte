<script>
  import '../app.css';
</script>

<div
  class="flex flex-col items-center min-h-screen bg-white dark:bg-[#242424] text-base text-[#213547] dark:text-[#ffffffde] font-normal antialiased"
>
  <main class="flex flex-col p-4 w-full max-w-[64rem] my-auto">
    <slot />
  </main>

  <footer class="flex flex-col justify-center items-center p-3">
    <p class="text-[#888]">Click on the logos to learn more</p>
  </footer>
</div>
