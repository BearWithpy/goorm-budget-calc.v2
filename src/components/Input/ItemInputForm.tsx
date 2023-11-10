import React, { useEffect, useRef } from "react"
import ProductInput from "components/Input/ProductInput"
import ExpenseInput from "components/Input/ExpenseInput"
import ItemEditButton from "components/Buttons/ItemEditButton"
import ItemSubmitButton from "components/Buttons/ItemSubmitButton"

import { useDispatch } from "react-redux"
import { AppDispatch, RootState } from "app/store"
import { useSelector } from "react-redux"
import Item from "components/models/item"
import { addItem, onEditItem } from "features/item/itemsSlice"
import { v4 as getId } from "uuid"
import { resetMessage, setMsg, setShowMessage } from "features/msg/messageSlice"

const ItemInputForm = () => {
    const productInputRef = useRef<HTMLInputElement>(null)
    const expenseInputRef = useRef<HTMLInputElement>(null)

    const dispatch = useDispatch<AppDispatch>()
    const mode = useSelector((state: RootState) => state.items.mode)
    const editingItem = useSelector(
        (state: RootState) => state.items.editingItem
    )

    const handleAddItem = (newProduct: string, expense: number) => {
        const newItem: Item = { id: getId(), product: newProduct, expense }
        dispatch(addItem(newItem))
        dispatch(setMsg("create"))
        dispatch(setShowMessage(true))

        setTimeout(() => {
            dispatch(resetMessage())
        }, 1500)
    }

    useEffect(() => {
        if (mode === "edit" && editingItem) {
            productInputRef.current!.value = editingItem.product
            expenseInputRef.current!.value = editingItem.expense.toString()
        }
    }, [mode, editingItem])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (productInputRef.current && expenseInputRef.current) {
            const newProduct = productInputRef.current.value
            const expense = parseInt(expenseInputRef.current.value)

            if (mode === "submit") {
                handleAddItem?.(newProduct, expense)
            } else if (mode === "edit" && editingItem) {
                dispatch(
                    onEditItem({
                        id: editingItem.id,
                        newProduct,
                        newExpense: expense,
                    })
                )

                dispatch(setMsg("edit"))
                dispatch(setShowMessage(true))

                setTimeout(() => {
                    dispatch(resetMessage())
                }, 1500)
            }

            productInputRef.current.value = ""
            expenseInputRef.current.value = ""
        } else {
            console.error("DOM elements are not ready yet.")
        }
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="mb-2 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                <ProductInput productInputRef={productInputRef} />
                <ExpenseInput expenseInputRef={expenseInputRef} />
                <div className="mb-3">
                    {mode === "submit" ? (
                        <ItemSubmitButton />
                    ) : (
                        <ItemEditButton />
                    )}
                </div>
            </form>
        </div>
    )
}

export default ItemInputForm
