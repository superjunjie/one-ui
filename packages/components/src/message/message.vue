<template>
  <transition :name="fadeClassName">
    <div
      v-if="show"
      ref="message"
      :class="[wrapClassName, placementeClassName]"
    >
      <div :class="[baseClassName, typeClassName]">
        <one-icon icon-name="info" class="icon" />
        <span>
          {{ props.text }}
        </span>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import OneIcon from '../icon'
import { onMounted, ref } from 'vue'
import { prefixName } from '../theme'
import type { MessageType } from './types'

const show = ref<boolean>(false)

onMounted(() => {
  show.value = true
})

const props = withDefaults(
  defineProps<{
    text?: string
    type?: MessageType
    placement: string
  }>(),
  {
    type: 'info'
  }
)

const closeMessage = () => {
  show.value = false
}

defineExpose({ closeMessage: closeMessage })

const baseClassName = `${prefixName}-message`
const wrapClassName = `${baseClassName}-wrap`
const typeClassName = `${baseClassName}-${props.type}`
const fadeClassName = `${baseClassName}-fade`
const placementeClassName = `${baseClassName}-${props.placement}`
</script>
<style lang=""></style>
