<template>
  <div class="h-100vh relative">
    <div class="flex pt-33vh gap-4 justify-center content">
      <a href="/posts">Posts</a>
      <a href="https://github.com" target="_blank">Github</a>
      <a href="/about">About</a>
    </div>
    <ClientOnly>
      <RockHomeWave :font-color="fontColor" :background-color="backgroundColor" :wave-color="waveColor" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { usePreferredColorScheme, useLocalStorage } from '@vueuse/core';
import { computed } from 'vue';
import RockHomeWave from './RockHomeWave.vue';

const colorScheme = usePreferredColorScheme()
const localStorageColorScheme = useLocalStorage('vitepress-theme-appearance', 'auto')
const isDarkScheme = computed(() => localStorageColorScheme.value === "light" ? false : colorScheme.value === 'dark')
const fontColor = computed(() => `var(--rock-home-${isDarkScheme.value ? 'dark-' : ""}text)`)
const backgroundColor = computed(() => isDarkScheme.value ? '#c5c5c5' : '#CFD8DC')
const waveColor = computed(() => isDarkScheme.value ? ["#212121", "#424242", "#616161", "#757575"] : ['#263238', '#37474F', '#455A64', '#546E7A'],)
</script>

<style scoped>
.content a {
  --at-apply: text-xl lg:text-xl;
  color: v-bind(fontColor);
  font-weight: 300;
}
</style>