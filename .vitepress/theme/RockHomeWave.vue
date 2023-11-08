<template>
  <div ref="container" class="h-100vh w-full bottom-0 left-0 z--1 absolute"></div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useEventListener } from '@vueuse/core'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import * as jinrishici from 'jinrishici'
import * as echarts from 'echarts/core';
import 'echarts-liquidfill'
import * as Renderer from 'echarts/renderers'

const props = defineProps({
  fontColor: {
    type: String,
    default: 'var(--rock-home-text)'
  },
  waveColor: {
    type: Array,
    default: () => ['#263238', '#37474F', '#455A64', '#546E7A']
  },
  backgroundColor: {
    type: String,
    default: '#CFD8DC'
  }
})

echarts.use([Renderer.SVGRenderer])

let sentence = ref('')
jinrishici.load((result) => {
  sentence.value = result.data.content
}, () => { sentence.value = "芝兰生于幽谷，不以无人而不芳。" });

const breakpoints = useBreakpoints(breakpointsTailwind)

const sm = breakpoints.smaller('md')
const md = breakpoints.between('md', 'lg')
const lg = breakpoints.between('lg', 'xl')
const xl = breakpoints.between('xl', '2xl')
const xxl = breakpoints['2xl']

const currentBreakpoint = computed(() => {
  if (sm.value) return 'sm'
  if (md.value) return 'md'
  if (lg.value) return 'lg'
  if (xl.value) return 'xl'
  if (xxl.value) return 'xxl'
  return 'lg'
})

const fontSizeMap = {
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
  xxl: '2.5rem'
}
const amplitudeMap = {
  sm: 20,
  md: 30,
  lg: 40,
  xl: 50,
  xxl: 60
}


const chartOption = computed(() => {
  return {
    series: [{
      type: 'liquidFill',
      amplitude: amplitudeMap[currentBreakpoint.value],
      silent: true,
      data: [0.35, 0.30, 0.25, 0.2],
      color: props.waveColor,
      shape: 'container',
      animationDuration: 8000,
      outline: {
        show: false
      },
      label: {
        position: ['50%', '64%'],
        formatter: `${sentence.value}`,
        textStyle: {
          fontSize: fontSizeMap[currentBreakpoint.value],
          color: props.fontColor,
          fontWeight: 300
        }
      },
      backgroundStyle: {
        color: props.backgroundColor
      }
    }],
  }
})

const container = ref<HTMLDivElement | null>(null)
let chart = ref<ReturnType<typeof echarts.init> | null>(null)


function initChart() {
  chart.value = echarts.init(container.value!, undefined, {
    renderer: 'svg'
  });
  chart.value!.setOption(chartOption.value);
}

watch(chartOption, () => {
  chart.value?.setOption(chartOption.value);
})


onMounted(() => {
  initChart()
  useEventListener('resize', () => {
    chart.value?.resize()
  })
})

</script>

<style scoped></style>