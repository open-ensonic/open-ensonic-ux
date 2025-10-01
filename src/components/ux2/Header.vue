<script setup>
// 顶部导航栏组件
const editIcon = new URL('/src/assets/images/edit.svg', import.meta.url).href
const openFileIcon = new URL('/src/assets/images/folder-open.svg', import.meta.url).href
const createFileIcon = new URL('/src/assets/images/add-folder.svg', import.meta.url).href
const clearCanvasIcon = new URL('/src/assets/images/trash.svg', import.meta.url).href
const savePdfIcon = new URL('/src/assets/images/file-pdf.svg', import.meta.url).href
const saveIcon = new URL('/src/assets/images/disk.svg', import.meta.url).href
</script>

<template>
  <header class="bg-white shadow/8 relative z-10 px-4 py-2 ">
    <div class="flex items-center justify-between">
      <!-- 左侧：logo和文件名 -->
      <div class="flex items-center  gap-6 ">
        <div class="text-lg font-bold text-[#193fe0] font-['Arial']">LOGO</div>
        <div class="bg-gray-100 px-3 py-1 rounded text-sm text-gray-400 flex items-center gap-2">
          <span>file_000.enh</span>
          <img :src="editIcon" alt="编辑" class="w-4 h-4">
        </div>
      </div>

      <!-- 中间：导航菜单 -->
      <nav class="flex items-center space-x-8">
        <a href="#" class="flex flex-col items-center text-gray-500 hover:text-gray-800 transition-colors">
          <img :src="openFileIcon" alt="打开文件" class="w-3 h-3 mb-1">
          <span class="text-xs">打开文件</span>
        </a>
        <a href="#" class="flex flex-col items-center text-gray-500 hover:text-gray-800 transition-colors">
          <img :src="createFileIcon" alt="创建文件" class="w-3 h-3 mb-1">
          <span class="text-xs">创建文件</span>
        </a>
        <a href="#" class="flex flex-col items-center text-gray-500 hover:text-gray-800 transition-colors">
          <img :src="clearCanvasIcon" alt="清空画布" class="w-3 h-3 mb-1">
          <span class="text-xs">清空画布</span>
        </a>
        <a href="#" class="flex flex-col items-center text-gray-500 hover:text-gray-800 transition-colors">
          <img :src="savePdfIcon" alt="保存PDF" class="w-3 h-3mb-1">
          <span class="text-xs">保存PDF</span>
        </a>
      </nav>

      <!-- 右侧：保存信息 -->
      <div class="flex items-center space-x-4">
        <div class="text-xs text-gray-500">
          <div>最近保存:</div><div class="text-black">2025/10/20 14:25</div></div>
        <div class="bg-gradient-to-br from-[#ff567b] to-[#ff8caf] font-bold text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-sm flex items-center gap-2">
          <img :src="saveIcon" alt="保存" class="w-4 h-4">
          <span>保存文件</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* 保留空样式块以保持结构完整性 */
</style>
