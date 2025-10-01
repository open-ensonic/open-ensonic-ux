<template>
  <div class="w-64 h-screen bg-[#1d1e21] text-gray-200 flex flex-col">
    <!-- 头部标题 -->
    <div class="flex items-center px-4 py-3 border-b border-[#26272a]">
      <div class="flex items-center space-x-2">
        <div class="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
          <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
          </svg>
        </div>
        <span class="text-sm font-medium">组件</span>
      </div>
      <div class="ml-auto flex space-x-1">
        <button class="w-4 h-4 rounded-full bg-green-500 hover:bg-green-400"></button>
        <button class="w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-400"></button>
        <button class="w-4 h-4 rounded-full bg-red-500 hover:bg-red-400"></button>
      </div>
    </div>

    <!-- 搜索框 -->
    <div class="px-4 py-3">
      <div class="relative">
        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input 
          type="text" 
          placeholder="搜索入组件名称"
          class="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          v-model="searchQuery"
        >
      </div>
    </div>

    <!-- 菜单列表 -->
    <div class="flex-1 overflow-y-auto">
      <nav class="px-2">
        <!-- 可折叠菜单项 -->
        <div v-for="item in menuItems" :key="item.id" class="mb-1">
          <button 
            @click="toggleItem(item.id)"
            class="w-full flex items-center px-2 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-md transition-colors duration-150"
            :class="{ 'bg-gray-700': item.isExpanded }"
          >
            <svg 
              class="w-4 h-4 mr-2 transition-transform duration-150"
              :class="{ 'rotate-90': item.isExpanded }"
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
            <span>{{ item.name }}</span>
          </button>
          
          <!-- 子菜单 -->
          <div v-if="item.isExpanded && item.children" class="ml-6 mt-1 space-y-1">
            <div v-for="child in item.children" :key="child.id">
              <button 
                @click="selectItem(child)"
                class="w-full text-left px-2 py-1.5 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-md transition-colors duration-150"
                :class="{ 'bg-gray-700 text-gray-200': child.isSelected }"
              >
                {{ child.name }}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const searchQuery = ref('')

const menuItems = reactive([
  {
    id: 'layout',
    name: '布尔运算符',
    isExpanded: false,
    children: []
  },
  {
    id: 'form',
    name: '字节运算符',
    isExpanded: false,
    children: []
  },
  {
    id: 'display',
    name: '信道化器',
    isExpanded: false,
    children: []
  },
  {
    id: 'model',
    name: '信道模型',
    isExpanded: false,
    children: []
  },
  {
    id: 'code',
    name: '编码',
    isExpanded: false,
    children: []
  },
  {
    id: 'control',
    name: '控制器口',
    isExpanded: false,
    children: []
  },
  {
    id: 'test',
    name: '测试工具',
    isExpanded: false,
    children: []
  },
  {
    id: 'function',
    name: '已有功能',
    isExpanded: false,
    children: []
  },
  {
    id: 'math',
    name: '数学电视',
    isExpanded: false,
    children: []
  },
  {
    id: 'audio',
    name: '音频',
    isExpanded: true,
    children: [
      { id: 'audio-1', name: 'A律音频解码器', isSelected: false },
      { id: 'audio-2', name: '音频接收器', isSelected: false },
      { id: 'audio-3', name: '音频源', isSelected: false },
      { id: 'audio-4', name: 'CVSD音频解码器（原始比特流）', isSelected: false },
      { id: 'audio-5', name: 'CVSD音频编码器（原始比特流）', isSelected: false },
      { id: 'audio-6', name: 'CVSD解码器', isSelected: false },
      { id: 'audio-7', name: 'CVSD编码器', isSelected: false },
      { id: 'audio-8', name: '9711 A律音频解码器', isSelected: false },
      { id: 'audio-9', name: '9721音频解码器', isSelected: false },
      { id: 'audio-10', name: 'G.721音频解码器', isSelected: false },
      { id: 'audio-11', name: 'G.723 24kbps音频解码器', isSelected: false },
      { id: 'audio-12', name: 'G.723音频解码器', isSelected: false },
      { id: 'audio-13', name: 'G.723 40kbps音频解码器', isSelected: false },
      { id: 'audio-14', name: 'G.723 40kbps音频编码器', isSelected: false },
      { id: 'audio-15', name: 'μ律音频解码器', isSelected: false },
      { id: 'audio-16', name: 'μ律音频编码器', isSelected: false }
    ]
  },
  {
    id: 'equalizer',
    name: '均衡器',
    isExpanded: false,
    children: []
  },
  {
    id: 'condition',
    name: '条件编码',
    isExpanded: false,
    children: []
  },
  {
    id: 'support',
    name: '支持运算符',
    isExpanded: false,
    children: []
  },
  {
    id: 'filter',
    name: '滤波器',
    isExpanded: false,
    children: []
  },
  {
    id: 'analysis',
    name: '频谱分析',
    isExpanded: false,
    children: []
  },
  {
    id: 'gui',
    name: 'GUI组件',
    isExpanded: false,
    children: []
  }
])

const toggleItem = (itemId) => {
  const item = menuItems.find(item => item.id === itemId)
  if (item) {
    item.isExpanded = !item.isExpanded
  }
}

const selectItem = (child) => {
  // 清除所有选中状态
  menuItems.forEach(item => {
    if (item.children) {
      item.children.forEach(c => c.isSelected = false)
    }
  })
  // 设置当前选中
  child.isSelected = true
  
  // 触发选择事件
  emit('item-selected', child)
}

const emit = defineEmits(['item-selected'])
</script>