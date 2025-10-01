<template>
  <div class="w-12 h-screen bg-[#222327] flex flex-col items-center py-4 border-r-2 border-[#26272a]">
    <!-- 导航图标列表 -->
    <div class="flex flex-col space-y-4">
      <button v-for="(item, index) in topNavItems" :key="index" @click="setActive(index)" :class="[
        'rounded-lg w-8 h-8 flex items-center justify-center transition-colors duration-200',
        activeItem === index ? 'bg-white/20' : 'text-gray-400 hover:text-white hover:bg-white/20'
      ]">
        <!-- 图片图标 -->
        <img :src="item" class="w-4 h-4" :class="activeItem === index ? '': 'opacity-50'">
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import codeBranch from '@/assets/images2/code-branch.svg'
import objectsColumn from '@/assets/images2/objects-column.svg'
import cube from '@/assets/images2/cube.svg'
import puzzle from '@/assets/images2/puzzle.svg'
import interrogation from '@/assets/images2/interrogation.svg'
import settings from '@/assets/images2/settings.svg'

const activeItem = ref(0)

// 顶部导航按钮数据
const topNavItems = [objectsColumn, cube, puzzle, codeBranch, interrogation, settings]

// 底部导航按钮数据
const bottomNavItems = [
  {
    id: 'help',
    iconClass: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    activeClass: 'bg-blue-600 text-white',
    paths: [
      {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        d: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      }
    ]
  },
  {
    id: 'settings',
    iconClass: 'w-5 h-5',
    fill: 'none',
    stroke: 'currentColor',
    activeClass: 'bg-blue-600 text-white',
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
]

const setActive = (item) => {
  activeItem.value = item
  emit('nav-change', item)
}

const emit = defineEmits(['nav-change'])
</script>