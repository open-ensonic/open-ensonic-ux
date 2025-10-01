<script setup>
import { ref } from 'vue'

// 左侧边栏组件
const activePanel = ref(null)

// 图标引入
const componentsIcon = new URL('/src/assets/images/objects-column.svg', import.meta.url).href
const modulesIcon = new URL('/src/assets/images/cube.svg', import.meta.url).href
const variablesIcon = new URL('/src/assets/images/puzzle-piece.svg', import.meta.url).href
const historyIcon = new URL('/src/assets/images/code-branch.svg', import.meta.url).href

const topMenuItems = [
  { id: 1, icon: componentsIcon, text: '组件', panel: 'components' },
  { id: 2, icon: modulesIcon, text: '模块', panel: 'modules' },
  { id: 3, icon: variablesIcon, text: '变量', panel: 'variables' },
  { id: 4, icon: historyIcon, text: '历史', panel: 'history' }
]

const bottomMenuItems = [
  { id: 5, icon: '?', text: '帮助' },
  { id: 6, icon: 'S', text: '设置' }
]

const togglePanel = (panel) => {
  activePanel.value = activePanel.value === panel ? null : panel
  // 发射事件给父组件
  emit('panelToggle', activePanel.value)
}

// 定义emit
const emit = defineEmits(['panelToggle'])
</script>

<template>
  <aside class="bg-white  w-[80px] h-full flex flex-col shadow relative z-1">
    <!-- 顶部菜单项 -->
    <div class="flex-1 py-4">
      <ul class="space-y-2">
        <li v-for="item in topMenuItems" :key="item.id" class="menu-item">
          <button
            @click="togglePanel(item.panel)"
            :class="[
              'menu-link w-full flex flex-col items-center p-3 rounded-lg transition-colors',
              activePanel === item.panel ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100 text-gray-700'
            ]"
          >
            <div
              :class="[
                'w-8 h-8 rounded-full flex items-center justify-center mb-2',
                activePanel === item.panel ? 'bg-blue-500' : 'bg-gray-200'
              ]"
            >
              <img :src="item.icon" :alt="item.text" class="w-4 h-4">
            </div>
            <span class="text-sm">{{ item.text }}</span>
          </button>
        </li>
      </ul>
    </div>

    <!-- 底部菜单项 -->
    <div class="p-4 border-t border-gray-200">
      <ul class="space-y-2">
        <li v-for="item in bottomMenuItems" :key="item.id" class="menu-item">
          <a href="#" class="menu-link flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700">
            <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mb-2">
              <span class="text-sm font-medium text-gray-600">{{ item.icon }}</span>
            </div>
            <span class="text-sm">{{ item.text }}</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>



<style scoped>
/* 保留空样式块以保持结构完整性 */
</style>
