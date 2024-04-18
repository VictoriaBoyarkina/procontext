<template>
    <li class="list">
        <img src="@/assets/img/arrow-right.svg" alt="arrow" class="arrow-img" :class="list.ui.isOpen ? 'down' : ''"
        @click="listsStore.toggleOpen(list.id)">
        <div class="checkbox-container">
          <span class="checkmark" :class="checkboxClass" @click="listsStore.toggleListCheckbox(list.id)"></span>
          <p for="list">{{ list.name }}</p>
        </div>
        <transition name="slide-fade">
            <ul class="items-list" v-if="list.ui.isOpen">
              <list-item v-for="item in list.items" :key="item.id" :item="item"/>
          </ul>
        </transition>
    </li>
</template>

<script setup>
import ListItem from './ListItem.vue';
import { defineProps, computed } from 'vue';
import { useListsStore } from '@/stores/lists';


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
              checked: String,
            }
        },
        default: () => ({
            name: '',
            id: 0,
            items: [],
            ui: {
              isOpen: false,
              isShuffled: false,
              checked: "none",
            }
        })
    }
})

const checkboxClass = computed(() => ({
  'none': props.list.ui.checked === 'none',
  'checked': props.list.ui.checked === 'checked',
  'intermediate': props.list.ui.checked === 'intermediate',
}))

</script>

<style lang="css">
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