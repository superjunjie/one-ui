<template>
  <div class="demo-container">
    <icon-demo class="example"></icon-demo>
    <button-demo class="example"></button-demo>
    <message-demo class="example"></message-demo>
    <form-demo class="example"></form-demo>
  </div>
</template>
<script lang="ts" setup>
import IconDemo from './examples/icon.vue'
import ButtonDemo from './examples/button.vue'
import MessageDemo from './examples/message.vue'
import FormDemo from './examples/form.vue'
</script>
<style>
.example {
  width: 960px;
  padding: 10px 50px 50px 50px;
  margin: 20px auto;
  box-shadow: #ccc 1px 1px 16px;
}
</style>
