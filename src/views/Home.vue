<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isDarkMode = ref(false)

// 切换暗色模式
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

// 导航到不同版本
const navigateToVersion = (version, theme) => {
  router.push(`/${version}?theme=${theme}`)
}
</script>

<template>
  <div :class="['min-h-screen transition-colors duration-300', isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900']">
    <!-- 头部 -->
    <header class="border-b" :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <h1 class="text-3xl font-bold">Open Ensonic UX</h1>
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg transition-colors"
            :class="isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'"
          >
            {{ isDarkMode ? '🌙 暗色模式' : '☀️ 浅色模式' }}
          </button>
        </div>
      </div>
    </header>

    <!-- 主要内容 -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4">选择界面版本</h2>
        <p class="text-xl opacity-80">探索不同版本的界面设计和交互体验</p>
      </div>

      <!-- 版本一 -->
      <div class="mb-16">
        <h3 class="text-2xl font-semibold mb-8 text-center">版本一</h3>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- 浅色版 -->
          <div 
            class="rounded-xl p-8 cursor-pointer transition-all hover:scale-105"
            :class="isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 shadow-lg'"
            @click="navigateToVersion('ux1', 'light')"
          >
            <div class="text-center">
              <div class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl" 
                   :class="isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-yellow-100 text-yellow-600'">
                ☀️
              </div>
              <h4 class="text-xl font-semibold mb-2">浅色版</h4>
              <p class="opacity-80">明亮清晰的界面设计，适合日间使用</p>
            </div>
          </div>

          <!-- 暗色版 -->
          <div 
            class="rounded-xl p-8 cursor-pointer transition-all hover:scale-105"
            :class="isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 shadow-lg'"
            @click="navigateToVersion('ux1', 'dark')"
          >
            <div class="text-center">
              <div class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl" 
                   :class="isDarkMode ? 'bg-purple-400 text-gray-900' : 'bg-purple-100 text-purple-600'">
                🌙
              </div>
              <h4 class="text-xl font-semibold mb-2">暗色版</h4>
              <p class="opacity-80">护眼暗色主题，适合夜间使用</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 版本二 -->
      <div>
        <h3 class="text-2xl font-semibold mb-8 text-center">版本二</h3>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- 浅色版 -->
          <div 
            class="rounded-xl p-8 cursor-pointer transition-all hover:scale-105"
            :class="isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 shadow-lg'"
            @click="navigateToVersion('ux2', 'light')"
          >
            <div class="text-center">
              <div class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl" 
                   :class="isDarkMode ? 'bg-blue-400 text-gray-900' : 'bg-blue-100 text-blue-600'">
                ☀️
              </div>
              <h4 class="text-xl font-semibold mb-2">浅色版</h4>
              <p class="opacity-80">现代化浅色界面，简洁优雅</p>
            </div>
          </div>

          <!-- 暗色版 -->
          <div 
            class="rounded-xl p-8 cursor-pointer transition-all hover:scale-105"
            :class="isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 shadow-lg'"
            @click="navigateToVersion('ux2', 'dark')"
          >
            <div class="text-center">
              <div class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl" 
                   :class="isDarkMode ? 'bg-green-400 text-gray-900' : 'bg-green-100 text-green-600'">
                🌙
              </div>
              <h4 class="text-xl font-semibold mb-2">暗色版</h4>
              <p class="opacity-80">专业暗色界面，专注工作</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部 -->
    <footer class="border-t mt-16" :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p class="text-center opacity-80">Open Ensonic UX - 界面设计演示</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.dark {
  color-scheme: dark;
}
</style>