<template>
    <li class="list">
        <img src="@/assets/img/arrow-right.svg" alt="arrow" class="arrow-img" :class="list.ui.isOpen ? 'down' : ''"
        @click="listsStore.toggleOpen(list.id)">
        <input
        class="custom-checkbox"
        type="checkbox"
        id="list"
        name="list"
        />
        <label for="list">{{ list.name }}</label>
        <transition name="slide-fade">
            <ul class="items-list" v-if="list.ui.isOpen">
            <list-item v-for="item in list.items" :key="item.id" :item="item"/>
        </ul>
        </transition>
    </li>
</template>

<script setup>
import ListItem from '@/components/ListItem.vue';
import { defineProps } from 'vue';
import { useListsStore } from '@/assets/stores/lists';


const listsStore = useListsStore();

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

<style lang="css">
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>