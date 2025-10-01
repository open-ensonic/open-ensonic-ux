<template>
  <!-- 自定义节点组件 -->
  <div class=" w-60  rounded-lg overflow-hidden  shadow-xl/3 !bg-white/40 border-0">
    <!-- 半透明背景 -->


    <!-- 内容区域 -->
    <div class="relative z-10 p-3 ">
      <!-- 头部区域 -->
      <div class="flex justify-between items-center mb-2 pb-2  ">
        <h3 class="text-sm font-semibold text-gray-500 m-0 flex-1 text-center">{{ nodeLabel }}</h3>
        <button
          class="w-6 h-6 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors border-none bg-transparent text-lg"
          @click="handleClose"
        >
          ×
        </button>
      </div>

      <!-- 主体内容 -->
      <div class="bg-white rounded-lg p-3 text-xs text-gray-500 whitespace-pre-line shadow/5 ">
        {{ data?.content || '' }}
      </div>
    </div>

    <!-- 左侧连接点（输入） -->
    <Handle
      v-if="showLeftHandle"
      type="target"
      :position="Position.Left"
      class="absolute !top-[calc(50%+23px)] transform -translate-y-1/2 !w-[10px] !h-[46px] !rounded !bg-[#193fe0] !border-0"
    />

    <!-- 右侧连接点（输出） -->
    <Handle
      v-if="showRightHandle"
      type="source"
      :position="Position.Right"
      class="absolute !top-[calc(50%+30px)] transform -translate-y-1/2 !w-[10px] !h-[46px] !rounded !bg-[#ff5a84] !border-0"
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

