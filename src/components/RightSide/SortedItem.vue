<template>
    <div class="sorted-item-container">
        <span class="color-cube"  v-for="n in item.num" :key="n" @click="listsStore.decreaseItem(item.listId, item.id)" :style="{ backgroundColor: item.color}"></span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useListsStore } from '@/stores/lists';

const listsStore = useListsStore();
defineProps({
    item: {
        type: {
            name: String,
            color: String,
            num: Number,
            id: String,
            listId: Number,
        },
        default: () => ({
            name: '',
            color: '',
            num: 0,
            id: '',
            listId: 0,
        }),
    }
})

</script>