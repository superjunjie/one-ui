<template>
  <button
    type="button"
    :class="{
      [baseClassName]: true,
      [btnClassName]: true,
      [disabledClassName]: props.disabled || props.loading,
      [iconButtonClassName]: props.icon,
      [iconOnlyClassName]: props.iconOnly
    }"
  >
    <one-icon
      class="icon"
      v-if="props.loading"
      icon-name="loading"
      width="16"
      height="16"
      rotate
    ></one-icon>
    <one-icon
      v-if="props.icon && !$slots.customIcon"
      :icon-name="props.icon"
      :icon-color="props.iconColor"
      width="24"
      height="24"
    />
    <one-icon
      v-if="$slots.customIcon"
      :icon-color="props.iconColor"
      width="24"
      height="24"
    >
      <slot name="customIcon"></slot>
    </one-icon>
    <slot v-if="$slots.default"></slot>
  </button>
</template>
<script setup lang="ts">
import oneIcon from '../icon/index'
import { prefixName } from '../theme/index'
import type { ButtonType } from './types'
import type { iconType } from '../icon/index'

const props = withDefaults(
  defineProps<{
    type?: ButtonType
    disabled?: boolean
    loading?: boolean
    icon?: iconType
    iconOnly?: boolean
    iconColor?: string
  }>(),
  {
    type: 'primary',
    disabled: false,
    loading: false,
    iconOnly: false
  }
)

const baseClassName = `${prefixName}-button`
const btnClassName = `${baseClassName}-${props.type}`
const disabledClassName = `${baseClassName}-disabled`
const iconButtonClassName = `${prefixName}-icon-button`
const iconOnlyClassName = `${prefixName}-icon-only`
</script>
