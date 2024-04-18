<template>
    <div class="container-s">
        <div class="list-cards-container">
            <list-card v-for="list in listsStore.lists" :key="list.id" :list="list"/>
        </div>
    </div>
</template>

<script setup>
import ListCard from './ListCard.vue'
import { useListsStore } from '@/stores/lists';

const listsStore = useListsStore();
</script>
