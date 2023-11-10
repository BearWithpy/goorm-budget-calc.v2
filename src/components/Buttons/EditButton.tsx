import React from "react"
import { IconButton } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import Item from "components/models/item"
import { editItem } from "features/item/itemsSlice"
import { useDispatch } from "react-redux"

interface EditProps {
    target: Item
}

const EditButton = ({ target }: EditProps) => {
    const dispatch = useDispatch()
    return (
        <IconButton
            aria-label="delete"
            size="large"
            color="primary"
            onClick={() => {
                dispatch(editItem(target))
            }}
        >
            <EditIcon fontSize="inherit" />
        </IconButton>
    )
}

export default EditButton
