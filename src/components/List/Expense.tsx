import React from "react"

interface ExpenseProps {
    expense: string
}

const Expense = ({ expense }: ExpenseProps) => {
    return <div className="p-4 w-35">{expense}</div>
}

export default Expense
