<template>
    <div class="status-bar">
        <div class="status-left">
            <span class="status-item version">v1.0.0</span>
        </div>

        <div class="status-right">
            <button class="status-button" @click="handleStatusClick('sandbox')" title="沙盒环境">
              <img :src="cloud" class="w-3 h-3" />
                <span>沙盒环境</span>
            </button>

            <button class="status-button" @click="handleStatusClick('logs')">
                <img :src="eye" class="w-3 h-3" />
                <span>显示日志</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import eye from '@/assets/images2/eye.svg'
import cloud from '@/assets/images2/cloud-check.svg'
// 定义事件
const emit = defineEmits(['status-click'])

// 处理状态项点击
const handleStatusClick = (item) => {
    emit('status-click', item)
}
</script>

<style scoped>
.status-bar {
    height: 24px;
    background-color: #31313d;
    color: #999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    font-size: 12px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-top: 1px solid #404051;
}

.status-left,
.status-right {
    display: flex;
    align-items: center;
    gap: 8px;
}

.status-item {
    cursor: pointer;
    padding: 2px 4px;
    border-radius: 2px;
    transition: background-color 0.2s ease;
}

.status-item:hover {
    background-color: #4a5568;
}

.version {
    color: #a0aec0;
    font-weight: 500;
}

.status-button {
    display: flex;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 10px;
    font-family: inherit;
    transition: all 0.2s ease;
}

.status-button:hover {
    background-color: #4a5568;
    color: #ffffff;
}

.status-button:active {
    background-color: #2d3748;
}

.status-icon {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .status-bar {
        font-size: 11px;
        padding: 0 8px;
    }

    .status-left,
    .status-right {
        gap: 6px;
    }

    .status-button {
        padding: 2px 4px;
        gap: 3px;
    }

    .status-icon {
        width: 12px;
        height: 12px;
    }

    .status-button span {
        display: none;
    }
}

@media (max-width: 480px) {
    .status-button span {
        display: none;
    }
}
</style>