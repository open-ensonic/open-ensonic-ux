<template>
  <div class="menu-bar">
    <div class="menu-left">
      <div class="logo">{{ logo }}</div>
      <div class="menu-items">
        <div 
          v-for="item in menuItems" 
          :key="item"
          class="menu-item"
          @click="handleMenuClick(item)"
        >
          {{ item }}
        </div>
      </div>
      <div class="file-info">{{ currentFile }}</div>
    </div>
    <div class="menu-right">
      <div 
        v-for="(icon, index) in iconButtons" 
        :key="index"
        class="icon-button"
        @click="handleIconClick(icon, index)"
        :title="icon.tooltip"
      >
        {{ icon.symbol }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// Props
const props = defineProps({
  logo: {
    type: String,
    default: 'LOGO'
  },
  menuItems: {
    type: Array,
    default: () => ['File', 'Edit', 'View', 'Run', 'Tools', 'Help']
  },
  currentFile: {
    type: String,
    default: 'file_003.ens'
  },
  iconButtons: {
    type: Array,
    default: () => [
      { symbol: '📁', tooltip: 'Open Folder' },
      { symbol: '💾', tooltip: 'Save' },
      { symbol: '📋', tooltip: 'Copy' },
      { symbol: '📄', tooltip: 'New File' },
      { symbol: '⚙️', tooltip: 'Settings' }
    ]
  }
})

// Events
const emit = defineEmits(['menu-click', 'icon-click'])

// Methods
const handleMenuClick = (menuItem) => {
  emit('menu-click', menuItem)
}

const handleIconClick = (icon, index) => {
  emit('icon-click', { icon, index })
}
</script>

<style scoped>
.menu-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222327;
  color: #ffffff;
  height: 32px;
  padding: 0 8px;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.menu-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo {
  font-weight: bold;
  color: #ffffff;
  padding: 0 8px;
}

.menu-items {
  display: flex;
  gap: 2px;
}

.menu-item {
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 2px;
  transition: background-color 0.2s;
}

.menu-item:hover {
  background-color: #404040;
}

.file-info {
  color: #cccccc;
  font-size: 12px;
}

.menu-right {
  display: flex;
  align-items: center;
  gap: 4px;
}

.icon-button {
  padding: 4px 6px;
  cursor: pointer;
  border-radius: 2px;
  transition: background-color 0.2s;
  font-size: 14px;
}

.icon-button:hover {
  background-color: #404040;
}
</style>