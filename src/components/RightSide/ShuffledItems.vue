<template>
    <div class="shuffled-items-container">
        <span class="color-cube" v-for="(n, index) in array" :key="n+index" @click="listsStore.decreaseItemByColor(listId, n)" :style="{ backgroundColor: n}"></span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useListsStore } from '@/stores/lists'

defineProps({
    array: {
        type: Array,
        default: () => [],
    },
    listId: {
        type: Number,
        default: 0,
    }
})

const listsStore = useListsStore();
</script>
