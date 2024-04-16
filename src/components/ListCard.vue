<template>
    <div class="list-card">
        <div class="list-card-header">
            <h2>{{ list.name }}</h2>
            <button v-if="list.ui.isOpen" class="btn" @click="listsStore.toggleShuffle(list.id)">{{ sortedOrShuffled(list.id) }}</button>
        </div>
        <div class="list-card-body" v-if="list.ui.isOpen">
            <sorted-item v-for="item in list.items" :key="item.id" :item="item"/>
        </div>
    </div>
</template>

<script setup>
import SortedItem from '@/components/SortedItem.vue'
import { defineProps } from 'vue'
import { useListsStore } from '@/assets/stores/lists'
import { storeToRefs } from 'pinia'

const listsStore = useListsStore();

const { sortedOrShuffled } = storeToRefs(listsStore)

const props = defineProps({
    list: {
        type:  {
            name: String,
            id: Number,
            items: Array,
            ui: {
              isOpen: Boolean,
              isShuffled: Boolean,
            }
        },
        default: () => ({
            name: '',
            id: 0,
            items: [],
            ui: {
              isOpen: false,
              isShuffled: false,
            }
        })
    }
})

console.log(props);
</script>
