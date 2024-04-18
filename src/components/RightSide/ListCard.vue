<template>
    <div class="list-card">
        <div class="list-card-header">
            <p>{{ list.name }}</p>
            <transition name="fade">
                <button v-if="sortedArray.length" class="btn" @click="listsStore.toggleShuffle(list.id)">
                    {{ sortedOrShuffled(list.id) }}
                </button>
            </transition>
        </div>
        <div class="list-card-body">
            <transition name="slide-fade-right">
                <div v-if="!list.ui.isShuffled">
                    <sorted-item v-for="item in sortedArray" :key="item.id" :item="item"/>
                </div>
            </transition>
            <transition name="slide-fade-right-delay">
                <shuffled-items @deleteItem="deleteItem" v-if="list.ui.isShuffled" :array="shuffledArray" :listId="list.id"/>
            </transition>
        </div>
    </div>
</template>

<script setup>
import SortedItem from './SortedItem.vue'
import ShuffledItems from './ShuffledItems.vue'
import { defineProps, computed } from 'vue';
import _ from 'lodash';
import { useListsStore } from '@/stores/lists'
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

const sortedArray = computed(() => {
    return props.list.items.filter((item) => item.ui.checked)
})

const getArray = computed(() => {
    let array = [];
    sortedArray.value.forEach((item) => {
        const itemArray = Array.from({ length: item.num }, () => item.color);
        array = [...array, ...itemArray];
    });
    return array;
})

const shuffledArray = computed(() => _.shuffle(getArray.value));
</script>

<style lang="css">
.slide-fade-right-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-right-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-right-delay-enter-active {
  transition: all 0.2s ease-out;
  transition-delay: 0.3s;
}

.slide-fade-right-delay-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-right-delay-enter-from,
.slide-fade-right-delay-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
