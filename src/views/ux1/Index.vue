<script setup>
import MenuBar from '@/views/ux1/components/MenuBar.vue'
import Sidebar from '@/views/ux1/components/Sidebar.vue'
import LeftNavbar from '@/views/ux1/components/LeftNavbar.vue'
import Toolbar from '@/views/ux1/components/Toolbar.vue'

// 处理菜单点击事件
const handleMenuClick = (menuItem) => {
  console.log('Menu clicked:', menuItem)
  // 在这里添加菜单点击的逻辑
}

// 处理图标点击事件
const handleIconClick = ({ icon, index }) => {
  console.log('Icon clicked:', icon, 'at index:', index)
  // 在这里添加图标点击的逻辑
}

// 处理侧边栏项目选择事件
const handleItemSelected = (item) => {
  console.log('Sidebar item selected:', item)
  // 在这里添加侧边栏项目选择的逻辑
}

// 处理左侧导航栏变化事件
const handleNavChange = (navItem) => {
  console.log('Left navbar changed:', navItem)
  // 在这里添加左侧导航栏变化的逻辑
}

// 处理工具栏点击事件
const handleToolClick = (tool) => {
  console.log('Tool clicked:', tool)
  // 在这里添加工具栏点击的逻辑
}
</script>

<template>
  <div class="app-container">
    <!-- 主菜单栏组件 -->
    <MenuBar @menu-click="handleMenuClick" @icon-click="handleIconClick" />

    <!-- 主体布局 -->
    <div class="main-layout">
      <!-- 左侧导航栏 -->
      <LeftNavbar @nav-change="handleNavChange" />

      <!-- 侧边栏组件 -->
      <Sidebar @item-selected="handleItemSelected" />

      <!-- 右侧内容区域 -->
      <div class="right-content">
        <!-- 工具栏 -->
        <Toolbar @tool-click="handleToolClick" />

        <!-- 主内容区域 -->
        <div class="main-content">
          <div class="p-6">
            <h1 class="text-2xl font-bold text-gray-800 mb-4">主内容区域</h1>
            <p class="text-gray-600">这里是主要内容区域，可以根据侧边栏选择的组件显示相应内容。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.main-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.right-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  background-color: #ffffff;
  overflow-y: auto;
}
</style>