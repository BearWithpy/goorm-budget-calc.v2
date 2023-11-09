import React from "react"

import Item from "./Item"
import Expense from "./Expense"
import "./styles/ItemList.css"
import DeleteOneButton from "components/Buttons/DeleteOneButton"
import EditButton from "components/Buttons/EditButton"
import DeleteAllButton from "components/Buttons/DeleteAllButton"
import { MainProps } from "containers/Body/Main"

interface ItemListProps
    extends Pick<MainProps, "items" | "onDeleteAll" | "onDelete" | "onEdit"> {}

const ItemList = ({ items, onDeleteAll, onDelete, onEdit }: ItemListProps) => {
    return (
        <div>
            <h1 className="text-3xl font-bold my-3">expenditure items</h1>
            <ul>
                {items?.map((item) => (
                    <li
                        key={item.id}
                        className="mb-2 flex items-center border-solid border-2 border-gray-300 rounded flexComp"
                    >
                        <div className="flex-1 px-4">
                            <Item product={item.product} />
                        </div>
                        <div className="flex-1 px-4">
                            <Expense expense={item.expense.toLocaleString()} />
                        </div>
                        <div className="px-4">
                            <div className="button-group flex-shrink-0">
                                <DeleteOneButton
                                    onDelete={() => onDelete && onDelete(item)}
                                    target={item}
                                />
                                <EditButton
                                    onEdit={() => onEdit && onEdit(item)}
                                    target={item}
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <DeleteAllButton onDeleteAll={() => onDeleteAll && onDeleteAll()} />
        </div>
    )
}

export default ItemList
