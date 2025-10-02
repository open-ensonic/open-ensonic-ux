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
      <div class="file-info flex items-center gap-5">{{ currentFile }}
        <img :src="edit" class="w-4 h-4 opacity-35" />
      </div>
    </div>
    <div class="menu-right">
      <div v-for="(icon, index) in iconButtons" :key="index" class="relative group" @click="handleIconClick(icon, index)">
        <img :src="icon.src" class="w-8 h-8 p-2 cursor-pointer text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors duration-150 hover:brightness-0 hover:invert hover:scale-110 transition-all duration-200" />
        <!-- 自定义 Tooltip -->
        <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
          <div class="bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
            {{ icon.tooltip }}
            <!-- 向下箭头 -->
            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800"></div>
          </div>
        </div>
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
import edit from '@/assets/images2/edit.svg'


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
        name: '文件(F)',
        submenu: ['新建', '打开', '保存', '另存为', '退出']
      },
      {
        name: '编辑(E)',
        submenu: ['撤销', '重做', '复制', '粘贴', '删除']
      },
      {
        name: '视图(V)',
        submenu: ['放大', '缩小', '清除']
      },
      {
        name: '运行(R)',
        submenu: ['生成', '执行', '终止']
      },
      {
        name: '工具(T)',
        submenu: ['滤波器设计工具', '设置默认主题']
      },
      {
        name: '帮助(H)',
        submenu: ['类型', '快捷键', '关于']
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
  height: 48px;
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
  color: #ccc;
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
  padding: 4px 20px;
  border: 1px solid #3a3b40;
  border-radius: 6px;
  background-color: #2c2d32;
}

.menu-right {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>