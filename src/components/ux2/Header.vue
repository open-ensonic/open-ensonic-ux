<script setup>
// 顶部导航栏组件
</script>

<template>
  <header class="bg-white shadow-sm border-b border-gray-200 h-16 px-6">
    <div class="flex items-center justify-between h-full">
      <!-- 左侧：logo和文件名 -->
      <div class="flex items-center space-x-4">
        <div class="text-xl font-bold text-gray-800 bg-red-500">Open Ensonic</div>
        <div class="bg-gray-100 px-3 py-1 rounded text-sm text-gray-600 border border-gray-300">
          未命名文件.ux
        </div>
      </div>

      <!-- 中间：导航菜单 -->
      <nav class="flex items-center space-x-8">
        <a href="#" class="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors">
          <div class="w-6 h-6 bg-gray-300 rounded mb-1"></div>
          <span class="text-xs">打开文件</span>
        </a>
        <a href="#" class="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors">
          <div class="w-6 h-6 bg-gray-300 rounded mb-1"></div>
          <span class="text-xs">创建文件</span>
        </a>
        <a href="#" class="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors">
          <div class="w-6 h-6 bg-gray-300 rounded mb-1"></div>
          <span class="text-xs">清空画布</span>
        </a>
        <a href="#" class="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors">
          <div class="w-6 h-6 bg-gray-300 rounded mb-1"></div>
          <span class="text-xs">保存PDF</span>
        </a>
      </nav>

      <!-- 右侧：保存信息 -->
      <div class="flex items-center space-x-4">
        <div class="text-sm text-gray-500">最近保存: 2分钟前</div>
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
          保存文件
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* 保留空样式块以保持结构完整性 */
</style>