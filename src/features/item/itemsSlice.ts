import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Item from "components/models/item"

interface ItemsState {
    items: Item[]
    mode: string
    editingItem: Item | null
}

const initialState: ItemsState = {
    items: [] as Item[],
    mode: "submit",
    editingItem: null as Item | null,
}

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<Item>) {
            state.items.push(action.payload)
        },
        deleteAllItems(state) {
            state.items = []
        },
        editItem(state, action: PayloadAction<Item>) {
            state.editingItem = action.payload
            state.mode = "edit"
        },
        onEditItem(
            state,
            action: PayloadAction<{
                id: string
                newProduct: string
                newExpense: number
            }>
        ) {
            const { id, newProduct, newExpense } = action.payload
            const updatedItems = state.items.map((item) => {
                if (item.id === id) {
                    return { ...item, product: newProduct, expense: newExpense }
                }
                return item
            })
            state.items = updatedItems
            state.editingItem = null
            state.mode = "submit"
        },
        deleteOneItem(state, action: PayloadAction<Item>) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            )
        },
    },
})

export const { addItem, deleteAllItems, editItem, onEditItem, deleteOneItem } =
    itemsSlice.actions
export default itemsSlice.reducer
