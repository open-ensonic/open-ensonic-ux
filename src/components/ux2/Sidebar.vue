<script setup>
// 左侧边栏组件
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <h3>导航菜单</h3>
      <ul class="menu">
        <li class="menu-item">
          <a href="#" class="menu-link">仪表板</a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">用户管理</a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">系统设置</a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">数据统计</a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link">日志查看</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  background-color: #34495e;
  color: white;
  width: 250px;
  height: 100%;
}

.sidebar-content {
  padding: 20px;
}

.sidebar h3 {
  margin: 0 0 20px 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  margin-bottom: 8px;
}

.menu-link {
  color: white;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 4px;
  display: block;
  transition: background-color 0.3s;
}

.menu-link:hover {
  background-color: rgba(255,255,255,0.1);
}
</style>