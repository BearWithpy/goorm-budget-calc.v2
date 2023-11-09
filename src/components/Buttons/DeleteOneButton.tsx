import React from "react"
import { IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import Item from "components/models/item"

interface DeleteOneProps {
    onDelete: (item: Item) => void
    target: Item
}
const DeleteOneButton = ({ onDelete, target }: DeleteOneProps) => {
    const handleDelete = () => {
        onDelete(target)
    }
    return (
        <IconButton
            aria-label="delete"
            size="large"
            color="error"
            onClick={handleDelete}
        >
            <DeleteIcon fontSize="inherit" />
        </IconButton>
    )
}

export default DeleteOneButton
