<template>
  <!-- 自定义节点组件 -->
  <div class=" w-60  overflow-hidden  bg-black border-t border-white">
    <!-- 半透明背景 -->


    <!-- 内容区域 -->
    <div class="relative z-10 px-3 pt-3 ">
      <!-- 头部区域 -->
      <div class="flex justify-between items-center mb-0 pb-2  ">
        <h3 class="text-sm font-bold text-[#80bbff] m-0 flex-1 px-3 ">{{ nodeLabel }}</h3>
        <button
          class="w-6 h-6 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors border-none bg-transparent text-lg"
          @click="handleClose"
        >
          ×
        </button>
      </div>

      <!-- 主体内容 -->
      <div class="p-3 text-xs text-gray-500 border-t border-[#333] ">
        <div v-if="Array.isArray(data?.content)" class="space-y-1">
          <div v-for="(item, index) in data.content" :key="index" class="flex items-center">
            <span class="text-[#ae89fe]">{{ item.name }}:</span>
            <span class="text-[#81d99f] ">{{ item.value }}</span>
          </div>
        </div>
        <div v-else class="whitespace-pre-line">
          {{ data?.content || '' }}
        </div>
      </div>
    </div>

    <!-- 左侧连接点（输入） -->
    <Handle
      v-if="showLeftHandle"
      type="target"
      :position="Position.Left"
      :style="{ backgroundColor: handleColor }"
      class="absolute !top-[calc(50%+8px)] transform -translate-y-1/2 !w-[10px] !h-[16px] !rounded-none !border-0"
    />

    <!-- 右侧连接点（输出） -->
    <Handle
      v-if="showRightHandle"
      type="source"
      :position="Position.Right"
      :style="{ backgroundColor: handleColor }"
      class="absolute !top-[calc(50%+12px)] transform -translate-y-1/2 !w-[10px] !h-[16px] !rounded-none !border-0"
    />
  </div>
</template>

<script>
import { Handle, Position } from '@vue-flow/core'

export default {
  name: 'CustomNode',
  components: {
    Handle
  },
  props: {
    // Vue Flow 会传递整个节点对象
    data: {
      type: Object,
      required: true
    },
    // 节点 ID
    id: {
      type: String,
      required: true
    },
    // 节点类型
    type: {
      type: String,
      required: true
    },
    // 节点位置
    position: {
      type: Object,
      required: true
    }
  },
  computed: {
    // 从节点数据中获取连接点颜色
    handleColor() {
      return this.data?.handleColor || '#3b82f6'
    },
    // 计算属性获取节点标签
    nodeLabel() {
      return this.data?.label || '未命名节点'
    },
    // 是否显示左侧连接点（输入）
    showLeftHandle() {
      return this.data?.label !== 'Signal Source'
    },
    // 是否显示右侧连接点（输出）
    showRightHandle() {
      return !this.data?.label?.includes('QT GUI')
    }
  },
  methods: {
    handleClose() {
      this.$emit('close', this.id)
    }
  },
  data() {
    return {
      Position
    }
  }
}
</script>

