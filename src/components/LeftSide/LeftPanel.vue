<template>
    <div class="container-s">
        <ul class="main-list">
            <list-view v-for="list in listsStore.lists" :key="list.id" :list="list"/>
        </ul>
    </div>
</template>

<script setup>
import ListView from './ListsList.vue';
import { useListsStore } from '@/stores/lists';

const listsStore = useListsStore();
</script>
