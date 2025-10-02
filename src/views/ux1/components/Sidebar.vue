<template>
  <div class="w-64 h-screen  bg-[#1d1e21] text-gray-200 flex flex-col ">
    <!-- 头部标题 -->
    <div class="flex items-center px-4 py-1 border-b border-[#26272a]">
      <div class="flex items-center space-x-2">
        <div class=" rounded-sm flex items-center justify-center">
          <img :src="objectsColumn" class="w-4 h-4 opacity-60" />
        </div>
        <span class="text-sm text-gray-2100">组件</span>
      </div>
      <!-- 右侧按钮 -->
      <div class="ml-auto flex space-x-1">
        <div class="relative group">
          <img :src="search" class="w-8 h-8 p-2 cursor-pointer text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors duration-150 hover:brightness-0 hover:invert hover:scale-110 transition-all duration-200" />
          <!-- 自定义 Tooltip -->
          <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
            <div class="bg-neutral-200 text-black text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
              搜索
              <!-- 向下箭头 -->
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-neutral-200"></div>
            </div>
          </div>
        </div>
        <div class="relative group" >
          <img :src="rotateLeft" class="w-8 h-8 p-2 cursor-pointer text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors duration-150 hover:brightness-0 hover:invert hover:scale-110 transition-all duration-200" />
          <!-- 自定义 Tooltip -->
          <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
            <div class="bg-neutral-200 text-black text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
              全部折叠
              <!-- 向下箭头 -->
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-neutral-200"></div>
            </div>
          </div>
        </div>
        <div class="relative group">
          <img :src="angleLeft" class="w-8 h-8 p-2 cursor-pointer text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors duration-150 hover:brightness-0 hover:invert hover:scale-110 transition-all duration-200" />
          <!-- 自定义 Tooltip -->
          <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
            <div class="bg-neutral-200 text-black text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
              关闭面板
              <!-- 向下箭头 -->
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-neutral-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 搜索框 -->
    <div class="px-4 py-3">
      <div class="relative">
        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black" fill="none"
          stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" placeholder="搜索入组件名称"
          class="w-full pl-10 pr-4 py-2 bg-[#6f7074] border border-[#6f7074] rounded-md text-sm text-neutral-900 placeholder-black focus:outline-none focus:border-transparent"
          v-model="searchQuery">
      </div>
    </div>

    <!-- 菜单列表 -->
    <div class="flex-1 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <nav class="px-2">
        <!-- 可折叠菜单项 -->
        <div v-for="item in menuItems" :key="item.id" class="mb-1">
          <button @click="toggleItem(item.id)"
            class="w-full flex items-center px-2 py-1 text-[13px] text-gray-300 hover:bg-white/10 rounded-md transition-colors duration-150"
            :class="{ 'bg-white/5': item.isExpanded }">
            <svg class="w-4 h-4 mr-2 transition-transform duration-150 text-gray-500" :class="{ 'rotate-90': item.isExpanded }"
              fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
            </svg>
            <span>{{ item.name }}</span>
          </button>

          <!-- 子菜单 -->
          <div v-if="item.isExpanded && item.children" class="ml-6 mt-1 space-y-1">
            <div v-for="child in item.children" :key="child.id">
              <button @click="selectItem(child)"
                class="w-full text-left px-2 py-1 text-[13px] text-gray-300 hover:text-gray-200 hover:bg-white/20 rounded-md transition-colors duration-150"
                :class="{ 'bg-white/5 text-gray-200': child.isSelected }">
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
import objectsColumn from '@/assets/images2/objects-column_gray.svg'
import search from '@/assets/images2/search.svg'
import rotateLeft from '@/assets/images2/rotate-left.svg'
import angleLeft from '@/assets/images2/angle-left.svg'
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
  menuItems.forEach((item) => {
    if (item.id === itemId) {
      item.isExpanded = !item.isExpanded
    } else {
      item.isExpanded = false
    }
  })
  // const item = menuItems.find(item => item.id === itemId)
  // if (item) {
  //   item.isExpanded = !item.isExpanded
  // }
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


