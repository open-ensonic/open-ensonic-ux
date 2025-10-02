<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isDarkMode = ref(false)


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

        </div>
      </div>
    </header>

    <!-- 主要内容 -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4">选择界面版本</h2>
        <p class="text-xl opacity-80">探索不同版本的界面设计和交互体验</p>
      </div>

      <!-- 版本选择 -->
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- 版本一 -->
        <a
          href="#/ux1"
          target="_blank"
          class="rounded-xl p-8 cursor-pointer transition-all hover:scale-105 block no-underline"
          :class="isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 shadow-lg text-gray-900'"
        >
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                 :class="isDarkMode ? 'bg-purple-400 text-gray-900' : 'bg-purple-100 text-purple-600'">
              📊
            </div>
            <h4 class="text-xl font-semibold mb-2">版本一</h4>
            <p class="opacity-80">经典界面设计，功能完整</p>
          </div>
        </a>

        <!-- 版本二 -->
        <a
          href="#/ux2"
          target="_blank"
          class="rounded-xl p-8 cursor-pointer transition-all hover:scale-105 block no-underline"
          :class="isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 shadow-lg text-gray-900'"
        >
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                 :class="isDarkMode ? 'bg-blue-400 text-gray-900' : 'bg-blue-100 text-blue-600'">
              🎨
            </div>
            <h4 class="text-xl font-semibold mb-2">版本二</h4>
            <p class="opacity-80">现代界面设计，简洁高效</p>
          </div>
        </a>

        <!-- 版本三 -->
        <a
          href="https://open-ensonic.github.io/open-ensonic-ux2/#/"
          target="_blank"
          class="rounded-xl p-8 cursor-pointer transition-all hover:scale-105 block no-underline"
          :class="isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 shadow-lg text-gray-900'"
        >
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                 :class="isDarkMode ? 'bg-green-400 text-gray-900' : 'bg-green-100 text-green-600'">
              🚀
            </div>
            <h4 class="text-xl font-semibold mb-2">版本三</h4>
            <p class="opacity-80">最新界面设计，创新体验</p>
          </div>
        </a>
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
