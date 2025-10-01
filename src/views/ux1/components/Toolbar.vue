<template>
  <div class="h-10 bg-[#191a1d] border-b border-[#26272a] flex items-center px-4 space-x-1">
    <!-- 左侧工具按钮组 -->
    <div class="flex items-center space-x-1">
      <button 
        v-for="tool in leftTools" 
        :key="tool.id"
        @click="handleToolClick(tool)"
        class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors duration-150"
        :class="{ 'bg-gray-700 text-white': tool.isActive }"
        :title="tool.tooltip"
      >
        <svg class="w-4 h-4" :fill="tool.fill" :stroke="tool.stroke" viewBox="0 0 24 24">
          <path 
            v-for="(path, index) in tool.paths" 
            :key="index"
            :stroke-linecap="path.strokeLinecap" 
            :stroke-linejoin="path.strokeLinejoin" 
            :stroke-width="path.strokeWidth"
            :d="path.d"
            :fill-rule="path.fillRule"
            :clip-rule="path.clipRule"
          />
        </svg>
      </button>
    </div>

    <!-- 分隔线 -->
    <div class="w-px h-6 bg-gray-600 mx-2"></div>

    <!-- 中间工具按钮组 -->
    <div class="flex items-center space-x-1">
      <button 
        v-for="tool in middleTools" 
        :key="tool.id"
        @click="handleToolClick(tool)"
        class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors duration-150"
        :class="{ 'bg-gray-700 text-white': tool.isActive }"
        :title="tool.tooltip"
      >
        <svg class="w-4 h-4" :fill="tool.fill" :stroke="tool.stroke" viewBox="0 0 24 24">
          <path 
            v-for="(path, index) in tool.paths" 
            :key="index"
            :stroke-linecap="path.strokeLinecap" 
            :stroke-linejoin="path.strokeLinejoin" 
            :stroke-width="path.strokeWidth"
            :d="path.d"
            :fill-rule="path.fillRule"
            :clip-rule="path.clipRule"
          />
        </svg>
      </button>
    </div>

    <!-- 分隔线 -->
    <div class="w-px h-6 bg-gray-600 mx-2"></div>

    <!-- 右侧工具按钮组 -->
    <div class="flex items-center space-x-1">
      <button 
        v-for="tool in rightTools" 
        :key="tool.id"
        @click="handleToolClick(tool)"
        class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors duration-150"
        :class="{ 'bg-gray-700 text-white': tool.isActive }"
        :title="tool.tooltip"
      >
        <svg class="w-4 h-4" :fill="tool.fill" :stroke="tool.stroke" viewBox="0 0 24 24">
          <path 
            v-for="(path, index) in tool.paths" 
            :key="index"
            :stroke-linecap="path.strokeLinecap" 
            :stroke-linejoin="path.strokeLinejoin" 
            :stroke-width="path.strokeWidth"
            :d="path.d"
            :fill-rule="path.fillRule"
            :clip-rule="path.clipRule"
          />
        </svg>
      </button>
    </div>

    <!-- 右侧状态按钮组 -->
    <div class="ml-auto flex items-center space-x-1">
      <button 
        v-for="tool in statusTools" 
        :key="tool.id"
        @click="handleToolClick(tool)"
        class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors duration-150"
        :class="{ 'bg-gray-700 text-white': tool.isActive }"
        :title="tool.tooltip"
      >
        <svg class="w-4 h-4" :fill="tool.fill" :stroke="tool.stroke" viewBox="0 0 24 24">
          <path 
            v-for="(path, index) in tool.paths" 
            :key="index"
            :stroke-linecap="path.strokeLinecap" 
            :stroke-linejoin="path.strokeLinejoin" 
            :stroke-width="path.strokeWidth"
            :d="path.d"
            :fill-rule="path.fillRule"
            :clip-rule="path.clipRule"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

// 左侧工具按钮
const leftTools = reactive([
  {
    id: 'close',
    tooltip: '关闭',
    fill: 'none',
    stroke: 'currentColor',
    isActive: false,
    paths: [
      {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        d: 'M6 18L18 6M6 6l12 12'
      }
    ]
  },
  {
    id: 'target',
    tooltip: '目标',
    fill: 'none',
    stroke: 'currentColor',
    isActive: false,
    paths: [
      {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z'
      }
    ]
  },
  {
    id: 'refresh',
    tooltip: '刷新',
    fill: 'none',
    stroke: 'currentColor',
    isActive: false,
    paths: [
      {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        d: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
      }
    ]
  },
  {
    id: 'undo',
    tooltip: '撤销',
    fill: 'none',
    stroke: 'currentColor',
    isActive: false,
    paths: [
      {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        d: 'M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6'
      }
    ]
  }
])

// 中间工具按钮
const middleTools = reactive([
  {
    id: 'redo',
    tooltip: '重做',
    fill: 'none',
    stroke: 'currentColor',
    isActive: false,
    paths: [
      {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        d: 'M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6'
      }
    ]
  },
  {
    id: 'rotate-left',
    tooltip: '向左旋转',
    fill: 'none',
    stroke: 'currentColor',
    isActive: false,
    paths: [
      {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        d: 'M1 4v6h6M2.05 10.95A8 8 0 1110 2.05'
      }
    ]
  },
  {
    id: 'rotate-right',
    tooltip: '向右旋转',
    fill: 'none',
    stroke: 'currentColor',
    isActive: false,
    paths: [
      {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        d: 'M23 4v6h-6M21.95 10.95A8 8 0 1114 2.05'
      }
    ]
  }
])

// 右侧工具按钮
const rightTools = reactive([
  {
    id: 'message',
    tooltip: '消息',
    fill: 'none',
    stroke: 'currentColor',
    isActive: false,
    paths: [
      {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
      }
    ]
  },
  {
    id: 'share',
    tooltip: '分享',
    fill: 'none',
    stroke: 'currentColor',
    isActive: false,
    paths: [
      {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        d: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
      }
    ]
  },
  {
    id: 'arrow',
    tooltip: '箭头',
    fill: 'none',
    stroke: 'currentColor',
    isActive: false,
    paths: [
      {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        d: 'M17 8l4 4m0 0l-4 4m4-4H3'
      }
    ]
  },
  {
    id: 'settings',
    tooltip: '设置',
    fill: 'none',
    stroke: 'currentColor',
    isActive: false,
    paths: [
      {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
      },
      {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z'
      }
    ]
  }
])

// 右侧状态按钮
const statusTools = reactive([
  {
    id: 'info',
    tooltip: '信息',
    fill: 'currentColor',
    stroke: 'none',
    isActive: false,
    paths: [
      {
        fillRule: 'evenodd',
        d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z',
        clipRule: 'evenodd'
      }
    ]
  },
  {
    id: 'play',
    tooltip: '播放',
    fill: 'currentColor',
    stroke: 'none',
    isActive: false,
    paths: [
      {
        d: 'M8 5v14l11-7z'
      }
    ]
  },
  {
    id: 'stop',
    tooltip: '停止',
    fill: 'currentColor',
    stroke: 'none',
    isActive: false,
    paths: [
      {
        d: 'M6 6h12v12H6z'
      }
    ]
  },
  {
    id: 'expand',
    tooltip: '展开',
    fill: 'none',
    stroke: 'currentColor',
    isActive: false,
    paths: [
      {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        d: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
      }
    ]
  }
])

const handleToolClick = (tool) => {
  // 切换激活状态
  tool.isActive = !tool.isActive
  
  // 发射事件给父组件
  emit('tool-click', tool)
}

const emit = defineEmits(['tool-click'])
</script>