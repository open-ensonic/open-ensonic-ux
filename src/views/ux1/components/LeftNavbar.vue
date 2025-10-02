<template>
  <div class="w-12 h-screen bg-[#222327] flex flex-col items-center py-4 border-r-2 border-[#26272a]">
    <!-- 导航图标列表 -->
    <div class="flex flex-col space-y-4">
      <button v-for="(item, index) in topNavItems" :key="index" @click="setActive(index)" :class="[
        'rounded-lg w-8 h-8 flex items-center justify-center transition-colors duration-200 cursor-pointer',
        activeItem === index ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/10'
      ]">
        <!-- 图片图标 -->
        <img :src="item" class="w-4 h-4 transition-all duration-200" :class="activeItem === index ? 'filter brightness-0 invert' : 'opacity-50 hover:filter hover:brightness-0 hover:invert'">
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


const setActive = (item) => {
  activeItem.value = item
  emit('nav-change', item)
}

const emit = defineEmits(['nav-change'])
</script>
