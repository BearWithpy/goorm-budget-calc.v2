import React from "react"
import { IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import Item from "components/models/item"
import { useDispatch } from "react-redux"
import { deleteOneItem } from "features/item/itemsSlice"
import { resetMessage, setMsg, setShowMessage } from "features/msg/messageSlice"

interface DeleteOneProps {
    target: Item
}

const DeleteOneButton = ({ target }: DeleteOneProps) => {
    const dispatch = useDispatch()

    return (
        <IconButton
            aria-label="delete"
            size="large"
            color="error"
            onClick={() => {
                dispatch(deleteOneItem(target))
                dispatch(setMsg("delete"))
                dispatch(setShowMessage(true))

                setTimeout(() => {
                    dispatch(resetMessage())
                }, 1500)
            }}
        >
            <DeleteIcon fontSize="inherit" />
        </IconButton>
    )
}

export default DeleteOneButton
