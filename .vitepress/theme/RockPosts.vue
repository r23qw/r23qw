
<template>
  <div>
    <div v-if="posts.length === 0" class="flex pt-24 justify-center">Nothing Here.</div>
    <div v-else v-for="post in posts" :key="post.url">
      <a :href="post.url">
        <h3 v-view-transition-name="post.frontmatter.title">{{ post.frontmatter.title }}</h3>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { data as posts } from './post.data'

</script>

<style scoped></style>