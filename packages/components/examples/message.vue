<template>
  <Box class="example">
    <h1>Message</h1>
    <p>可通过 placement 来控制弹出消息的位置。</p>
    <div class="btn-list">
      <one-button @click="handleMessage('top-left')">topLeft</one-button>
      <one-button @click="handleMessage('top')">top</one-button>
      <one-button @click="handleMessage('top-right')">topRight</one-button>
      <one-button @click="handleMessage('bottom-left')">bottomLeft</one-button>
      <one-button @click="handleMessage('bottom')">bottom</one-button>
      <one-button @click="handleMessage('bottom-right')"
        >bottomRight</one-button
      >
    </div>
    <p>通过 type 来控制弹出消息的类型。</p>
    <div class="btn-list">
      <one-button type="primary" @click="handleMessage2('info')"
        >info</one-button
      >
      <one-button type="success" @click="handleMessage2('success')"
        >success</one-button
      >
      <one-button type="warning" @click="handleMessage2('warn')"
        >waring</one-button
      >
      <one-button type="danger" @click="handleMessage2('error')"
        >error</one-button
      >
    </div>
  </Box>
</template>

<script setup lang="ts">
import { Box, Message, MessageType, OneButton } from '../src'
const handleMessage = (placement: string) => {
  Message.open({
    type: 'info',
    text: '您好，这是默认的信息提示！！！',
    placement: placement
  })
}
const handleMessage2 = (type: MessageType) => {
  Message.open({
    type: type,
    text: '您好，这是默认的信息提示！！！',
    placement: 'top-right'
  })
}
</script>
<style lang="less">
.btn-list {
  margin-bottom: 10px;
  one-button {
    margin-right: 10px;
  }
}
</style>
