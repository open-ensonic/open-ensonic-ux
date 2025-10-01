<script setup>
// 右侧主界面组件
</script>

<template>
  <main class="main-content">
    <div class="content-wrapper">
      <h2>主界面内容</h2>
      <p>这里是主要的应用界面区域，可以放置各种功能模块和内容。</p>
      
      <div class="content-grid">
        <div class="card">
          <h3>功能模块 1</h3>
          <p>模块描述信息</p>
        </div>
        <div class="card">
          <h3>功能模块 2</h3>
          <p>模块描述信息</p>
        </div>
        <div class="card">
          <h3>功能模块 3</h3>
          <p>模块描述信息</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f8f9fa;
  overflow-y: auto;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.content-wrapper h2 {
  margin: 0 0 20px 0;
  color: #2c3e50;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card h3 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}
</style>