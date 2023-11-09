
<template>
  <div class="flex justify-center">
    <div class="flex-grow max-w-784px">
      <div v-if="posts.length === 0" class="flex pt-24 justify-center">Nothing Here.</div>
      <div v-else v-for="post in posts" :key="post.url">
        <div class="flex flex-col p-6 post md:flex-row">
          <p class="flex font-medium text-base pt-1 pr-8 pb-4 text-[var(--vp-c-text-3)] leading-6 items-start ">
            {{ new Date(post.frontmatter.date).toLocaleDateString() }}
          </p>
          <div>
            <a :href="post.url" class="font-bold tracking-tight text-2xl text-[var(--vp-c-text-1)] leading-8">
              {{ post.frontmatter.title }}
            </a>
            <p v-if="post.excerpt" v-html="post.excerpt" class="pt-4 text-[var(--vp-c-text-2)]" />
            <div class="pt-4">
              <a :href="post.url" class="transition text-[var(--vp-c-brand-2)]  hover:text-[var(--vp-c-brand-1)]">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { data as posts } from './post.data'

</script>

<style scoped>
.post {
  border-bottom: 1px solid var(--vp-c-divider);
}
</style>