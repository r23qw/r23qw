<template>
  <a v-if="frontmatter.backPost !== false"
    class="text-xl transition  text-[var(--vp-c-brand-2)] hover:text-[var(--vp-c-brand-1)]" href="/posts"> ← cd ..</a>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<style scoped></style>