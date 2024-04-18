<template>
    <li class="list-item">
        <div class="checkbox-container">
            <span class="checkmark" @click="listsStore.toggleItemCheckbox(item.listId, item.id)" :class="checkboxClass"></span>
            <p>{{ item.name }}</p>
        </div>
        <div class="item-ui-container">
            <input id="number" type="text" v-model='itemStore.num' @input="listsStore.updateItemNum(item.listId, item.id, $event.target.value)" />
            <div class="input-color-container">
                <input type="color" id="body" name="body" v-model="itemStore.color"/>
                <span class="color-cube" :style="{ backgroundColor: item.color}"></span>
            </div>
        </div>
    </li>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useListsStore } from '@/stores/lists';

const listsStore = useListsStore();
const props = defineProps({
    item: {
        type: {
            name: String,
            color: String,
            num: Number,
            id: String,
            listId: Number,
            ui: {
                checked: Boolean,
            }
        },
        default: () => ({
            name: '',
            color: '',
            num: 0,
            id: '',
            listId: 0,
            ui: {
                checked: false,
            }
        }),
    }
})

const checkboxClass = computed(() => ({
  'none': !props.item.ui.checked,
  'checked': props.item.ui.checked,
}))

const list = computed(() => listsStore.lists.find((list) => list.id === props.item.listId));
const itemStore = computed(() => list.value.items.find((item) => item.id === props.item.id));
</script>