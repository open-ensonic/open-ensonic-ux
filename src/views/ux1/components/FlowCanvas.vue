<script setup>
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import CustomNode from './CustomNodes.vue'
import CustomEdge from './CustomEdge.vue'
import CustomControls from './CustomControls.vue'

// 节点类型定义
const nodeTypes = {
  custom: CustomNode
}

// 边类型定义
const edgeTypes = {
  custom: CustomEdge
}

const initialNodes = [
  {
    id: '1',
    type: 'custom',
    position: { x: 200, y: 300 },
    data: {
      label: 'Signal Source',
      content: [
        { name: 'Sample Rate', value: '32k' },
        { name: 'Waveform', value: 'Sine' },
        { name: 'Frequency', value: '1k' },
        { name: 'Amplitude', value: '1' },
        { name: 'Offset', value: '0' },
        { name: 'Initial Phase (Radians)', value: '0' }
      ],
      handleColor: '#f29d78' // 蓝色
    }
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 600, y: 400 },
    data: {
      label: 'Throttle',
      content: [
        { name: 'Sample Rate', value: '32k' },
        { name: 'Limit', value: 'None' }
      ],
      handleColor: '#ffd702' // 绿色
    }
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 1000, y: 200 },
    data: {
      label: 'QT GUI Time Sink',
      content: [
        { name: 'Name', value: 'Time Display' },
        { name: 'Number of Points', value: '1.024k' },
        { name: 'Sample Rate', value: '32k' },
        { name: 'Autoscale', value: 'No' }
      ],
      handleColor: '#f29d78' // 黄色
    }
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 1200, y: 500 },
    data: {
      label: 'QT GUI Frequency Sink',
      content: [
        { name: 'Name', value: 'Frequency Display' },
        { name: 'FFT Size', value: '1024' },
        { name: 'Center Frequency (Hz)', value: '0' },
        { name: 'Bandwidth (Hz)', value: '32k' }
      ],
      handleColor: '#f29d78' // 红色
    }
  }
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'custom', animated: true },
  { id: 'e2-3', source: '2', target: '3', type: 'custom', animated: true },
  { id: 'e2-4', source: '2', target: '4', type: 'custom', animated: true }
]

const { onConnect, addEdges, updateNode } = useVueFlow()

// 处理节点关闭事件
const handleNodeClose = (nodeId) => {
  console.log('关闭节点:', nodeId)
  // 这里可以添加删除节点的逻辑
}

// 处理节点点击事件
const handleNodeClick = (event) => {
  console.log('节点点击:', event)
}

// 处理边点击事件
const handleEdgeClick = (event) => {
  console.log('边点击:', event)
  // 这里可以添加选中边或显示关闭按钮的逻辑
}

// 自定义 controls 事件处理
const { zoomIn, zoomOut, fitView } = useVueFlow()

const handleZoomIn = () => {
  zoomIn()
}

const handleZoomOut = () => {
  zoomOut()
}

const handleFitView = () => {
  fitView()
}

const handleLockToggle = (locked) => {
  console.log('画布锁定状态:', locked)
  // 这里可以添加锁定画布的逻辑
}
</script>

<template>
  <VueFlow
    :nodes="initialNodes"
    :edges="initialEdges"
    :node-types="nodeTypes"
    :edge-types="edgeTypes"
    :default-viewport="{ zoom: 1, x: 0, y: 0 }"
    :min-zoom="0.2"
    :max-zoom="4"
    class="vue-flow-container"
    @connect="onConnect"
    @node-click="handleNodeClick"
    @edge-click="handleEdgeClick"
    :fit-view-on-init="false"
    :fit-view-on-init-options="{ padding: 0 }"
  >
<!--    <Background pattern-color="#aaa" gap="20" />-->
    <CustomControls
      @zoom-in="handleZoomIn"
      @zoom-out="handleZoomOut"
      @fit-view="handleFitView"
      @lock-toggle="handleLockToggle"
    />
  </VueFlow>
</template>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';


.vue-flow-container {
  width: 100%;
  height: 100%;
  min-height: 0;
  background: #1c1d20;

}

.vue-flow__node {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.vue-flow__node.light {
  background: #fff;
  border-color: #e2e8f0;
}

.vue-flow__node-input {
  border-color: #10b981;
}

.vue-flow__node-output {
  border-color: #ef4444;
}

.vue-flow__edge-path {
  stroke: #64748b;
  stroke-width: 2;
}

.vue-flow__edge.animated path {
  stroke-dasharray: 5;
  animation: dashdraw 0.5s linear infinite;
}

@keyframes dashdraw {
  to {
    stroke-dashoffset: -10;
  }
}
</style>
