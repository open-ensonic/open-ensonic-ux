<template>
  <div class="menu-bar">
    <div class="menu-left">
      <div class="logo">{{ logo }}</div>
      <div class="menu-items">
        <div v-for="item in menuItems" :key="item.name" class="menu-item" @mouseenter="showSubmenu(item.name)"
          @mouseleave="hideSubmenu">
          {{ item.name }}
          <!-- 子菜单 -->
          <div v-if="activeSubmenu === item.name && item.submenu" class="submenu" @mouseenter="keepSubmenu"
            @mouseleave="hideSubmenu">
            <div v-for="subItem in item.submenu" :key="subItem" class="submenu-item"
              @click="handleSubmenuClick(item.name, subItem)">
              {{ subItem }}
            </div>
          </div>
        </div>
      </div>
      <div class="file-info">{{ currentFile }}</div>
    </div>
    <div class="menu-right">
      <div v-for="(icon, index) in iconButtons" :key="index" class="icon-button" @click="handleIconClick(icon, index)"
        :title="icon.tooltip">
        <img :src="icon.src" class="w-4 h-4 hover:brightness-0 hover:invert" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

import folderOpen from '@/assets/images2/folder-open.svg'
import addFolder from '@/assets/images2/add-folder.svg'
import trash from '@/assets/images2/trash.svg'
import pdf from '@/assets/images2/file-pdf.svg'
import save from '@/assets/images2/disk.svg'

const iconButtons = ref([
  {
    tooltip: '打开文件',
    src: folderOpen
  },
  {
    tooltip: '创建文件',
    src: addFolder
  },
  {
    tooltip: '清空画布',
    src: trash
  },
  {
    tooltip: '导出pdf',
    src: pdf
  },
  {
    tooltip: '保存文件',
    src: save
  },
])

// 子菜单状态
const activeSubmenu = ref(null)

// Props
const props = defineProps({
  logo: {
    type: String,
    default: 'LOGO'
  },
  menuItems: {
    type: Array,
    default: () => [
      {
        name: 'File',
        submenu: ['New', 'Open', 'Save', 'Save As', 'Quit']
      },
      {
        name: 'Edit',
        submenu: ['Undo', 'Redo', 'Copy', 'Paste', 'Delete']
      },
      {
        name: 'View',
        submenu: ['Zoom In', 'Zoom Out', 'Clear']
      },
      {
        name: 'Run',
        submenu: ['Generate', 'Execute', 'Kill']
      },
      {
        name: 'Tools',
        submenu: ['Filter Design Tool', 'Set Default Theme']
      },
      {
        name: 'Help',
        submenu: ['Types', 'Keys', 'About']
      }
    ]
  },
  currentFile: {
    type: String,
    default: 'file_003.ens'
  },

})

// Events
const emit = defineEmits(['menu-click', 'icon-click', 'submenu-click'])

// Methods
const handleMenuClick = (menuItem) => {
  emit('menu-click', menuItem)
}

const handleIconClick = (icon, index) => {
  emit('icon-click', { icon, index })
}

const showSubmenu = (menuName) => {
  activeSubmenu.value = menuName
}

const hideSubmenu = () => {
  activeSubmenu.value = null
}

const keepSubmenu = () => {
  // 保持子菜单显示状态
}

const handleSubmenuClick = (menuName, subItem) => {
  emit('submenu-click', { menu: menuName, item: subItem })
  hideSubmenu()
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
  color: #32e084;
  padding: 0 8px;
}

.menu-items {
  display: flex;
  gap: 2px;
}

.menu-item {
  position: relative;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 2px;
  transition: background-color 0.2s;
}

.menu-item:hover {
  background-color: #404040;
}

.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #2d2d30;
  border: 1px solid #464647;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  min-width: 160px;
  z-index: 1000;
  padding: 4px 0;
}

.submenu-item {
  padding: 6px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  white-space: nowrap;
}

.submenu-item:hover {
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