<script setup>
import Header from '../../components/ux2/Header.vue'
import Sidebar from '../../components/ux2/Sidebar.vue'
import MainContent from '../../components/ux2/MainContent.vue'
import Footer from '../../components/ux2/Footer.vue'
</script>

<template>
  <div class="app-layout">
    <Header />
    <div class="main-layout">
      <Sidebar />
      <MainContent />
    </div>
    <Footer />
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
</style>
