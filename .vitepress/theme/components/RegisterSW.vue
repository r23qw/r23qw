<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import Button from './Button.vue';

const offlineReady = ref(false)
const onOfflineReady = () => {
  offlineReady.value = true
}
const close = async () => {
  offlineReady.value = false
}

onBeforeMount(async () => {
  //@ts-ignore
  const { registerSW } = await import('virtual:pwa-register')
  registerSW({
    immediate: true,
    onOfflineReady,
    onRegistered() {
      console.info('Service Worker registered')
    },
    onRegisterError(e) {
      console.error('Service Worker registration error!', e)
    },
  })
})
</script>

<template>
  <template v-if="offlineReady">
    <div class="pwa-toast" role="alertdialog" aria-labelledby="pwa-message">
      <div id="pwa-message" class="mb-3">
        应用离线运行
      </div>
      <Button @click="close">
        Close
      </Button>
    </div>
  </template>
</template>

<style scoped>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  z-index: 100;
  text-align: left;
  background-color: transparent;
}
</style>