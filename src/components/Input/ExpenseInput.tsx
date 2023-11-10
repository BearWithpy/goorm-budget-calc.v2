import React from "react"

interface ExpenseInputProps {
    expenseInputRef: React.RefObject<HTMLInputElement>
}

const ExpenseInput = ({ expenseInputRef }: ExpenseInputProps) => {
    return (
        <div className="col-span-1">
            <label
                htmlFor="expense_"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                expense
            </label>
            <input
                type="number"
                id="expense_"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ex) 30000"
                ref={expenseInputRef}
                min={0}
                required
            ></input>
        </div>
    )
}

export default ExpenseInput
