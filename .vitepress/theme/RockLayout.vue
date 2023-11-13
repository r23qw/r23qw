<script setup lang="ts">
import DefaultTheme from 'vitepress/theme-without-fonts'
import PostHeader from './components/PostHeader.vue'
import PostFooter from './components/PostFooter.vue'
import { useProgress } from './composables/useProgress'
import { useColorSchemeTransition } from './composables/useColorSchemeTransition'
import { useImageViewer } from './composables/useImageViewer'
import RegisterSW from './components/RegisterSW.vue'
import ReloadPrompt from './components/ReloadPrompt.vue'

useProgress()
useColorSchemeTransition()
useImageViewer()

</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>

      <PostHeader />
    </template>
    <template #doc-footer-before>
      <PostFooter />
    </template>
    <template #layout-bottom>
      <RegisterSW />
      <ReloadPrompt />
    </template>
  </DefaultTheme.Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>