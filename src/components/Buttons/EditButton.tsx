import React from "react"
import { IconButton } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import Item from "components/models/item"

interface EditProps {
    onEdit: (item: Item) => void
    target: Item
}

const EditButton = ({ onEdit, target }: EditProps) => {
    const handleEdit = () => {
        onEdit(target)
    }
    return (
        <IconButton
            aria-label="delete"
            size="large"
            color="primary"
            onClick={handleEdit}
        >
            <EditIcon fontSize="inherit" />
        </IconButton>
    )
}

export default EditButton
