<template>
  <div class="h-10 bg-[#191a1d] border-b border-[#292a2d] flex items-center px-4 space-x-1">
    <!-- 左侧工具按钮组 -->
    <div class="flex items-center space-x-1">
      <div v-for="(tool, index) in leftTools" :key="index">
        <div v-if="tool" class="relative group" @click="handleToolClick(tool)">
          <img :src="tool.src"
            class="w-8 h-8 p-2 cursor-pointer text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors duration-150 hover:brightness-0 hover:invert hover:scale-110 transition-all duration-200" />
          <!-- 自定义 Tooltip -->
          <div
            class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
            <div class="bg-neutral-200 text-black text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
              {{ tool.tooltip }}
              <!-- 向下箭头 -->
              <div
                class="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-neutral-200">
              </div>
            </div>
          </div>
        </div>
        <div v-else class="w-px h-6 bg-gray-600 mx-2"></div>
      </div>
    </div>

    <!-- 右侧状态按钮组 -->
    <div class="ml-auto flex items-center space-x-1">
      <div v-for="(tool, index) in statusTools" :key="index" class="relative group" @click="handleToolClick(tool)">
        <img :src="tool.src"
          class="w-8 h-8 p-2 cursor-pointer text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors duration-150 hover:brightness-0 hover:invert hover:scale-110 transition-all duration-200" />
        <!-- 自定义 Tooltip -->
        <div
          class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
          <div class="bg-neutral-200 text-black text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
            {{ tool.tooltip }}
            <!-- 向下箭头 -->
            <div
              class="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-neutral-200">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import scissors from '@/assets/images2/scissors.svg'
import crossCircle from '@/assets/images2/cross-circle.svg'
import clone from '@/assets/images2/clone.svg'
import paste from '@/assets/images2/paste.svg'
import undo from '@/assets/images2/undo.svg'
import redo from '@/assets/images2/redo.svg'
import rotateLeft from '@/assets/images2/rotate-left2.svg'
import rotateRight from '@/assets/images2/rotate-right.svg'
import sub from '@/assets/images2/subtitles.svg'
import subSlash from '@/assets/images2/subtitles-slash.svg'
import chevron from '@/assets/images2/chevron-double-dots-right.svg'
import data from '@/assets/images2/data-transfer.svg'
import exclamation from '@/assets/images2/exclamation.svg'
import play from '@/assets/images2/play.svg'
import stop from '@/assets/images2/stop.svg'
import features from '@/assets/images2/features.svg'

// 左侧工具按钮
const leftTools = reactive([
  {
    tooltip: '剪切',
    src: scissors
  },
  {
    tooltip: '删除',
    src: crossCircle
  },
  {
    tooltip: '复制',
    src: clone
  },
  {
    tooltip: '粘贴',
    src: paste
  },
  null,
  {
    tooltip: '撤回',
    src: undo
  },
  {
    tooltip: '重做',
    src: redo
  },
  null,
  {
    tooltip: '左旋转',
    src: rotateLeft
  },
  {
    tooltip: '右旋转',
    src: rotateRight
  },
  null,
  {
    tooltip: '撤回',
    src: sub
  },
  {
    tooltip: '重做',
    src: subSlash
  },
  {
    tooltip: '左旋转',
    src: chevron
  },
  {
    tooltip: '右旋转',
    src: data
  },
])


// 右侧状态按钮
const statusTools = reactive([
  {
    tooltip: '错误',
    src: exclamation
  },
  {
    tooltip: '运行',
    src: play
  },
  {
    tooltip: '停止',
    src: stop
  },
  {
    tooltip: '生成代码',
    src: features
  },

])

const handleToolClick = (tool) => {
  // 发射事件给父组件
  emit('tool-click', tool)
}

const emit = defineEmits(['tool-click'])
</script>