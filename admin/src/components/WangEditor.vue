<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
const emit = defineEmits(['update:modelValue'])
const props = defineProps(['modelValue'])
const editorRef = shallowRef() // 编辑器实例，必须用 shallowRef
const valueHtml = ref('') // 内容 HTML
valueHtml.value = props.modelValue
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  }, 15000000)
}) // 模拟 ajax 异步获取内容
const editorConfig = { placeholder: '请输入内容...' }

onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
}) // 组件销毁时，也及时销毁编辑器
const handleCreated = (editor) => {
  editorRef.value = editor
} // 记录 editor 实例，重要！

const handleChange = (editor) => {
  emit('update:modelValue', editor.getHtml())
} //子穿父数据
</script>

<template>
  <div style="border: 1px solid #ccc">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      @onCreated="handleCreated"
      @onChange="handleChange"
    />
  </div>
</template>

<style lang="scss" scoped></style>
