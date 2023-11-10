import React from "react"
import { RootState } from "app/store"
import { useSelector } from "react-redux"
import CreateBox from "components/MessageBox/CreateBox"
import DeleteBox from "components/MessageBox/DeleteBox"
import EditBox from "components/MessageBox/EditBox"
import DeleteAllBox from "components/MessageBox/DeleteAllBox"

const ManageBox = (): JSX.Element => {
    const msg = useSelector((state: RootState) => state.message.msg)
    const showMessage = useSelector(
        (state: RootState) => state.message.showMessage
    )
    return (
        <>
            {showMessage && (
                <>
                    {msg === "create" && <CreateBox />}
                    {msg === "delete" && <DeleteBox />}
                    {msg === "edit" && <EditBox />}
                    {msg === "delete all" && <DeleteAllBox />}
                </>
            )}
        </>
    )
}

export default ManageBox
