<template>
  <Box class="one-ui-counter">
    <Box class="num-value">{{ num }}</Box>
    <one-button @click="onClick">点击减1</one-button>
  </Box>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import OneButton from '@one-ui/components/esm/button'
import Box from '@one-ui/components/esm/box'
const num = ref<number>(100)
const onClick = () => {
  num.value += 1
}
</script>
