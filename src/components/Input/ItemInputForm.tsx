import React, { useEffect, useRef } from "react"
import ProductInput from "components/Input/ProductInput"
import ExpenseInput from "components/Input/ExpenseInput"
import ItemEditButton from "components/Buttons/ItemEditButton"
import ItemSubmitButton from "components/Buttons/ItemSubmitButton"
import { MainProps } from "containers/Body/Main"

interface ItemInputFormProps
    extends Pick<
        MainProps,
        "onAddItem" | "mode" | "editingItem" | "onEditItem"
    > {}

const ItemInputForm = ({
    onAddItem,
    mode,
    editingItem,
    onEditItem,
}: ItemInputFormProps) => {
    const productInputRef = useRef<HTMLInputElement>(null)
    const expenseInputRef = useRef<HTMLInputElement>(null)

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
                onAddItem?.(newProduct, expense)
            } else if (mode === "edit" && editingItem) {
                onEditItem?.(editingItem.id, newProduct, expense)
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
