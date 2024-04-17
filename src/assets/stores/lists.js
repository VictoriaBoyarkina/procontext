import { defineStore } from "pinia";
import uniqid from 'uniqid';

export const useListsStore = defineStore({
    id: 'lists',
    state: () => ({
        lists: [
            {
                name: 'List 1',
                id: 1,
                items: [
                    {  name: 'Item 1', color: '#050A9C', num: 4, id: uniqid(), listId: 1, ui: { checked: false } },
                    {  name: 'Item 2', color: '#F90413', num: 10, id: uniqid(), listId: 1,  ui: { checked: false } },
                    {  name: 'Item 3', color: '#11DC20', num: 15, id: uniqid(), listId: 1,  ui: { checked: false } },
                    {  name: 'Item 4', color: '#C6F035', num: 17, id: uniqid(), listId: 1,  ui: { checked: false } },
                    {  name: 'Item 5', color: '#9835F0', num: 18, id: uniqid(), listId: 1,  ui: { checked: false } },
                ],
                ui: {
                    isOpen: false,
                    isShuffled: false,
                    checked: 'none',
                }
            },
            {
                name: 'List 2',
                id: 2,
                items: [
                    {  name: 'Item 1', color: '#050A9C', num: 4, id: uniqid(), listId: 2,  ui: { checked: false } },
                    {  name: 'Item 2', color: '#F90413', num: 10, id: uniqid(), listId: 2,  ui: { checked: false } },
                    {  name: 'Item 3', color: '#11DC20', num: 15, id: uniqid(), listId: 2,  ui: { checked: false } },
                    {  name: 'Item 4', color: '#C6F035', num: 17, id: uniqid(), listId: 2,  ui: { checked: false } },
                    {  name: 'Item 5', color: '#9835F0', num: 18, id: uniqid(), listId: 2,  ui: { checked: false } },
                    {  name: 'Item 6', color: '#90D2FF', num: 14, id: uniqid(), listId: 2,  ui: { checked: false } },
                ],
                ui: {
                    isOpen: false,
                    isShuffled: false,
                    checked: 'none',
                }
            },
            {
                name: 'List 3',
                id: 3,
                items: [
                    {  name: 'Item 1', color: '#050A9C', num: 4, id: uniqid(), listId: 3,  ui: { checked: false } },
                    {  name: 'Item 2', color: '#F90413', num: 10, id: uniqid(), listId: 3,  ui: { checked: false } },
                    {  name: 'Item 3', color: '#11DC20', num: 15, id: uniqid(), listId: 3,  ui: { checked: false } },
                    {  name: 'Item 4', color: '#C6F035', num: 17, id: uniqid(), listId: 3,  ui: { checked: false } },
                    {  name: 'Item 5', color: '#9835F0', num: 18, id: uniqid(), listId: 3,  ui: { checked: false } },
                    {  name: 'Item 6', color: '#90D2FF', num: 14, id: uniqid(), listId: 3,  ui: { checked: false } },
                    {  name: 'Item 7', color: '#F95048', num: 17, id: uniqid(), listId: 3,  ui: { checked: false } },
                ],
                ui: {
                    isOpen: false,
                    isShuffled: false,
                    checked: 'none',
                }
            },
            {
                name: 'List 4',
                id: 4,
                items: [
                    {  name: 'Item 1', color: '#050A9C', num: 4, id: uniqid(), listId: 4,  ui: { checked: false } },
                    {  name: 'Item 2', color: '#F90413', num: 10, id: uniqid(), listId: 4,  ui: { checked: false } },
                    {  name: 'Item 3', color: '#11DC20', num: 15, id: uniqid(), listId: 4,  ui: { checked: false } },
                    {  name: 'Item 4', color: '#C6F035', num: 17, id: uniqid(), listId: 4,  ui: { checked: false } },
                    {  name: 'Item 5', color: '#9835F0', num: 18, id: uniqid(), listId: 4,  ui: { checked: false } },
                    {  name: 'Item 6', color: '#90D2FF', num: 14, id: uniqid(), listId: 4,  ui: { checked: false } },
                    {  name: 'Item 7', color: '#F95048', num: 17, id: uniqid(), listId: 4,  ui: { checked: false } },
                    {  name: 'Item 8', color: '#E258D8', num: 25, id: uniqid(), listId: 4,  ui: { checked: false } },
                ],
                ui: {
                    isOpen: false,
                    isShuffled: false,
                    checked: 'none',
                }
            },
            {
                name: 'List 5',
                id: 5,
                items: [
                    {  name: 'Item 1', color: '#050A9C', num: 4, id: uniqid(), listId: 5,  ui: { checked: false } },
                    {  name: 'Item 2', color: '#F90413', num: 10, id: uniqid(), listId: 5,  ui: { checked: false } },
                    {  name: 'Item 3', color: '#11DC20', num: 15, id: uniqid(), listId: 5,  ui: { checked: false } },
                    {  name: 'Item 4', color: '#C6F035', num: 17, id: uniqid(), listId: 5,  ui: { checked: false } },
                    {  name: 'Item 5', color: '#9835F0', num: 18, id: uniqid(), listId: 5,  ui: { checked: false } },
                    {  name: 'Item 6', color: '#90D2FF', num: 14, id: uniqid(), listId: 5,  ui: { checked: false } },
                    {  name: 'Item 7', color: '#F95048', num: 17, id: uniqid(), listId: 5,  ui: { checked: false } },
                    {  name: 'Item 8', color: '#E258D8', num: 25, id: uniqid(), listId: 5,  ui: { checked: false } },
                    {  name: 'Item 9', color: '#06AE88', num: 20, id: uniqid(), listId: 5,  ui: { checked: false } },
                ],
                ui: {
                    isOpen: false,
                    isShuffled: false,
                    checked: 'none',
                }
            },
        ]
    }),
    actions: {
        toggleOpen(id) {
            const list = this.lists.find((list) => list.id === id);
            list.ui.isOpen = !list.ui.isOpen
        },
        toggleShuffle(id) {
            const list = this.lists.find((list) => list.id === id);
            list.ui.isShuffled = !list.ui.isShuffled
        },
        decreaseItem(listId, itemId) {
            const list = this.lists.find((list) => list.id === listId);
            const item = list.items.find((item) => item.id === itemId);
            item.num -= 1;
        },
        decreaseItemByColor(listId, color) {
            const list = this.lists.find((list) => list.id === listId);
            const item = list.items.find((item) => item.color === color);
            item.num -= 1;
        },
        toggleCheckbox(listId) {
            const list = this.lists.find((list) => list.id === listId);
            const notCheckedItems = list.items.filter((item) => !item.ui.checked)
            const checkedItems = list.items.filter((item) => item.ui.checked)
            const checkboxState = list.ui.checked;
            switch (checkboxState) {
                case 'checked':
                    if (notCheckedItems.length === 0) {
                        list.ui.checked = 'none';
                        list.items.forEach((item) => item.ui.checked = false)
                    } else {
                        list.ui.checked = 'intermediate';
                    }
                    break;
                case 'none':
                    if (checkedItems.length === 0) {
                        list.ui.checked = 'checked';
                        list.items.forEach((item) => item.ui.checked = true)
                    } else {
                        list.ui.checked = 'intermediate';
                    }
                    break;
                case 'intermediate':
                    if (checkedItems.length === 0) {
                        list.ui.checked = 'checked';
                        list.items.forEach((item) => item.ui.checked = true)
                    } else if (notCheckedItems.length === 0) {
                        list.ui.checked = 'none';
                        list.items.forEach((item) => item.ui.checked = false)
                    }
                    break;
                default:
                    break;
            }
        }
    },
    getters: {
        sortedOrShuffled: (state) => (id) => {
            const list = state.lists.find((list) => list.id === id);
            return !list.ui.isShuffled ? 'Перемешать' : 'Сортировать';
        }
    }
})