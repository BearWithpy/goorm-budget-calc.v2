import React from "react"
import { Button } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"

const ItemEditButton = (): JSX.Element => {
    return (
        <div>
            <Button
                variant="contained"
                className="bg-indigo-500 hover:bg-indigo-700"
                endIcon={<SendIcon />}
                type="submit"
            >
                EDIT
            </Button>
        </div>
    )
}

export default ItemEditButton
