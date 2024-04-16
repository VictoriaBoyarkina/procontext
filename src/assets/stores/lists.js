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
                    {  name: 'Item 1', color: '#050A9C', num: 4, id: uniqid(), listId: 1 },
                    {  name: 'Item 2', color: '#F90413', num: 10, id: uniqid(), listId: 1 },
                    {  name: 'Item 3', color: '#11DC20', num: 15, id: uniqid(), listId: 1 },
                    {  name: 'Item 4', color: '#C6F035', num: 17, id: uniqid(), listId: 1 },
                    {  name: 'Item 5', color: '#9835F0', num: 18, id: uniqid(), listId: 1 },
                ],
                ui: {
                    isOpen: false,
                    isShuffled: false,
                }
            },
            {
                name: 'List 2',
                id: 2,
                items: [
                    {  name: 'Item 1', color: '#050A9C', num: 4, id: uniqid(), listId: 2 },
                    {  name: 'Item 2', color: '#F90413', num: 10, id: uniqid(), listId: 2 },
                    {  name: 'Item 3', color: '#11DC20', num: 15, id: uniqid(), listId: 2 },
                    {  name: 'Item 4', color: '#C6F035', num: 17, id: uniqid(), listId: 2 },
                    {  name: 'Item 5', color: '#9835F0', num: 18, id: uniqid(), listId: 2 },
                    {  name: 'Item 6', color: '#90D2FF', num: 14, id: uniqid(), listId: 2 },
                ],
                ui: {
                    isOpen: false,
                    isShuffled: false,
                }
            },
            {
                name: 'List 3',
                id: 3,
                items: [
                    {  name: 'Item 1', color: '#050A9C', num: 4, id: uniqid(), listId: 3 },
                    {  name: 'Item 2', color: '#F90413', num: 10, id: uniqid(), listId: 3 },
                    {  name: 'Item 3', color: '#11DC20', num: 15, id: uniqid(), listId: 3 },
                    {  name: 'Item 4', color: '#C6F035', num: 17, id: uniqid(), listId: 3 },
                    {  name: 'Item 5', color: '#9835F0', num: 18, id: uniqid(), listId: 3 },
                    {  name: 'Item 6', color: '#90D2FF', num: 14, id: uniqid(), listId: 3 },
                    {  name: 'Item 7', color: '#F95048 ', num: 17, id: uniqid(), listId: 3 },
                ],
                ui: {
                    isOpen: false,
                    isShuffled: false,
                }
            },
            {
                name: 'List 4',
                id: 4,
                items: [
                    {  name: 'Item 1', color: '#050A9C', num: 4, id: uniqid(), listId: 4 },
                    {  name: 'Item 2', color: '#F90413', num: 10, id: uniqid(), listId: 4 },
                    {  name: 'Item 3', color: '#11DC20', num: 15, id: uniqid(), listId: 4 },
                    {  name: 'Item 4', color: '#C6F035', num: 17, id: uniqid(), listId: 4 },
                    {  name: 'Item 5', color: '#9835F0', num: 18, id: uniqid(), listId: 4 },
                    {  name: 'Item 6', color: '#90D2FF', num: 14, id: uniqid(), listId: 4 },
                    {  name: 'Item 7', color: '#F95048 ', num: 17, id: uniqid(), listId: 4 },
                    {  name: 'Item 8', color: '#E258D8', num: 25, id: uniqid(), listId: 4 },
                ],
                ui: {
                    isOpen: false,
                    isShuffled: false,
                }
            },
            {
                name: 'List 5',
                id: 5,
                items: [
                    {  name: 'Item 1', color: '#050A9C', num: 4, id: uniqid(), listId: 5 },
                    {  name: 'Item 2', color: '#F90413', num: 10, id: uniqid(), listId: 5 },
                    {  name: 'Item 3', color: '#11DC20', num: 15, id: uniqid(), listId: 5 },
                    {  name: 'Item 4', color: '#C6F035', num: 17, id: uniqid(), listId: 5 },
                    {  name: 'Item 5', color: '#9835F0', num: 18, id: uniqid(), listId: 5 },
                    {  name: 'Item 6', color: '#90D2FF', num: 14, id: uniqid(), listId: 5 },
                    {  name: 'Item 7', color: '#F95048 ', num: 17, id: uniqid(), listId: 5 },
                    {  name: 'Item 8', color: '#E258D8', num: 25, id: uniqid(), listId: 5 },
                    {  name: 'Item 9', color: '#06AE88', num: 20, id: uniqid(), listId: 5 },
                ],
                ui: {
                    isOpen: false,
                    isShuffled: false,
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
        }
    },
    getters: {
        sortedOrShuffled: (state) => (id) => {
            const list = state.lists.find((list) => list.id === id);
            return !list.ui.isShuffled ? 'Перемешать' : 'Сортировать';
        }
    }
})