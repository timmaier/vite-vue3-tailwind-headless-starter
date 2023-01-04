
<template>
  <main class="h-full w-full">
    <div class="p-4">
      <h1>Start VVTH</h1>
      <div class="flex gap-4">
        <RouterLink class="btn" to="/">Home</RouterLink>
        <RouterLink class="btn" to="about">About</RouterLink>
      </div>
    </div>
    <div class="p-4">
      <RouterView/>
    </div>
  </main>
</template>

<script setup>

</script>


