import React from "react"

import "./App.css"
import { Header } from "containers"
import { Main } from "containers"
import TotalBox from "components/MessageBox/TotalBox"
import CreateBox from "components/MessageBox/CreateBox"
import DeleteBox from "components/MessageBox/DeleteBox"
import EditBox from "components/MessageBox/EditBox"
import DeleteAllBox from "components/MessageBox/DeleteAllBox"
import { useSelector } from "react-redux"
import { RootState } from "app/store"

function App() {
    const msg = useSelector((state: RootState) => state.message.msg)
    const showMessage = useSelector(
        (state: RootState) => state.message.showMessage
    )

    return (
        <div>
            {showMessage && (
                <>
                    {msg === "create" && <CreateBox />}
                    {msg === "delete" && <DeleteBox />}
                    {msg === "edit" && <EditBox />}
                    {msg === "delete all" && <DeleteAllBox />}
                </>
            )}
            <Header />
            <Main />
            <TotalBox />
        </div>
    )
}

export default App
