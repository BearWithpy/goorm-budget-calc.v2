import React from "react"
import { Button } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

interface DeleteAllProps {
    onDeleteAll: () => void
}

const DeleteAllButton = ({ onDeleteAll }: DeleteAllProps) => {
    return (
        <Button
            variant="outlined"
            color="error"
            className="mt-5"
            endIcon={<DeleteIcon />}
            onClick={onDeleteAll}
        >
            Delete ALL
        </Button>
    )
}

export default DeleteAllButton
