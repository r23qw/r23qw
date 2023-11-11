<template>
  <template v-if="frontmatter.backPost !== false">
    <p class="mb-2">
      去公众号
      <a class="text-[var(--vp-c-brand-2)]"
        href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkxODYwOTg1Mg==#wechat_redirect"
        target="_blank">摇滚Coder</a>
      评论 →
    </p>
    <a class="text-xl transition  text-[var(--vp-c-brand-2)] hover:text-[var(--vp-c-brand-1)]" href="/posts"> ← cd ..</a>
  </template>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<style scoped></style>