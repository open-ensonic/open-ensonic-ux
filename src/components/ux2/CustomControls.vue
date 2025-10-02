<script setup>
import { ref } from 'vue'

const emit = defineEmits(['zoom-in', 'zoom-out', 'fit-view', 'lock-toggle'])

const isLocked = ref(false)

const handleZoomIn = () => {
  emit('zoom-in')
}

const handleZoomOut = () => {
  emit('zoom-out')
}

const handleFitView = () => {
  emit('fit-view')
}

const handleLockToggle = () => {
  isLocked.value = !isLocked.value
  emit('lock-toggle', isLocked.value)
}
</script>

<template>
  <div class="custom-controls">
    <div class="control-group">
      <!-- 缩放控制 -->
      <button
        class="control-btn"
        @click="handleZoomIn"
        title="放大"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
      </button>
      <button
        class="control-btn"
        @click="handleZoomOut"
        title="缩小"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 13H5v-2h14v2z"/>
        </svg>
      </button>

      <!-- 视图控制 -->
      <button
        class="control-btn"
        @click="handleFitView"
        title="适应视图"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
        </svg>
      </button>

      <!-- 锁定控制 -->
      <button
        class="control-btn"
        @click="handleLockToggle"
        :class="{ 'active': isLocked }"
        :title="isLocked ? '解锁画布' : '锁定画布'"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path v-if="isLocked" d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6z"/>
          <path v-else d="M12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-5h-1V6c0-2.76-2.24-5-5-5-2.28 0-4.27 1.54-4.84 3.75-.14.54.18 1.08.72 1.22.54.14 1.08-.18 1.22-.72C9.44 3.93 10.63 3 12 3c1.65 0 3 1.35 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.custom-controls {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.control-group {
  display: flex;
  gap: 0;
  background: white;
  border-radius: 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.control-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: #64748b;
}


.control-btn:hover {
  background: #f1f5f9;
  color: #334155;
}

.control-btn.active {
  background: #f1f5f9;
  color: gray;
}

.control-btn:active {
  transform: scale(0.95);
}

/* 暗色模式支持 */
@media (prefers-color-scheme: dark) {
  .control-group {
    background: #374151;
  }

  .control-btn {
    color: #9ca3af;
    border-right-color: #4b5563;
  }

  .control-btn:hover {
    background: #4b5563;
    color: #e5e7eb;
  }

  .control-btn.active {
    background: #2563eb;
    color: white;
  }
}
</style>
