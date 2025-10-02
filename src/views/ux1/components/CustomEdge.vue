<template>
  <BaseEdge :id="props.id" :path="path[0]" :style="{ stroke: '#a0aec0', strokeWidth: 1 }" />

  <EdgeLabelRenderer>
    <div
      :style="{
        pointerEvents: 'all',
        position: 'absolute',
        transform: `translate(-50%, -50%) translate(${path[1]}px,${path[2]}px)`,
      }"
      class="nodrag nopan"
    >
      <div
        class="bg-white rounded-full shadow-md cursor-pointer transition-colors w-6 h-6 flex items-center justify-center"
        @click="removeEdge"
      >
        ×
      </div>
    </div>
  </EdgeLabelRenderer>
</template>

<script setup>
import {
  EdgeLabelRenderer,
  useVueFlow,
  getBezierPath,
  BaseEdge,
} from '@vue-flow/core'
import { computed } from 'vue'

const { removeEdges } = useVueFlow()

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  sourceX: {
    type: Number,
    required: true,
  },
  sourceY: {
    type: Number,
    required: true,
  },
  targetX: {
    type: Number,
    required: true,
  },
  targetY: {
    type: Number,
    required: true,
  },
  sourcePosition: {
    type: String,
    required: true,
  },
  targetPosition: {
    type: String,
    required: true,
  },
  markerEnd: {
    type: String,
    required: false,
  },
  style: {
    type: Object,
    required: false,
  },
  animated: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Boolean,
    default: false,
  }
})

const path = computed(() => getBezierPath(props))

const removeEdge = () => {
  removeEdges(props.id)
}
</script>

<style>
.custom-edge path {
  pointer-events: all !important;
}
</style>
