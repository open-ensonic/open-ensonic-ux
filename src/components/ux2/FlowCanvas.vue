<script setup>
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'

const initialNodes = [
  {
    id: '1',
    type: 'input',
    label: '开始节点',
    position: { x: 0, y: 0 },
    class: 'light',
  },
  {
    id: '2',
    type: 'default',
    label: '处理节点',
    position: { x: 100, y: 125 },
    class: 'light',
  },
  {
    id: '3',
    type: 'output',
    label: '结束节点',
    position: { x: 250, y: 250 },
    class: 'light',
  },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
]

const { onConnect, addEdges, updateNode } = useVueFlow()
</script>

<template>
  <VueFlow 
    :nodes="initialNodes"
    :edges="initialEdges"
              :default-viewport="{ zoom: 0.8 }"
            :min-zoom="0.2"
            :max-zoom="4"
    class="vue-flow-container"
    @connect="onConnect"
    fit-view-on-init
  >
    <Background pattern-color="#aaa" gap="20" />
    <Controls />
    <MiniMap />
  </VueFlow>
</template>

<style>
.vue-flow-container {
  width: 100%;
  height: 100%;
  min-height: 500px;
}

.vue-flow__node {
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
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