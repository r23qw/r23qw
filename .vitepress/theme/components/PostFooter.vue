<template>
  <template v-if="frontmatter.backPost !== false">
    <div class="flex">
      <p class="mb-4 mr-4">
        → 去公众号
        <a class="text-[var(--vp-c-brand-2)]"
          href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkxODYwOTg1Mg==#wechat_redirect"
          target="_blank">摇滚Coder</a>
        评论
      </p>
      <div class="relative min-w-128px">
        <details class="absolute top-0 left-0 text-nowrap">
          <summary class="cursor-pointer">
            去关注
          </summary>
          <img src="/wechat-qrcode.jpg" height="129" width="129" alt="wechat-qrcode">
        </details>
      </div>
    </div>

    <a class="text-xl transition  text-[var(--vp-c-brand-2)] hover:text-[var(--vp-c-brand-1)]" href="/posts"> ← cd ..</a>
  </template>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<style scoped></style>