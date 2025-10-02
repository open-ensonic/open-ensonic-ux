<script setup>
import { defineProps, defineEmits } from 'vue'

// 左侧边栏组件
const props = defineProps({
  activePanel: {
    type: String,
    default: null
  }
})

// 图标引入
const componentsIcon = new URL('/src/assets/images/objects-column.svg', import.meta.url).href
const modulesIcon = new URL('/src/assets/images/cube.svg', import.meta.url).href
const variablesIcon = new URL('/src/assets/images/puzzle-piece.svg', import.meta.url).href
const historyIcon = new URL('/src/assets/images/code-branch.svg', import.meta.url).href
const topIcon = new URL('/src/assets/images/top.png', import.meta.url).href
const helpIcon = new URL('/src/assets/images/interrogation.svg', import.meta.url).href
const settingsIcon = new URL('/src/assets/images/settings.svg', import.meta.url).href
const bottomIcon = new URL('/src/assets/images/bottom.png', import.meta.url).href

const topMenuItems = [
  { id: 1, icon: componentsIcon, text: '组件', panel: 'components' },
  { id: 2, icon: modulesIcon, text: '模块', panel: 'modules' },
  { id: 3, icon: variablesIcon, text: '变量', panel: 'variables' },
  { id: 4, icon: historyIcon, text: '历史', panel: 'history' }
]

const bottomMenuItems = [
  { id: 5, icon: helpIcon, text: '帮助' },
  { id: 6, icon: settingsIcon, text: '设置' }
]

const togglePanel = (panel) => {
  // 如果点击的是当前激活的面板，则关闭
  if (props.activePanel === panel) {
    emit('panelToggle', null)
  } else {
    // 否则打开新的面板
    emit('panelToggle', panel)
  }
}

// 定义emit
const emit = defineEmits(['panelToggle'])
</script>

<template>
  <aside class="bg-white  w-[90px] h-full flex flex-col shadow relative z-1">
    <!-- 顶部菜单项 -->
    <div class="flex-1 pb-4 ">
      <ul class="space-y-3">
        <li v-for="(item,index) in topMenuItems" :key="item.id" class="menu-item relative">
          <div class="w-[calc(100%+9%)] absolute left-0 top-[-25px] z-2" v-if="index &&  props.activePanel === item.panel">
            <img :src="topIcon" alt="top" class="w-full">
          </div>
          <div class="w-[10px] h-full absolute right-[-5px] top-0 bg-[#eaf2fa] z-2 "  v-if="props.activePanel === item.panel"  />
          <button
            @click="togglePanel(item.panel)"
            :class="[
              'menu-link w-full flex flex-col items-center p-3  cursor-pointer',
              props.activePanel === item.panel ? 'bg-[#eaf2fa] text-blue-700' : 'text-gray-700'
            ]"
          >

            <div class="w-8 h-8 flex items-center justify-center mb-2  ">

              <img
                :src="item.icon"
                :alt="item.text"
                class="w-6 h-6 transition-colors duration-200"
                :style="{ filter: props.activePanel === item.panel ? 'invert(18%) sepia(90%) saturate(3000%) hue-rotate(220deg)' : 'invert(42%) sepia(8%) saturate(800%) hue-rotate(210deg)' }"
              />

            </div>
            <span :class="['text-sm', props.activePanel === item.panel ? 'font-bold' : '']">{{ item.text }}</span>
          </button>
          <div class="w-[calc(100%+9%)] absolute left-0 bottom-[-25px] z-2 "  v-if="props.activePanel === item.panel" >
            <img :src="bottomIcon" alt="top" class="w-full">
          </div>
        </li>
      </ul>
    </div>

    <!-- 底部菜单项 -->
    <div class="p-4 ">
      <ul class="space-y-2">
        <li v-for="item in bottomMenuItems" :key="item.id" class="menu-item">
          <a href="#" class="menu-link flex flex-col items-center p-3 rounded-lg text-gray-700">
            <div class="w-8 h-8 flex items-center justify-center mb-2">
              <img :src="item.icon" :alt="item.text" class="w-6 h-6">
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
