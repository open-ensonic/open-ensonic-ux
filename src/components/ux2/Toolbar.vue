<script setup>
// 工具栏组件
</script>

<template>
  <div class="toolbar bg-white border-b border-gray-200 px-6 py-3">
    <div class="flex items-center justify-between">
      <!-- 左侧12个图标 -->
      <div class="flex items-center space-x-4">
        <div v-for="i in 12" :key="i" class="tool-icon">
          <div class="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
            <span class="text-xs text-gray-600">{{ i }}</span>
          </div>
        </div>
      </div>
      
      <!-- 右侧4个图标 -->
      <div class="flex items-center space-x-4">
        <div v-for="i in 4" :key="i" class="tool-icon">
          <div class="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
            <span class="text-xs text-blue-600">{{ i + 12 }}</span>
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