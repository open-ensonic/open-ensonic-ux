<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  activePanel: {
    type: String,
    default: null
  }
})

const panelWidth = 320

const panelContent = computed(() => {
  const contents = {
    components: {
      title: '组件库',
      content: '这里是组件库面板内容...'
    },
    modules: {
      title: '模块管理',
      content: '这里是模块管理面板内容...'
    },
    variables: {
      title: '变量设置',
      content: '这里是变量设置面板内容...'
    },
    history: {
      title: '操作历史',
      content: '这里是操作历史面板内容...'
    }
  }
  return props.activePanel ? contents[props.activePanel] : null
})
</script>

<template>
  <div 
    v-if="activePanel && ['components', 'modules', 'variables', 'history'].includes(activePanel)" 
    class="panel-container bg-white border-r border-gray-200 h-full overflow-auto"
    :style="{ width: `${panelWidth}px` }"
  >
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">{{ panelContent?.title }}</h3>
      <div class="text-gray-600">
        {{ panelContent?.content }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.panel-container {
  transition: width 0.3s ease;
}
</style>