import React, { useEffect, useState } from "react"

import "./App.css"
import { Header } from "containers"
import { Main } from "containers"
import TotalBox from "components/MessageBox/TotalBox"
import { v4 as getId } from "uuid"
import Item from "components/models/item"
import CreateBox from "components/MessageBox/CreateBox"
import DeleteBox from "components/MessageBox/DeleteBox"
import EditBox from "components/MessageBox/EditBox"
import DeleteAllBox from "components/MessageBox/DeleteAllBox"

function App() {
    const [total, setTotal] = useState(0)
    const [items, setItems] = useState<Item[]>([])
    const [msg, setMsg] = useState("none")
    const [mode, setMode] = useState("submit")
    const [editingItem, setEditingItem] = useState<Item | null>(null)
    const [showMessage, setShowMessage] = useState(false)

    const hideMessage = () => {
        setShowMessage(false)
    }

    useEffect(() => {
        if (msg !== "none") {
            setShowMessage(true)
            const messageTimeout = setTimeout(() => {
                hideMessage()
                setMsg("none")
            }, 1500)
            return () => clearTimeout(messageTimeout)
        }
    }, [msg])

    useEffect(() => {
        const newTotal = items.reduce((sum, item) => {
            return sum + Number(item.expense)
        }, 0)

        setTotal(newTotal)
    }, [items])

    const addItem = (product: string, expense: number) => {
        const newItem = { id: getId(), product, expense }
        setItems([...items, newItem])
        setMsg("create")
    }

    const deleteAllItems = () => {
        setItems([])
        setMsg("delete all")
    }
    const editItem = (item: Item) => {
        setEditingItem(item)
        setMode("edit")
    }

    const onEditItem = (id: string, newProduct: string, newExpense: number) => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, product: newProduct, expense: newExpense }
            }
            return item
        })
        setItems(updatedItems)
        setEditingItem(null)
        setMode("submit")
        setMsg("edit")
    }
    const deleteOneItem = (item: Item) => {
        const newItems = items.filter((i) => i.id !== item.id)
        setItems(newItems)
        setMsg("delete")
    }

    return (
        <div>
            {showMessage && (
                <>
                    {msg === "create" && <CreateBox />}
                    {msg === "delete" && <DeleteBox />}

                    {msg === "edit" && <EditBox />}
                    {msg === "delete all" && <DeleteAllBox />}
                </>
            )}
            <Header />
            <Main
                items={items}
                onAddItem={addItem}
                onEditItem={onEditItem}
                onDelete={deleteOneItem}
                onDeleteAll={deleteAllItems}
                onEdit={editItem}
                mode={mode}
                editingItem={editingItem}
            />
            <TotalBox total={total.toLocaleString()} />
        </div>
    )
}

export default App
