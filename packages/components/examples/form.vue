<template>
  <div class="form">
    <h1>表单</h1>
    <one-form
      ref="formRef"
      :model="model"
      @finish="onFinish"
      @finishFail="onFinishFail"
    >
      <one-form-item label="数据1" name="data1" :rule="rule1">
        <input v-model="model.data1" />
      </one-form-item>
      <one-form-item label="数据2" name="data2" :rule="rule2">
        <input v-model="model.data2" />
      </one-form-item>
      <one-form-item>
        <button style="margin-right: 8px" type="submit">submit</button>
        <button @click="onReset" type="reset">reset</button>
      </one-form-item>
    </one-form>
    <div>{{ model }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { OneForm, OneFormItem } from '../src'
import { FormInstance } from '../src'

const formRef = ref<FormInstance>()
const model = reactive<{ data1: string; data2: string }>({
  data1: 'Data 001',
  data2: 'Data 002'
})

const onReset = () => {
  formRef.value?.resetFields()
}

const rule1 = {
  validator: (val: string) => {
    const hasError = /^[0-9]{1,}$/gi.test(`${val || ''}`) !== true
    return {
      hasError,
      message: hasError ? '仅支持0-9的数字' : ''
    }
  }
}

const rule2 = {
  validator: (val: string) => {
    const hasError = /^[a-z]{1,}$/gi.test(`${val || ''}`) !== true
    return {
      hasError,
      message: hasError ? '仅支持a-z的大小写字母' : ''
    }
  }
}

const onFinish = (e: any) => {
  alert('success')
}

const onFinishFail = (e: any) => {
  alert('fail')
}
</script>
