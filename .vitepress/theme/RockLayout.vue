<!-- .vitepress/theme/Layout.vue -->

<script setup lang="ts">
import { useData, useRouter } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import { nextTick, provide } from 'vue'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false });

const router = useRouter()
const { isDark, frontmatter } = useData()


const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

router.onBeforeRouteChange = async () => {
  NProgress.start()
};
router.onAfterRouteChanged = async () => {
  NProgress.done()
}

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <h3 class="font-bold tracking-tight text-3xl text-[var(--vp-c-text-1)] leading-8">{{ frontmatter.title }}</h3>
      <p v-if="frontmatter.date" class="pt-4 text-[var(--vp-c-text-3)] leading-6">
        {{ new Date(frontmatter.date).toLocaleDateString() }}
      </p>
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