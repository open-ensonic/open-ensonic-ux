<script setup>
// 底部状态栏组件
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="status-info">
        <span class="status-item">系统状态: 正常</span>
        <span class="status-item">在线用户: 12</span>
        <span class="status-item">最后更新: 2025-01-10 14:00</span>
      </div>
      <div class="copyright">
        © 2025 Open Ensonic UX. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #ecf0f1;
  border-top: 1px solid #bdc3c7;
  padding: 10px 20px;
  height: 50px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.status-info {
  display: flex;
  gap: 20px;
}

.status-item {
  font-size: 0.9rem;
  color: #7f8c8d;
}

.copyright {
  font-size: 0.9rem;
  color: #7f8c8d;
}
</style>