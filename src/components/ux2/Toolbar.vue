<script setup>
// 工具栏组件
// 图标引入
const scissorsIcon = new URL('/src/assets/images/scissors.svg', import.meta.url).href
const crossCircleIcon = new URL('/src/assets/images/cross-circle1.svg', import.meta.url).href
const cloneIcon = new URL('/src/assets/images/clone.svg', import.meta.url).href
const pasteIcon = new URL('/src/assets/images/paste.svg', import.meta.url).href
const undoIcon = new URL('/src/assets/images/undo.svg', import.meta.url).href
const redoIcon = new URL('/src/assets/images/redo.svg', import.meta.url).href
const rotateLeftIcon = new URL('/src/assets/images/rotate-left.svg', import.meta.url).href
const rotateRightIcon = new URL('/src/assets/images/rotate-right.svg', import.meta.url).href
const subtitlesIcon = new URL('/src/assets/images/subtitles.svg', import.meta.url).href
const subtitlesSlashIcon = new URL('/src/assets/images/subtitles-slash.svg', import.meta.url).href
const chevronDoubleDotsIcon = new URL('/src/assets/images/chevron-double-dots-right.svg', import.meta.url).href
const dataTransferIcon = new URL('/src/assets/images/data-transfer.svg', import.meta.url).href

// 右侧图标引入
const exclamationIcon = new URL('/src/assets/images/exclamation.svg', import.meta.url).href
const playIcon = new URL('/src/assets/images/play.svg', import.meta.url).href
const stopIcon = new URL('/src/assets/images/stop.svg', import.meta.url).href
const featuresIcon = new URL('/src/assets/images/features.svg', import.meta.url).href

const leftIcons = [
  { icon: scissorsIcon, tooltip: '剪切' },
  { icon: crossCircleIcon, tooltip: '删除' },
  { icon: cloneIcon, tooltip: '复制' },
  { icon: pasteIcon, tooltip: '粘贴' },
  { icon: undoIcon, tooltip: '撤回' },
  { icon: redoIcon, tooltip: '重做' },
  { icon: rotateLeftIcon, tooltip: '左旋转' },
  { icon: rotateRightIcon, tooltip: '右旋转' },
  { icon: subtitlesIcon, tooltip: '启用选中模块' },
  { icon: subtitlesSlashIcon, tooltip: '禁止选中模块' },
  { icon: chevronDoubleDotsIcon, tooltip: '跳过选中模块' },
  { icon: dataTransferIcon, tooltip: '切换禁用块和连接的可见性' }
]

const rightIcons = [
  { icon: exclamationIcon, tooltip: '错误' },
  { icon: playIcon, tooltip: '运行' },
  { icon: stopIcon, tooltip: '停止' },
  { icon: featuresIcon, tooltip: '生成流程图' }
]

const tooltips = [
  '剪切', '删除', '复制', '粘贴',
  '撤回', '重做', '左旋转', '右旋转',
  '启用选中模块', '禁止选中模块', '跳过选中模块', '切换禁用块和连接的可见性',
  '错误', '运行', '停止', '生成流程图'
]
</script>

<template>
  <div class="toolbar bg-[#fafafa] shadow/5 relative z-2 px-2 py-1">
    <div class="flex items-center justify-between">
      <!-- 左侧12个图标 -->
      <div class="flex items-center space-x-4">
        <!-- 1-4组 -->
        <div class="flex items-center space-x-2">
          <div v-for="(item, index) in leftIcons.slice(0, 4)" :key="index" class="tool-icon group relative">
            <div class="w-8 h-8 rounded flex items-center justify-center">
              <img :src="item.icon" :alt="item.tooltip" class="w-4 h-4">
            </div>
            <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              {{ item.tooltip }}
            </div>
          </div>
        </div>
        <div class="h-6 w-[1px] bg-gray-200"></div>

        <!-- 5-6组 -->
        <div class="flex items-center space-x-2">
          <div v-for="(item, index) in leftIcons.slice(4, 6)" :key="index+4" class="tool-icon group relative">
            <div class="w-8 h-8 rounded flex items-center justify-center">
              <img :src="item.icon" :alt="item.tooltip" class="w-4 h-4">
            </div>
            <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              {{ item.tooltip }}
            </div>
          </div>
        </div>
        <div class="h-6 w-[1px] bg-gray-200"></div>

        <!-- 7-8组 -->
        <div class="flex items-center space-x-2">
          <div v-for="(item, index) in leftIcons.slice(6, 8)" :key="index+6" class="tool-icon group relative">
            <div class="w-8 h-8 rounded flex items-center justify-center">
              <img :src="item.icon" :alt="item.tooltip" class="w-4 h-4">
            </div>
            <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              {{ item.tooltip }}
            </div>
          </div>
        </div>
        <div class="h-6 w-[1px] bg-gray-200"></div>

        <!-- 9-12组 -->
        <div class="flex items-center space-x-2">
          <div v-for="(item, index) in leftIcons.slice(8, 12)" :key="index+8" class="tool-icon group relative">
            <div class="w-8 h-8 rounded flex items-center justify-center">
              <img :src="item.icon" :alt="item.tooltip" class="w-4 h-4">
            </div>
            <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              {{ item.tooltip }}
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧4个图标 -->
      <div class="flex items-center space-x-4">
        <div v-for="(item, index) in rightIcons" :key="index" class="tool-icon group relative">
          <div class="w-8 h-8 rounded flex items-center justify-center">
            <img :src="item.icon" :alt="item.tooltip" class="w-4 h-4">
          </div>
          <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
            {{ item.tooltip }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tool-icon {
  cursor: pointer;
  transition: transform 0.2s;
}

.tool-icon:hover {
  transform: scale(1.1);
}
</style>
