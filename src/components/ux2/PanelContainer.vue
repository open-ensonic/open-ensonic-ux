<script setup>
import { ref, computed } from 'vue'
import ComponentLibrary from './ComponentLibrary.vue'

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
    class="panel-container bg-[#eaf2fa] shadow-lg/25 relative z-11 h-full overflow-y-auto flex-shrink-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    :style="{ width: `${panelWidth}px` }"
  >
    <div class="p-4">
      <ComponentLibrary v-if="activePanel === 'components'" />
      <div v-else>
        <h3 class="text-lg font-semibold text-gray-800 mb-4">{{ panelContent?.title }}</h3>
        <div class="text-gray-600">
          {{ panelContent?.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.panel-container {
  transition: width 0.3s ease;
}
</style>
