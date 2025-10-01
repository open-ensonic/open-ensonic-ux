<script setup>
import { defineProps, defineEmits } from 'vue'

// 底部状态栏组件
const props = defineProps({
  activePanel: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['panelToggle'])

const navItems = [
  { id: 'sandbox', icon: 'bg-blue-500', text: '沙盒环境', panel: 'sandbox' },
  { id: 'logs', icon: 'bg-green-500', text: '显示日志', panel: 'logs' }
]

const togglePanel = (panel) => {
  emit('panelToggle', panel)
}

const panelContent = {
  sandbox: {
    title: '沙盒环境',
    content: '这里是沙盒环境面板，可以在这里测试和预览功能...'
  },
  logs: {
    title: '系统日志',
    content: '这里是系统日志面板，显示操作记录和系统信息...'
  }
}
</script>

<template>
  <div class="footer-container">
    <!-- 底部状态栏 -->
    <footer class="footer bg-white border-t border-gray-200 px-6 py-3 h-16">
      <div class="flex items-center justify-between h-full">
        <!-- 左侧版本信息 -->
        <div class="version-info">
          <span class="text-sm text-gray-600">版本: v1.0.0</span>
        </div>
        
        <!-- 右侧导航 -->
        <div class="nav-items flex items-center space-x-6">
          <!-- 沙盒环境 -->
          <button 
            @click="togglePanel('sandbox')"
            :class="[
              'nav-item flex items-center space-x-2 p-2 rounded transition-colors',
              props.activePanel === 'sandbox' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100 text-gray-700'
            ]"
          >
            <div class="w-4 h-4 bg-blue-500 rounded"></div>
            <span class="text-sm">沙盒环境</span>
          </button>
          
          <!-- 显示日志 -->
          <button 
            @click="togglePanel('logs')"
            :class="[
              'nav-item flex items-center space-x-2 p-2 rounded transition-colors',
              props.activePanel === 'logs' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100 text-gray-700'
            ]"
          >
            <div class="w-4 h-4 bg-green-500 rounded"></div>
            <span class="text-sm">显示日志</span>
          </button>
        </div>
      </div>
    </footer>
    
    <!-- 可折叠面板 -->
    <div 
      v-if="props.activePanel && (props.activePanel === 'sandbox' || props.activePanel === 'logs')" 
      class="collapsible-panel bg-white border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden"
      :class="props.activePanel ? 'h-64' : 'h-0'"
    >
      <div class="h-full p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-gray-800">{{ panelContent[props.activePanel]?.title }}</h3>
          <button 
            @click="togglePanel(props.activePanel)"
            class="text-gray-500 hover:text-gray-700 p-2 rounded hover:bg-gray-100"
          >
            ✕
          </button>
        </div>
        <div class="text-gray-600 h-full overflow-auto">
          {{ panelContent[props.activePanel]?.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collapsible-panel {
  transition: height 0.3s ease-in-out;
}
</style>