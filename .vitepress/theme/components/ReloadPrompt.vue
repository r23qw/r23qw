<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import Button from './Button.vue';

const offlineReady = ref(false)
const needRefresh = ref(false)

let updateServiceWorker: (() => Promise<void>) | undefined

const onOfflineReady = () => {
  offlineReady.value = true
}
const onNeedRefresh = () => {
  needRefresh.value = true
}
const close = async () => {
  offlineReady.value = false
  needRefresh.value = false
}

onBeforeMount(async () => {
  //@ts-ignore
  const { registerSW } = await import('virtual:pwa-register')
  updateServiceWorker = registerSW({
    immediate: true,
    onOfflineReady,
    onNeedRefresh,
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
  <template v-if="offlineReady || needRefresh">
    <div class="pwa-toast" role="alertdialog" aria-labelledby="pwa-message">
      <div id="pwa-message" class="mb-4">
        {{ offlineReady ? '应用离线运行' : ' 有新内容，点击更新' }}
      </div>
      <Button v-if="needRefresh" class="mr-4 brand" @click="updateServiceWorker?.()">
        更新
      </Button>
      <Button class="alt" @click="close">
        关闭
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
  background-color: var(--vp-c-bg);
}
</style>