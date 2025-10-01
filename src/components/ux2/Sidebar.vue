<script setup>
import { ref } from 'vue'

// 左侧边栏组件
const activePanel = ref(null)

const topMenuItems = [
  { id: 1, icon: 'C', text: '组件', panel: 'components' },
  { id: 2, icon: 'M', text: '模块', panel: 'modules' },
  { id: 3, icon: 'V', text: '变量', panel: 'variables' },
  { id: 4, icon: 'H', text: '历史', panel: 'history' }
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
  <aside class="bg-white border-r border-gray-200 w-64 h-full flex flex-col">
    <!-- 顶部菜单项 -->
    <div class="flex-1 p-4">
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
              <span 
                :class="[
                  'text-sm font-medium',
                  activePanel === item.panel ? 'text-white' : 'text-gray-600'
                ]"
              >
                {{ item.icon }}
              </span>
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

<script>
export default {
  data() {
    return {
      topMenuItems: [
        { id: 1, icon: 'C', text: '组件' },
        { id: 2, icon: 'M', text: '模块' },
        { id: 3, icon: 'V', text: '变量' },
        { id: 4, icon: 'H', text: '历史' }
      ],
      bottomMenuItems: [
        { id: 5, icon: '?', text: '帮助' },
        { id: 6, icon: 'S', text: '设置' }
      ]
    }
  }
}
</script>

<style scoped>
/* 保留空样式块以保持结构完整性 */
</style>