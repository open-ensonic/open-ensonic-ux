<script setup>
import Toolbar from './Toolbar.vue'
import FlowCanvas from './FlowCanvas.vue'
// 右侧主界面组件
</script>

<template>
  <main class="main-content flex flex-col w-full h-full">
    <!-- 工具栏 -->
    <Toolbar />
    
    <!-- 内容区域 - Vue Flow画布 -->
    <div class="content-area flex-1 bg-red-500">
      <FlowCanvas />
    </div>
  </main>
</template>

<style scoped>
/* 保留空样式块以保持结构完整性 */
</style>