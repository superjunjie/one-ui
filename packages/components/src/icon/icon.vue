<template>
  <span
    :class="{ [iconClasName]: true, [iconClasNameRoate]: props.rotate }"
    :style="{
      lineHeight: props.height + 'px',
      height: props.height + 'px',
      width: props.width + 'px'
    }"
    :icon-name="props.iconName"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :width="props.width"
      :height="props.height"
    >
      <g :fill="props.iconColor" v-if="$slots.default">
        <slot></slot>
      </g>
      <g :fill="props.iconColor" v-html="iconVM" v-else></g>
    </svg>
  </span>
</template>
<script lang="ts" setup>
import icons from './icons'
import { computed } from 'vue'
import { prefixName } from '../theme'
import type { iconType } from './types'
const props = withDefaults(
  defineProps<{
    iconName?: iconType
    width?: number | string
    height?: number | string
    iconColor?: string
    rotate?: boolean
  }>(),
  {
    width: 18,
    height: 18,
    iconColor: 'currentColor',
    rotate: false
  }
)
const iconVM = computed(() => {
  return props.iconName ? icons[props.iconName] : ''
})
const iconClasName = `${prefixName}-icon`
const iconClasNameRoate = `${iconClasName}-rotate`
</script>
