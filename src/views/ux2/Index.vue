<script setup>
import { ref } from 'vue'
import Header from '../../components/ux2/Header.vue'
import Sidebar from '../../components/ux2/Sidebar.vue'
import MainContent from '../../components/ux2/MainContent.vue'
import Footer from '../../components/ux2/Footer.vue'
import PanelContainer from '../../components/ux2/PanelContainer.vue'

const activePanel = ref(null)

const handleSidebarPanelToggle = (panel) => {
  activePanel.value = panel
}

const handleFooterPanelToggle = (panel) => {
  // 如果点击的是当前激活的面板，则关闭
  if (activePanel.value === panel) {
    activePanel.value = null
  } else {
    // 否则打开新的面板，关闭其他面板
    activePanel.value = panel
  }
}
</script>

<template>
  <div class="app-layout">
    <Header />
    <div class="main-layout">
      <Sidebar @panelToggle="handleSidebarPanelToggle" />
      <div class="content-area">
        <PanelContainer :activePanel="activePanel" />
        <MainContent class="flex-1" />
      </div>
    </div>
    <Footer :activePanel="activePanel" @panelToggle="handleFooterPanelToggle" />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.content-area {
  display: flex;
  flex: 1;
  overflow: hidden;
}
</style>
