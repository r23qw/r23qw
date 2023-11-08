<template>
  <div class="h-100vh relative">
    <div class="flex pt-33vh gap-4 justify-center content">
      <a href="/posts">Posts</a>
      <a href="https://github.com" target="_blank">Github</a>
      <a href="/about">About</a>
    </div>
    <ClientOnly>
      <RockHomeWave />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import RockHomeWave from './RockHomeWave.vue';
</script>

<style scoped>
.content a {
  --at-apply: text-xl lg:text-xl;
  color: var(--rock-home-text-color);
  font-weight: 300;
}
</style>