<script setup>
// 顶部导航栏组件
</script>

<template>
  <header class="header">
    <div class="header-content">
      <h1>Open Ensonic UX</h1>
      <nav class="nav">
        <a href="#" class="nav-link">首页</a>
        <a href="#" class="nav-link">设置</a>
        <a href="#" class="nav-link">帮助</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #2c3e50;
  color: white;
  padding: 0 20px;
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255,255,255,0.1);
}
</style>