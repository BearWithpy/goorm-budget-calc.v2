import React from "react"
import { Button } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { useDispatch } from "react-redux"
import { deleteAllItems } from "features/item/itemsSlice"
import { resetMessage, setMsg, setShowMessage } from "features/msg/messageSlice"

const DeleteAllButton = () => {
    const dispatch = useDispatch()

    return (
        <Button
            variant="outlined"
            color="error"
            className="mt-5"
            endIcon={<DeleteIcon />}
            onClick={() => {
                dispatch(deleteAllItems())
                dispatch(setMsg("delete all"))
                dispatch(setShowMessage(true))

                setTimeout(() => {
                    dispatch(resetMessage())
                }, 1500)
            }}
        >
            Delete ALL
        </Button>
    )
}

export default DeleteAllButton
