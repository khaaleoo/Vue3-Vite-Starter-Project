<template>
  <div class="w-full text-center">Current point is: {{ point }}</div>
  <div class="text-center">
    <img alt="Vue logo" src="@/assets/logo.png" class="mx-auto" />
    <div class="mt-4">
      <a-button type="primary">Primary Button</a-button>
      <a-select style="width: 120px">
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="disabled" disabled>Disabled</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
      <a-radio v-model:checked="checked">Radio</a-radio>
    </div>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
      class="relative inline-flex items-center h-6 rounded-full w-11"
    >
      <span class="sr-only">Enable notifications</span>
      <span
        :class="enabled ? 'translate-x-6' : 'translate-x-1'"
        class="inline-block w-4 h-4 transform bg-white rounded-full"
      />
    </Switch>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Switch } from '@headlessui/vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { changeAntdTheme } from 'mini-dynamic-antd-theme'
import { useStore } from 'vuex'

const point = ref(5)
// await new Promise((resolve) => {
//   setTimeout(() => {
//     resolve()
//   }, 3000)
// })
const store = useStore()
console.log({ store })
changeAntdTheme('purple')
const checked = ref(false)
const enabled = ref(true)
</script>

<style lang="">
</style>