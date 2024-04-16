<template>
    <li class="list-item">
        <div>
            <input
            type="checkbox"
            id="list-item"
            name="list-item"
            />
            <label for="list-item">{{ item.name }}</label>
        </div>
        <div class="item-ui-container">
            <input id="number" type="number" min="0" onkeydown="if(event.key==='.'){event.preventDefault();}" v-model='itemStore.num' required/>
            <div class="input-color-container">
                <input type="color" id="body" name="body" v-model="itemStore.color"/>
                <svg class="heart-img" width="16px" height="15px" viewBox="0 -1 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                    <g id="Page-1"  fill="#000000" fill-rule="evenodd" sketch:type="MSPage">
                        <g id="Icon-Set-Filled" stroke="#171818" stroke-width="1" sketch:type="MSLayerGroup" transform="translate(-102.000000, -882.000000)" :style="{ fill: item.color }">
                            <path d="M126,882 C122.667,882 119.982,883.842 117.969,886.235 C116.013,883.76 113.333,882 110,882 C105.306,882 102,886.036 102,890.438 C102,892.799 102.967,894.499 104.026,896.097 L116.459,911.003 C117.854,912.312 118.118,912.312 119.513,911.003 L131.974,896.097 C133.22,894.499 134,892.799 134,890.438 C134,886.036 130.694,882 126,882" id="heart-like" sketch:type="MSShapeGroup">
                            </path>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </li>
</template>

<script setup>
import { defineProps } from 'vue';
import { useListsStore } from '@/assets/stores/lists';

const listsStore = useListsStore();
const props = defineProps({
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

const list = listsStore.lists.find((list) => list.id === props.item.listId);
const itemStore = list.items.find((item) => item.id === props.item.id);

</script>