import React from "react"
import ItemInputForm from "components/Input/ItemInputForm"
import ItemList from "components/List/ItemList"
import Item from "components/models/item"

export interface MainProps {
    items: Item[]
    onAddItem: (product: string, expense: number) => void
    onEditItem: (id: string, newProduct: string, newExpense: number) => void
    onDelete: (item: Item) => void
    onDeleteAll: () => void
    onEdit: (item: Item) => void
    mode: string
    editingItem: Item | null
}

const Main = ({
    items,
    onAddItem,
    onEditItem,
    onDelete,
    onDeleteAll,
    onEdit,
    mode,
    editingItem,
}: MainProps) => {
    return (
        <div className="m-6 p-5 border-solid border-2 border-gray-300 rounded">
            <ItemInputForm
                onAddItem={onAddItem}
                mode={mode}
                editingItem={mode === "edit" ? editingItem : null}
                onEditItem={onEditItem}
            />
            <ItemList
                items={items}
                onDelete={onDelete}
                onDeleteAll={onDeleteAll}
                onEdit={onEdit}
            />
        </div>
    )
}

export default Main
